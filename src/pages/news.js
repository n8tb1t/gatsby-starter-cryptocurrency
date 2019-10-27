import React, { useRef, useEffect } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Bird from '../images/twitter_bird.svg'

export default ({ location }) => {
  const timeline = useRef(null)

  useEffect(() => {
    const createTimeline = () => {
      twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'catalyst_CX'
        },
        timeline.current
      )
    }

    if (twttr.widgets) {
      createTimeline()
    } else {
      twttr.ready(createTimeline)
    }
  }, [])

  return (
    <Layout location={location}>
      <div className="news">
        <Helmet title="News" />
        <section className="container">
          <h1>
            What&#39;s <strong>new</strong>?
          </h1>
          <div className="news__content">
            <div className="news__birds">
              <img src={Bird} alt="bird" width="70" height="70" />
              <img src={Bird} alt="bird" width="50" height="50" />
              <img src={Bird} alt="bird" width="40" height="40" />
            </div>
            <div className="twitter__timeline" ref={timeline} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
