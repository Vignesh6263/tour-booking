import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/login.css';
import CommonSection from '../shared/CommonSection';

const About = () => {
   return (
      <>
         <CommonSection title="About Me" />
         <section>
            <Container>
               <Row>
                  <Col lg='8' className='m-auto'>
                     <div className="login__container d-flex justify-content-between" style={{ background: 'var(--secondary-color)', padding: '2rem', borderRadius: '0.5rem' }}>
                        <div className="login__form" style={{ width: '100%' }}>
                           <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>VIGNESH D</h2>
                           {/* <img style={{width:'100px',height:'100px'}}></img> */}
                           <p style={{ color: '#fff', textAlign: 'center' }}>
                              kdvijay5128@gmail.com | +91-7305206263 | 
                              <a href="https://www.linkedin.com/in/vignesh-d-879902251" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--heading-color)', marginLeft: '5px' }}>
                                 LinkedIn
                              </a>
                           </p>

                           <h5 style={{ color: '#fff', marginTop: '2rem' }}>Objective</h5>
                        

                           <h5 style={{ color: '#fff', marginTop: '2rem' }}>Education</h5>
                           <ul style={{ color: '#fff', paddingLeft: '20px' }}>
                              <li>M.Sc, Computer Science | CGPA: 7.47<br />Sacred Heart College (Autonomous), Tirupattur District | July 2021 – May 2023</li>
                              <li>B.Sc, Computer Science | CGPA: 7.33<br />Islamiah College (Autonomous), Vaniyambadi, Tirupattur District | July 2018 – May 2021</li>
                           </ul>

                           <h5 style={{ color: '#fff', marginTop: '2rem' }}>Projects</h5>
                           <ul style={{ color: '#fff', paddingLeft: '20px' }}>
                              <li>
                                 <strong>E-commerce Website:</strong> Developed a responsive e-commerce platform with a modern UI/UX using HTML, CSS, and JavaScript. 
                                 <a href="https://github.com/Vignesh6263/E-Commerce_Furniture_HTML_CSS" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--heading-color)', marginLeft: '5px' }}>
                                    GitHub
                                 </a>
                              </li>
                          
                              <li><strong>Tour Booking Website :</strong> Tour booking application using React, Node.js, Express, and MongoDB.</li>
                           </ul>

                           <h5 style={{ color: '#fff', marginTop: '2rem' }}>Skills</h5>
                           <p style={{ color: '#fff' }}>
                              <strong>Programming Languages:</strong> JavaScript, React, Node.js, HTML, CSS, SQL<br />
                              <strong>Frameworks & Libraries:</strong> Express, Mongoose<br />
                              <strong>Soft Skills:</strong> Adaptability, Multitasking, Problem Solving, Troubleshooting
                           </p>

                           <h5 style={{ color: '#fff', marginTop: '2rem' }}>Certifications</h5>
                           <p style={{ color: '#fff' }}>
                              MERN Full Stack Development, AchiversIT, Bangalore | July 2024 – Present
                           </p>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default About;