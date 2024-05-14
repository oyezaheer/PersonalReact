import React from "react"
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
// import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About me</h2>
    {
          // eslint-disable-next-line
    }
    
      <div className="container about__container">
        <div className="about__me">
        {
          // eslint-disable-next-line
        }
        
          <div className="about__me-image">
          {
          // eslint-disable-next-line
          }
            <img src={ME} alt="About " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

           
            <article className='about__card'>
            <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* <article className='about__card'>
            <FiUser className='about__icons'/>
              <h5>Clients</h5>
              <small>200+ India</small>
            </article> */}

            <article className='about__card'>
            <VscFolderLibrary className='about__icons'/>
              <h5>Project</h5>
              <small>6+ Completed</small>
            </article>

          </div>


          <p>
          As a MERN stack developer, I specialize in building robust and scalable web applications using MongoDB, Express.js, React.js, and Node.js. With a focus on creating responsive and user-friendly interfaces, I aim to deliver high-quality solutions that meet the unique needs of each project.
             </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
