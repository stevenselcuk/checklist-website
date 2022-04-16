import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../hooks/use-app'
import { useMeta } from '../hooks/use-meta'
import SEO from '../components/atoms/SEO'
import styles from './index.module.css'
import { ReactComponent as DownloadBadge } from '../images/DownloadBadgeDark.svg'

Home.propTypes = {
  pageContext: PropTypes.object.isRequired
}

function Home({ pageContext }) {
  const { basics } = useApp()
  const meta = useMeta()

  const image = `.${meta.img.childImageSharp.resize.src}`

  return (
    <>
      <SEO title={basics.name} description={basics.label} />
      <div className={styles.hero}>
        <div className={styles.details}>
          <div className={styles.hugetitle}>{basics.name}</div>
          <div className={styles.desc}>{basics.summary}</div>
          <div className={styles.badge}>
            <a href={basics.storeUrl} title={basics.ctaDetails}>
              <DownloadBadge />
            </a>
          </div>
        </div>

        <img
          src={image}
          className={styles.productimage}
          alt="iPad Pro 5th generation mockup"
          title={basics.ctaDetails}
        />
      </div>
    </>
  )
}

export default memo(Home)
