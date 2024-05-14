import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            
          </ul>
        </article> */}

        {/* END OF UI/UX  */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring seamless functionality and aesthetics across all devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Improving load times and overall performance for optimal user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring consistent functionality across different web browsers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing interactive elements such as animations, forms, and dynamic content to enhance user engagement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Providing ongoing maintenance and support to keep websites and applications up-to-date and functional.</p>
            </li>
            
          </ul>
        </article>

        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing robust server-side code to handle client requests and manage data operations efficiently.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring the smooth operation and organization of databases to store and retrieve data effectively..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating interfaces that allow different software applications to communicate and share data seamlessly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Implementing security protocols to protect data and systems from unauthorized access and cyber threats.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimizing backend processes to enhance speed and efficiency, ensuring a seamless user experience.</p>
            </li>
            
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
