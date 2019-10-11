import React from 'react';
import HomeList from './HomeList';

const data = [
  'As an independent fork of <a href="https://turtlecoin.lol" target="_blank" rel="noopener noreferrer">Turtle Coin</a>, Catalyst also seeks to be a secure and private network. Catalyst Coin is resistant to blockchain analysis and provides untraceable transactions. By default, Catalyst utilizes cryptographic methods to send funds with no identifying information.',
  'Aside from making mining more approachable, Argon2/Chukwa is accelerating blockchain verification making Catalyst’s network faster than the networks of the other CryptoNote-based cryptocurrencies.',
  'CPU/GPU friendly algorithm for the maintenance of its Proof-of-work.',
];

const Giants = () => (
  <section className="home__part home__giants">
    <div className="container giants__container">
      <h1 className="giants__title">
        Built on the Shoulders of <strong>Giants</strong>
      </h1>
      <article className="giants__content">
        <p className="hidden-small">
          <strong>Catalyst</strong> utilizes <strong>Argon2/CHUKWA</strong> a <strong>CryptoNote</strong> application layer protocol-based algorithm, that powers several decentralized privacy-oriented digital currencies. It aims to be an evolution of the ideas behind <strong>Bitcoin. </strong>Another <strong>significant difference</strong> is <strong>CryptoNote's</strong> hash-based proof-of-work algorithm. Bitcoin uses <strong>SHA-256</strong>, which is a <strong>CPU-bound function</strong>. That means that participants (miners) are only limited by their calculation speeds, and it is relatively cheap to create an application-specific integrated circuit <strong>(ASIC)</strong> device, which will surpass an ordinary computer in hashes per unit of money. <strong>CryptoNote</strong> uses <strong>memory bound</strong> function CryptoNight, which cannot be easily pipelined.
        </p>
        <HomeList data={data} className="giants__list" />
        <p className="hidden-small">
          Catalyst Network API is also designed as a set of independent and reusable services. You can perfectly use them in a
          standalone way, or integrate them by yourself in your own project.
        </p>
      </article>

    </div>
  </section>
);

export default Giants;
