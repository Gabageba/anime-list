import React from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState('main')

  return (
    <div className={styles.popup}>
      <Header />
      <Content />
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
