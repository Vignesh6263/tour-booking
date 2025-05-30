import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Login = () => {
   const [credentials, setCredentials] = useState({
      email: '',
      password: '',
   });

   const { dispatch } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async (e) => {
      e.preventDefault();

      if (!credentials.email || !credentials.password) {
         alert('Please enter both email and password');
         return;
      }

      dispatch({ type: 'LOGIN_START' });

      try {
         const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
               'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(credentials),
         });

         const result = await res.json();

         if (!res.ok) {
            throw new Error(result.message || 'Login failed');
         }

         dispatch({ 
            type: 'LOGIN_SUCCESS', 
            payload: result.data 
         });
         navigate('/');
      } catch (err) {
         dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
         alert('Error: ' + err.message);
      }
   };

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={loginImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input
                                 type="email"
                                 placeholder="Email"
                                 id="email"
                                 value={credentials.email}
                                 onChange={handleChange}
                                 required
                              />
                           </FormGroup>
                           <FormGroup>
                              <input
                                 type="password"
                                 placeholder="Password"
                                 id="password"
                                 value={credentials.password}
                                 onChange={handleChange}
                                 required
                              />
                           </FormGroup>
                           <Button className="btn secondary__btn auth__btn" type="submit">
                              Login
                           </Button>
                        </Form>
                        <p>
                           Don't have an account? <Link to="/register">Create</Link>
                        </p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Login;