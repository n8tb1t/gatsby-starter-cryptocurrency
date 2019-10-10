import React from 'react';
import Button from '../../components/common/Button';
import Logo from '../../components/layout/Logo';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">

      <div className="cover__circle" />



  <div className="card_intro">
    <h2>“Catalyst” — is an anonymous platform, based on blockchain distributed network, intended to make almost instant payments with extremely low commission fees.</h2>
  </div>

<div className="card_intro">
    <h2>
The main goal of “Catalyst” is to create an infrastructure for Dapps
(decentralized applications), in order to give independent and creative
people a chance to adapt in a constantly changing world,
and get back control of their privacy and security.</h2>
  </div>

  <div className="card_intro_buttons">
    <div className="cover__buttons">
      <Button
        empty
        text="Download"
        icon="download"
        link="/docs/catalyst-specs/getting-started/"
      />
      <Button text="Get started" icon="flag" link="/docs/catalyst-specs/" />
    </div>
  </div>
    </div>
  </section>
);

export default Cover;

