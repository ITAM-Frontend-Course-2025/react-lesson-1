import React from 'react'
import Header from './components/Header/Header'
import Exstra from './components/ExstraInfo/ExtraInfo'
import MainInfo from './components/MainInfo/MainInfo'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Exstra />
      <MainInfo />
    </div>
  )
}

export default App