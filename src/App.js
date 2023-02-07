import React from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className={styles.popup}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App