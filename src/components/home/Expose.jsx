import React from 'react'
import HomeList from './HomeList'

const data = [
  'Catalyst was created by the <strong>community</strong> — for the <strong>community.</strong>',
  'We do not recognize <strong>I.C.Os</strong>, <strong>Master Nodes</strong>, <strong>stacking</strong> and technical <strong>premine.</strong>',
  `We don't have a <strong>central leadership</strong>, all the decisions regarding the project development are made exclusively by the <strong>community!</strong>`
]

const Expose = () => (
  <section className="home__part home__expose">
    <div className="container expose__container">
      <article className="expose__content">
        <h1 className="expose__title">
          Next to the <strong>Breast</strong>, Catalyst's the <strong>Best!</strong>
        </h1>
        <p>
          The main goal of “Catalyst” is to create an infrastructure for Dapps (decentralized
          applications), in order to give independent and creative people a chance to adapt in a
          constantly changing world, and get back control of their privacy and security.
        </p>
        <HomeList data={data} className="expose__list" />
      </article>
    </div>
  </section>
)

export default Expose
