import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

import nb from '../images/devs/nb.jpg';
import db from '../images/devs/db.jpg';
import hooftly from '../images/devs/hooftly.png';
import ninja from '../images/devs/ninja.png';
import lithy from '../images/devs/LithyRiolu.png';
import zpalmtree from '../images/devs/zpalmtree.png';
import LeinAd2k from '../images/devs/LeinAd2k.png';
import pluto from '../images/devs/pluto.png';
import thegoldensparrow from '../images/devs/thegoldensparrow.jpg';

const SupportCard = ({ children, image, title }) => (
  <div className="support-card">
    <img className="support-card__image" src={image} alt={title} width="100" height="100" />
    <h3>{title}</h3>
    <div className="support-card__content">{children}</div>
  </div>
);

const SupportCardSmall = ({ children, image, title }) => (
  <div className="support-card-small">
    <img className="support-card__image" src={image} alt={title} width="100" height="100" />
    <h3>{title}</h3>
    <div className="support-card__content">{children}</div>
  </div>
);


SupportCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SupportCard.defaultProps = {
  children: null,
};

const SupportPage = props => (
  <Layout location={props.location}>
    <div className="support">
      <Helmet title="Support" />
      <section className="container">
        <h2>
          <strong>Core Developers:</strong>
        </h2>
        <div className="support__cards">

          <SupportCard title="dirtybits" image={db}>
            <p>Graduated from an IT department of one of the biggest US
              universities, worked at Google.
              Currently working as a DevOps(C++) developer in a well-known
              US company. He is very passionate about crypto, well oriented in
              crypto space in general, and also one of the contributors
              on the Turtlecoin Project.
           You can contant him on <a href="https://github.com/dirtybits"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>{' '} or <a href="https://twitter.com/Menutra"
                target="_blank"
                rel="noopener noreferrer"
              >Twitter</a>
              </p>
          </SupportCard>

          <SupportCard title="n8tb1t" image={nb}>
            <p>Has more than 10 years of experience working in big startups
              around the world, served as a developer in the Israeli defense
              force, fluent in English, Hebrew and Russian,
              hooked on crypto since 2016.
              Currently, working on the project full time.
              You can contant him on <a href="https://github.com/n8tb1t"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>{' '} or <a href="https://twitter.com/n8tb1t"
                target="_blank"
                rel="noopener noreferrer"
              >Twitter</a>
            </p>
          </SupportCard>

          <SupportCard title="@TheGoldenSparrow" image={thegoldensparrow}>
            <p>is an old member of the crypto space community, thus prefer to stay anonymous, but those of you who know him, well aware that he is a very respectful member of the bitcointalk forum. @TheGoldenSparrow is an author of cat7 blog, where you can find an ample of technical information about Catalyst Network, he is currently representing Catalyst on various media platforms and helping the new members of the community on our <a href="https://discord.gg/Wf8hsBU"
                target="_blank"
                rel="noopener noreferrer"
              >Discord</a> channel, where you can always find him.
            </p>
          </SupportCard>


        </div>

       <h2>
          <strong>Friendly devs, who helped us to make CX better:</strong>
        </h2>
        <div className="support__cards">

          <SupportCardSmall title="Hooftly" image={hooftly}>
            <p>AmityCoin Developer <a href="https://github.com/CalexCore"
                target="_blank"
                rel="noopener noreferrer"
              >AmityCoin</a>
            </p>
          </SupportCardSmall>

          <SupportCardSmall title="NinjaCoin-Master" image={ninja}>
            <p>NinjaCoin Developer <a href="https://github.com/NinjaCoin-Master"
                target="_blank"
                rel="noopener noreferrer"
              >NinjaCoin</a>
            </p>
          </SupportCardSmall>

          <SupportCardSmall title="LithyRiolu" image={lithy}>
            <p>Developer for <a href="https://github.com/LithyRiolu"
                target="_blank"
                rel="noopener noreferrer"
              >@Lithe-Project</a> & @turtlecoin
            </p>
          </SupportCardSmall>


          <SupportCardSmall title="zpalmtree" image={zpalmtree}>
            <p>Blockchain Developer <a href="https://github.com/zpalmtree"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>
            </p>
          </SupportCardSmall>

          <SupportCardSmall title="LeinAd2k" image={LeinAd2k}>
            <p>NashCash Developer <a href="https://github.com/LeinAd2k"
                target="_blank"
                rel="noopener noreferrer"
              >NashCash</a>
            </p>
          </SupportCardSmall>

          <SupportCardSmall title="CapEtn a.k.a. Pluto/WRKZ" image={pluto}>
            <p>WRKZ Developer<a href="https://github.com/wrkzcoin"
                target="_blank"
                rel="noopener noreferrer"
              >WRKZCoin</a>
            </p>
          </SupportCardSmall>

        </div>
          <h3><strong>
          There are many others, so if you think we missed you, just let us know!
          </strong></h3>
          <br/><br/><br/>
          <h5>We also want to thank active community members and supporters:</h5>

          <ul className="supporters">
            <li>@Synku</li>
            <li>@Chef</li>
            <li>@WicheR</li>
            <li>@Rachel</li>
            <li>@Valen</li>
            <li>@MunchieHigh420</li>
            <li>@xav</li>
            <li>@Brendyn</li>
          </ul>

      </section>
    </div>
  </Layout>
);
SupportPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SupportPage;
