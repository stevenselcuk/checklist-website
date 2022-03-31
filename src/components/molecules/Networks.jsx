import React, { memo } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { moveInTop } from '../atoms/Transitions'
import Icon from '../atoms/Icon'
import { useApp } from '../../hooks/use-app'
import styles from './Networks.module.css'

const linkClasses = (key) =>
  key === 'Mail' ? `u-email ${styles.link}` : `u-url ${styles.link}`

const NetworkLink = ({ name, url }) => (
  <a
    className={linkClasses(name)}
    href={url}
    data-testid={`network-${name.toLowerCase()}`}
  >
    <Icon name={name} />
    <span className={styles.title}>{name}</span>
  </a>
)

NetworkLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

function Networks({ small, hide }) {
  const { basics } = useApp()
  if (hide) return null

  const Animation = posed.aside(moveInTop)

  return (
    <Animation className={small ? styles.small : styles.networks}>
      <NetworkLink name="Mail" url={`mailto:${basics.email}`} />

      {basics.profiles.map((profile) => (
        <NetworkLink
          key={profile.network}
          name={profile.network}
          url={profile.url}
        />
      ))}
    </Animation>
  )
}

export default memo(Networks)

Networks.propTypes = {
  small: PropTypes.bool,
  hide: PropTypes.bool
}
