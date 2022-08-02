import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import card1 from '../../Assets/card1.svg';
import card2 from '../../Assets/card2.png';
import card3 from '../../Assets/card3.png';
import { Link } from "react-router-dom";
function Mint() {
    return (
      <div className="App">
          <div id='login-reg'>
              <div className='csoon'>
                <h2>Coming Soon</h2>
              </div>
              {/* <Container>
                  <div className='top-area'>
                      <Row d-flex align-items-center>
                          <Col sm={5} md={4} lg={5} xl={5}>
                          <Link to="/" className='back-home'><FontAwesomeIcon icon={solid('angle-left')} />
                            Back To Home</Link>
                         </Col>
                          <Col sm={5} md={8} lg={6} xl={5}>
                              <div className='mint-top-btns'>
                              <a id="joerichards_connect_wallet" href="#" className='joerichards_show_on_desktop cmn-btn'>Installing...</a>
                           <a id="joerichards_mobile_connect_wallet" href="#" className='joerichards_hide_on_desktop cmn-btn'>Connect Wallet</a>
                              </div>
                          
                          </Col>
                      </Row>
                  </div>
                  <div className='mint-box-main'>
                      <Row>
                          <Col sm={8} md={8} lg={6} xl={6}>
                              <div className='mint-box'>
                                  <div className='min-box-head'>
                                      <h4>
                                      Mint your RMRs
                                      </h4>
                                  </div>
                                  <div className='amt-div'>
                                      <p>Select amountmax 33</p>
                                      <p className='amt-num'>max 33</p>
                                  </div>
                                  <input placeholder='2' type="number" min="1"></input>
                                  <div className='price-div'>
                                      <ul>
                                          <li>Price ------ 0.051 ETH</li>
                                          <li><span>Total ------ 0.102 ETH</span></li>
                                      </ul>
                                      
                                  </div>
                                  <div className='mint-btn'>
                                  <button className='cmn-btn'>Mint 2 get 1 FREE</button>
                                      <p>or</p>
                                  </div>
                                  <div className='card-div'>
                                      <h6>Mint with Credit Card</h6>
                                      <ul>
                                          <li><a href=''> <img src={card1} alt="" /></a></li>
                                          <li><a href=''> <img src={card2} alt="" /></a></li>
                                          <li><a href=''> <img src={card3} alt="" /></a></li>
                                      </ul>
                                      <p>PS: Gas fee is cheaper if you mint many at once!</p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container> */}
          </div>
      </div>
    );
  }
  
  export default Mint;
  