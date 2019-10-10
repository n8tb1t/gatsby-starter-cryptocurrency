import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import Button from '../../components/common/Button';


import api from '../../images/eco_api.svg';
import distribution from '../../images/eco_distribution.svg';
import community from '../../images/eco_community.svg';
import devs from '../../images/eco_devs.svg';

const EcosystemCard = ({ big, image, link, text, title }) => (
  <div className={classnames('grid__item', { full: big })}>
    <div className={classnames('card ecosystem__card', { big })}>
      <div className="card__circle">
        <img src={image} alt={title} width="646" height="646" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <article className="card__autosize">
          <p>{text}</p>
        </article>
        <Button text="Read more" className="btn ecosystem__button small" link={link} />
      </div>
    </div>
  </div>
);

EcosystemCard.propTypes = {
  big: PropTypes.bool,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

EcosystemCard.defaultProps = {
  big: false,
};

const Ecosystem = () => (
  <section className="home__part home__ecosystem">
    <div className="container">
      <h1 className="ecosystem__title">
        Catalyst Network API <strong>Framework</strong>
      </h1>
      <h5>API framework is a set of tools (RPC-Service, Wallet-Service, Payment-Gataway) e.t.c. to build and deploy blcokchain applications.</h5>
      <div className="ecosystem__content grid__container">
        <EcosystemCard
          big
          image={api}
          link="/docs/api-documentation/"
          text="With Catalyst API, you can build decentralized blockchain applications, extend the current blockchain functionality using our well documented APIs. It's never been easier to start a blockchain project, whether it be a messaging app or a data analytics tool."
          title="Catalyst API"
        />
        <EcosystemCard
          image={distribution}
          link="/docs/catalyst-specs/catalyst-specs/"
          text="Fair distribution model, neither premine nor I.C.O.  with a relatively limited supply 77m, and slow emission makes us unique, amongst most other coins."
          title="Distribution Model"
        />
        <EcosystemCard
          image={community}
          link="https://discord.gg/Wf8hsBU"
          text="Catalyst was built by the community for the community! We don't have a central leadership, all the decisions regarding the project development are made exclusively by the community!"
          title="Community-oriented"
        />
        <EcosystemCard
          image={devs}
          link="/support/"
          text="Our developers are one of the best in their field, they work constantly to make Catalyst better and more competitive. Using all help they can get from the community and the fellow programmers."
          title="Awsome dev. team"
        />
      </div>
    </div>
  </section>
);

export default Ecosystem;
