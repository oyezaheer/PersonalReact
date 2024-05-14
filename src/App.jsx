import React from 'react'
import './components/header/Header'
import Header from './components/header/Header'
import './components/nav/Nav'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials  from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import About from './components/about/About'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}
// minor
export default App
