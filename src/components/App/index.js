import React from 'react'
import PropTypes from 'prop-types'

import { BACKGROUND_COLOR_MAP } from '@/constants'

import styles from './App.css'

const App = ({ data }) => {
  const { icon, summary, temperature } = data
  const bgStyle = {
    backgroundColor:
      BACKGROUND_COLOR_MAP[icon] || BACKGROUND_COLOR_MAP['default'],
  }

  return icon ? (
    <main className={styles.app} style={bgStyle}>
      <h1 className={styles.appTitle}>
        {summary} ({icon}) &mdash; {Math.round(temperature)}&deg;
      </h1>
    </main>
  ) : null
}

App.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    summary: PropTypes.string,
    temperature: PropTypes.number,
  }),
}

export default App
