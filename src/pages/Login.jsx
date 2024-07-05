import React, {useState} from 'react';
import '../styles/login.css';
import {Container , Row , Col , Form , FormGroup , Button} from 'reactstrap';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { Link } from 'react-router-dom';


const Login = () => {

  const [credetials , setCredetials] = useState({
   email:undefined,
   password:undefined
 });

const handleChange = e => {
      setCredetials(prev => ({...prev , [e.target.id]:e.target.value}))
};

const handleClick = e => {
  e.preventDefault();
};


  return (
    <>
    <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
           <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="Image not found" srcset="" />
            </div>

            <div className="login__form">
               <div className="user">
                <img src={userIcon} alt="Image Not found" srcset="" />
               </div>
               <h2>Login</h2>

               <Form onSubmit={handleClick} >
                <FormGroup>
                   <input type="email" name="" id="email" placeholder='Email' onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                   <input type="password" name="" id="password" placeholder='Password' onChange={handleChange} required />
                </FormGroup>

                 <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>

               </Form>
               <p>Don't have an account? 😉 <Link to='/register' >Create Account</Link> </p>
            </div>
           </div>
        </Col>
      </Row>

   </Container>

    </section>
   
    
    </>
    
  )
}

export default Login