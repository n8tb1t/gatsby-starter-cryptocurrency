import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../components/common/Button';

import learnMore from '../../images/open-book.svg';
import download from '../../images/wallet.svg';

const CustomButton = ({type, link}) => {
  switch(type) {
    case 'download': return <Button empty text="Download" icon="download" link={link} />
    case 'docs': return <Button text="Get started" icon="flag" link={link} />
  }
}

const EcosystemCard = ({ big, image, link, text, title, type }) => (
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
        <CustomButton type={type} link={link} />
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
        Getting started with <strong>Catalyst</strong>
      </h1>
      <h5>Our ecosystem is very friendly for beginners, and for experienced miners.</h5>
      <div className="ecosystem__content grid__container">
        <EcosystemCard
          image={download}
          link="/docs/catalyst-specs/getting-started"
          text="Download the GUI wallet or console CLI, to generate a new Catalyst address, and start using it."
          title="Get the wallet"
          type="download"
        />
        <EcosystemCard
          image={learnMore}
          link="/docs/catalyst-specs"
          text="Start with reading our detailed documentation, to learn more about the project and its services."
          title="Study docs"
          type="docs"
        />
      </div>
    </div>
  </section>
);

export default Ecosystem;
