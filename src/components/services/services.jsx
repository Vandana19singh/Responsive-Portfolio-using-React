import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Wordpress Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Build Multiple websites using Wordpress.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Prepare website proposals to present to clients, provide technical support to clients.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Manage a user guide to help clients understand site features.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Managed comments from visitors, including private emails.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Introduced new plug-ins and extensions to make the website more usable.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Helped in the creation of new website features to update sites for new SEO rules.</p>
            </li>
           
          </ul>
          
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Coding Developed by writing lines of code using HTML, CSS,JavaScript and languages.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Determined coding requirements for site creation, including e-commerce capability.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Explore, experiment and integrate new programming languages, techniques.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Design, build and maintain a web-based suite of tools for cloud storage.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Communicate with various project stakeholders across marketing, content, design.</p>
            </li>
            
           
          </ul>
          
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
           
          </ul>
          
        </article>
        
      </div>
    </section>
  )
}

export default services