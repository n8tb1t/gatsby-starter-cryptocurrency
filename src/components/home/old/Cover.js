import React from 'react';

import Button from '../../components/common/Button';
import Logo from '../../components/layout/Logo';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">
      <div className="cover__circle" />

      <div className="cover__logo">Catalyst Network</div>
      <h2>An anonymous payment system, based on blockchain distributed network, intended to make instant transactions with extremely low commission fees.</h2>
      <div className="cover__buttons">
        <Button
          empty
          text="Download"
          icon="download"
          link="/docs/catalyst-specs/getting-started"
        />
        <Button text="Get started" icon="flag" link="/docs/catalyst-specs" />
      </div>
    </div>

  </section>
);

export default Cover;
