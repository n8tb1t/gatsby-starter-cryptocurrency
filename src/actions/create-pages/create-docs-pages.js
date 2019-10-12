const path = require('path');

const jsyaml = require('js-yaml');
const { readFileSync } = require('fs');

const { current, versions } = require('../../../constants');
const versionHelper = require('../../lib/versionHelper');

const navs = {};

versions.push(current);
versions.forEach(version => {
  const prefixedVersion = `${versionHelper.getPrefixedVersion(version)}/`;
  navs[prefixedVersion] = jsyaml.safeLoad(readFileSync(`./content/docs/${prefixedVersion}nav.yml`, 'utf8'));
});

module.exports = async (graphql, actions) => {
  const { createPage, createRedirect } = actions;
  const docPageTemplate = path.resolve('src/templates/doc.js');

const allDocsPages = await graphql(`
  query getAllDocsPages {
  result: allMarkdownRemark(limit: 1000, filter: {fields: {sourceType: {eq: "docs"}}}) {
    edges {
      node {
        html
        headings {
          value
        }
        fields {
          slug
          redirect
        }
      }
    }
  }
}`)

  if (allDocsPages.errors) { throw allDocsPages.errors }

    const pages = allDocsPages.data.result.edges

    pages.forEach(edge => {
      const redirect = edge.node.fields.redirect;
      const slug = '/docs' + edge.node.fields.slug.replace(`${current}/`, '');
      const slugArray = edge.node.fields.slug.split('/');
      const prefixedVersion = slugArray[1];
      const prefixedVersionSlug = `${prefixedVersion}/`.replace(`${current}/`, '');
      const originalVersion = versionHelper.getOriginalVersion(slugArray[1]);
      const section = slugArray[2];
      const article = slugArray[3] ? slugArray[3] : 'index';

      let previous = {};
      let next = {};

      const nav = navs[`${prefixedVersion}/`];

      nav.chapters
        .filter(chapter => chapter.path === section)
        .forEach(chapter => {
          chapter.items
            .forEach((item, indexItem) => {
              if (item.id !== article) {
                return;
              }

              if ((chapter.items.length - 1) !== indexItem) {
                next.slug = versionHelper.generateSlugNextChapter(
                  prefixedVersionSlug,
                  section,
                  chapter.items[indexItem + 1].id
                );
                next.title = chapter.items[indexItem + 1].title;
              }

              if (0 !== indexItem) {
                previous.slug = versionHelper.generateSlugPreviousChapter(
                  prefixedVersionSlug,
                  section,
                  chapter.items[indexItem - 1].id
                );
                previous.title = chapter.items[indexItem - 1].title;
              }
            });
        });

      createPage({
        component: docPageTemplate,
        context: {
          html: edge.node.html,
          nav,
          next,
          prefixedVersion,
          previous,
          title: edge.node.headings[0].value,
          urlEditDocumentation: versionHelper.generateSlugEditDocumentation(
            originalVersion,
            section,
            article
          ),
          version: prefixedVersionSlug,
        },
        path: slug,
      });

      const redirects = [slug.slice(0, -1)];
      if (redirect) {
        redirects.push(redirect, `${redirect}/`);
      }
      redirects.forEach(redirectPath =>
        createRedirect({
          fromPath: redirectPath,
          toPath: slug,
          isPermanent: true,
          redirectInBrowser: true,
        })
      );
    });
}
