import React from 'react';
import code from '../../data/seo-code';
import Laptop from '../../images/laptop.svg';
import Prism from '../../vendor/Prism';
import { Link } from 'gatsby';

const Seo = () => (
  <section className="home__seo home__part">
    <div className="container seo__container">
      <h1 className="seo__title">
        Powerful <strong>RPC API</strong> clients and services.
      </h1>
      <div className="seo__code">
        <img src={Laptop} alt="interoperability" width="505" height="445" />
        <pre className="language-json">
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code, Prism.languages.json),
            }}
          />
        </pre>
      </div>
      <div className="seo__content">
        <p>
          Catalyst Coin Core RPC APIs include <Link to="/docs/api-documentation/daemon-json-rpc-api">catalystd</Link>, <Link to="/docs/api-documentation">wallet-api</Link> and <Link to="/docs/api-documentation/wallet-rpc-api">catalyst-service</Link>, which provide JSON 2.0 RPC interface for interacting with the blockchain.
        </p>
        <p className="hidden-small">
          All the APIs are well documented, so you don't have to waste time and start using them right away. The services are well tested in stress conditions in our test-net, are very stable and use the minimum required system resources.
        </p>
        <p>
          <strong>RPC API</strong> is platform agnostic, there are numerous clients for most common programming languages, <strong>just pick one and start using it right away.</strong>
        </p>
        <p className="hidden-small">
             It doesn't matter which platform, you use, whether it be mobile, windows or Linux, RPC API clients are available for <a href="https://www.npmjs.com/package/turtlecoin-rpc" target="_blank" rel="noopener noreferrer">NodeJs</a>, <a href="https://github.com/turtlecoin/turtlecoin-rpc-php" target="_blank" rel="noopener noreferrer">PHP</a>, <a href="https://github.com/turtlecoin/turtlecoin-rpc-python" target="_blank" rel="noopener noreferrer">Python</a> and <a href="https://github.com/turtlecoin/turtlecoin-rpc-go" target="_blank" rel="noopener noreferrer">Go</a>, so you can use your favorite stack for Dapps building without reinventing the wheel.
        </p>
      </div>
    </div>
  </section>
);

export default Seo;
