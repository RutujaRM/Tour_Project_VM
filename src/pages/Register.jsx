import React, {useState} from 'react';
import '../styles/login.css';
import {Container , Row , Col , Form , FormGroup , Button} from 'reactstrap';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { Link } from 'react-router-dom';


const Register = () => {

  const [credetials , setCredetials] = useState({
    userName:undefined,
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
              <img src={registerImg} alt="Image not found" srcset="" />
            </div>

            <div className="login__form">
               <div className="user">
                <img src={userIcon} alt="Image Not found" srcset="" />
               </div>
               <h2>Register</h2>

               <Form onSubmit={handleClick} >
               <FormGroup>
                   <input type="text" name="" id="username" placeholder='Username' onChange={handleChange} required />
                </FormGroup>
                
                <FormGroup>
                   <input type="email" name="" id="email" placeholder='Email' onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                   <input type="password" name="" id="password" placeholder='Password' onChange={handleChange} required />
                </FormGroup>

                 <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>

               </Form>
               <p>Already have an account? 🙂 <Link to='/login' >Login</Link> </p>
            </div>
           </div>
        </Col>
      </Row>

   </Container>

    </section>
   
    
    </>
    
  )
}

export default Register