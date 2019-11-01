import React, { useRef, useEffect } from 'react'

const {
  projectGithub,
  siteMetadata: { twitter }
} = require('../../../config')

export default () => {
  const twitterButton = useRef(null)

  useEffect(() => {
    const createWidget = () => {
      // noinspection JSUnresolvedVariable,JSUnresolvedFunction
      twttr.widgets.createFollowButton(twitter, twitterButton.current, {
        size: 'medium',
        showScreenName: false
      })
    }

    // noinspection JSUnresolvedVariable
    if (twttr.widgets) {
      createWidget()
    } else {
      // noinspection JSUnresolvedVariable,ES6ModulesDependencies
      twttr.ready(createWidget)
    }
  }, [])

  return (
    <footer className="footer openable">
      <img className="footer__logo" src={`/logo.svg`} alt="site logo" width="300" />
      <p className="footer__copyright">
        Copyright © 2019{' '}
        <a href="https://github.com/n8tb1t" target="_blank" rel="noopener noreferrer">
          n8tb1t
        </a>
      </p>
      <p className="footer__sponsored">
        Sponsored by{' '}
        <a href="https://funding.cryptocatalyst.net" target="_blank" rel="noopener noreferrer">
          Catalyst Community
        </a>
      </p>
      <p className="footer__licence">
        Code licensed under{' '}
        <a
          href="https://raw.githubusercontent.com/cx-catalyst/catalyst-website/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT
        </a>
        , documentation under{' '}
        <a
          href="https://raw.githubusercontent.com/cx-catalyst/catalyst-docs/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT
        </a>
        .
      </p>
      <div className="footer__follow">
        <iframe
          title="github"
          src={`https://ghbtns.com/github-btn.html?user=${projectGithub.user}&repo=${projectGithub.repo}&type=star&count=true&size=small`}
          frameBorder={0}
          scrolling={0}
          width="100px"
          height="20px"
        />
        <div className="footer__twitter" ref={twitterButton} />
      </div>
    </footer>
  )
}
