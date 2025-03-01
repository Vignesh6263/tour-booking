import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
   {
      path: '/home',
      display: 'Home'
   },
   {
      path: '/about',
      display: 'About'
   },
   {
      path: '/tours',
      display: 'Tours'
   },
]

const quick__links2 = [
   {
      path: '/gallery',
      display: 'Gallery'
   },
   {
      path: '/login',
      display: 'Login'
   },
   {
      path: '/register',
      display: 'Register'
   },
]

const Footer = () => {
   const year = new Date().getFullYear()

   return (
      <footer className='footer'>
         <Container>
            <Row>
               <Col lg='3'>
                  <div className="logo">
                     <img src={logo} alt="" />
                     <p>AchieversIT has been delivering outstanding quality training in IT sector courses. 8 years of experience in furnishing qualitative training</p>
                     <div className="social__link d-flex align-items-center gap-4">
                        <span>
                           <Link to='https://www.youtube.com/channel/UCgXhUR82NKEMd3_ZZbefrdA'>
                              <i class='ri-youtube-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbC1NcV9LZmZ6Tmx2VTJSRXhXV0dCLVBfQlRqUXxBQ3Jtc0tubmtDWjViVFRIZ0stc0FpQjFucTBjbVFvUmRJU0pvZWU5eGE1VDZNZDBFUmphY3NNYS1wbm5naGN5cFFRekVRRHVFenpBOE03azdPUEI2SE0xUVNEVk1XVll2d0otS3c3Rk5EVmNTUkEyanJuVFhjNA&q=https%3A%2F%2Fin.pinterest.com%2Fachieversit%2F_saved%2F'>
                              <i class='ri-github-fill'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbkZ6QjFrRHdUX0ZJTGFoblJqSE92ckY1UTNXd3xBQ3Jtc0tsYzdSTmpYbGZBel9pOEVDb1U4WGxsamNsZFU3aUhsQndjX0tLWk9wbUhIQmp5c2FXbmNkeHp1T0xhMXBZY0FFSDMwVzJycFFkajlrMU5KQkpWQ1VVNk02RHhNSE0wbjZGVWRQRVlJMU5hejVDdTVTTQ&q=https%3A%2F%2Fwww.facebook.com%2FAchieversITTrainings'>
                              <i class='ri-facebook-circle-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbkVDRmM4N0lMdjFCNVBvbEM5amowUUQwaDc5Z3xBQ3Jtc0tsZ0dvNDYwTUFoVDRqczRzUl81Z2hTLTlxVmtQQ0ZhdDlMNm5SYWMzUTJiQVc0cGhpMnkxZWRSaEFESzlYN0pJNW01X0NBQmVQSjZuNzZiZkx6LWhIT2t5R0c2dUtNQm13RFQ4WGpvVTBYZkwxbmpvWQ&q=https%3A%2F%2Fwww.instagram.com%2Fachieversit%2F'>
                              <i class='ri-instagram-line'></i>
                           </Link>
                        </span>
                     </div>
                  </div>
               </Col>

               <Col lg='3'>
                  <h5 className="footer__link-title">Discover</h5>

                  <ListGroup className='footer__quick-links'>
                     {
                        quick__links.map((item, index) => (
                           <ListGroupItem key={index} className='ps-0 border-0'>
                              <Link to={item.path}>{item.display}</Link>
                           </ListGroupItem>
                        ))
                     }
                  </ListGroup>
               </Col>
               <Col lg='3'>
                  <h5 className="footer__link-title">Quick Links</h5>

                  <ListGroup className='footer__quick-links'>
                     {
                        quick__links2.map((item, index) => (
                           <ListGroupItem key={index} className='ps-0 border-0'>
                              <Link to={item.path}>{item.display}</Link>
                           </ListGroupItem>
                        ))
                     }
                  </ListGroup>
               </Col>
               <Col lg='3'>
                  <h5 className="footer__link-title">Contact</h5>

                  <ListGroup className='footer__quick-links'>
                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-map-pin-line'></i></span>
                           Address :
                        </h6>
                        <p className='mb-0'>Vaniyambadi</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-mail-line'></i></span>
                           Email:
                        </h6>

                        <p className='mb-0'>kdvijay5128@gmail.com</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-phone-fill'></i></span>
                           Phone:
                        </h6>

                        <p className='mb-0'>73052 06263</p>
                     </ListGroupItem>
                  </ListGroup>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default Footer