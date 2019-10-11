import React, { Component } from 'react';

// import LogoCX from '../../images/icon.png';
import LogoCX from '../../images/logo.svg';

class Footer extends Component {
  /* eslint-disable no-undef */
  componentDidMount() {
    if (twttr.widgets) {
      this.createWidget();
    } else {
      twttr.ready(this.createWidget);
    }
  }

  createWidget = () => {
    twttr.widgets.createFollowButton('catalyst_CX', this.twitterButton, {
      size: 'medium',
      showScreenName: false,
    });
  };

  /* eslint-enable no-undef */

  render() {
    return (
      <footer className="footer openable">
        <img className="footer__logo" src={LogoCX} alt="spidey" width="300" />
        <p className="footer__copyright">
          Copyright © 2019{' '}
          <a href="https://github.com/n8tb1t" target="_blank" rel="noopener noreferrer">
            n8tb1t
          </a>
        </p>
        <p className="footer__tilleuls">
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
          <a href="https://raw.githubusercontent.com/cx-catalyst/catalyst-docs/master/LICENSE" target="_blank" rel="noopener noreferrer">
            MIT
          </a>
          .
        </p>
        <div className="footer__follow">
          <iframe
            title="github"
            src="https://ghbtns.com/github-btn.html?user=catalystdevelopment&repo=catalyst&type=star&count=true&size=small"
            frameBorder={0}
            scrolling={0}
            width="100px"
            height="20px"
          />
          <div
            className="footer__twitter"
            ref={el => {
              this.twitterButton = el;
            }}
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
