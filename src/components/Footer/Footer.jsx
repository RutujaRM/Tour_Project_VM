
import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

//Create header navigation links array
const quick_links = [
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

];



//Create header navigation links array
const quick_links2 = [
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

];


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' >
            <div className="logo">
              <img src={logo} alt="Logo image" srcset="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis sint veniam magnam alias eligendi necessitatibus. Neque voluptas, mollitia iusto eum praesentium id necessitatibus reiciendis iure saepe ab, vel eius?</p>

              <div className="social__links d-flex align-items-center gap-4">

                <span>
                  <Link to='#'><i class="ri-youtube-line" style={{ color: 'red' }}></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-facebook-circle-fill" style={{ color: 'blue' }}></i></Link>
                </span>

                <span>
                  {/* <Link to='#'><i class="ri-instagram-fill &#xEE66;"></i></Link> */}
                  <i className="ri-instagram-fill" style={{ color: '#EE66EE' }}></i>
                </span>
              </div>



            </div>

          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' >
                  <Link to={item.path}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' >
                  <Link to={item.path}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-2-fill"></i>
                  </span>
                  Address:
                </h6>

                <p className='mb-0'> Pune,India</p>
              </ListGroupItem>


              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className='mb-0'>rutujamashere@gmail.com</p>
              </ListGroupItem>


              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className='mb-0'>+912378654299</p>
              </ListGroupItem>

            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">
              Copyright {year}, design and develop by Rutuja R. Mashere All rights reserved.
            </p>


          </Col>




        </Row>
      </Container>

    </footer>
  )
}

export default Footer
