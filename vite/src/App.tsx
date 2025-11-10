import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import MainInfo from './components/MainInfo/MainInfo'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <MainInfo />
    </div>
  )
}

export default App