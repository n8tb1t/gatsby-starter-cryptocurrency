import React from 'react'

const data = [
  <p>
    <strong>Fungible</strong>, <strong>Portable</strong>
    &nbsp; and <strong>unconfiscatable</strong> currency
  </p>,
  <p>
    Super easy <strong>one click payments</strong> with multiple wallets
  </p>,
  <p>
    Extremely Accessible <strong>mine it</strong> or <strong>buy on exchanges</strong>
  </p>,
  <p>
    <strong>Decentralized</strong> and not controlled by any entity or <strong>government</strong>
  </p>
]

const circles = data.map((content, index) => (
  <article key={`article${index}`} className="aio__circle">
    {content}
  </article>
))

export default () => (
  <section className="home__part home__all-in-one">
    <div className="container">
      <h1 className="aio__title">
        An <strong>All-in-One solution</strong> for Modern Transactions
      </h1>
      <div className="aio__circles">{circles}</div>
    </div>
  </section>
)
