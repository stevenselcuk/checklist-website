import React from 'react'
import styles from './Important.module.css'

// eslint-disable-next-line react/prop-types
const Important = ({ text }) => {
  return <div className={styles.importantNote}>{text}</div>
}

export default Important
