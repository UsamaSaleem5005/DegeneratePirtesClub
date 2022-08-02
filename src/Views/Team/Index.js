import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import card1 from '../../Assets/card1.svg';
import card2 from '../../Assets/card2.png';
import card3 from '../../Assets/card3.png';
import { Link } from "react-router-dom";
import avatar from '../../Assets/avatar.jpg';
import avatar2 from '../../Assets/avatar2.png';
import avatar3 from '../../Assets/avatar3.png';

function Team() {
    return (
      <div className="team">
          <div className='team-page'>
          <div className='inner-banner'>
                    <h2>Our Team</h2>
                </div>
            <Container>
                
                <Row>
                    <Col sm={4}>
                        <div className='team-box'>
                            <div class='img-holder'>
                                <span>
                                    <img src={avatar} alt=""/>
                                </span>
                             </div>    
                             <h5>Big Jones</h5>
                             <i>CEO</i>
                             <p>Big Jones, CEO of Degenerates, is an aspiring pirate who has started his enthralling journey and became a centre of intrigue as myths and legends have been told of his adventures. He embarked on many grand adventures, some involving the supernatural, magic, and journeys to discover hidden treasures.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='team-box'>
                            <div class='img-holder'>
                                <span>
                                    <img src={avatar2} alt=""/>
                                </span>
                             </div>    
                             <h5>Jasper</h5>
                             <i>Developer</i>
                             <p>Jasper has written smart contracts from scratch to solve problems for teams and deployed small projects for a few DAO'S. He can launch your project from idea to Blockchain and show you how to manage deployment, marketing, and scale-up. His core experience ranges from front-end blockchain applications to back-end and implementation, innovative contract development.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='team-box'>
                            <div class='img-holder'>
                                <span>
                                    <img src={avatar3} alt=""/>
                                </span>
                             </div>    
                             <h5>Rosy</h5>
                             <i>Designer</i>
                             <p>Rosy enjoys creating unique and meaningful, visually appealing, understandable, and usable designs. She has years of experience in web and UI/UX design. Her design process incorporates preliminary research, flow planning, feedback, and 2D/3D design implementation. Rosy's mentoring and leadership experience allows her to build quality, user-friendly products. </p>
                        </div>
                    </Col>
                </Row>
            </Container> 
          </div>
      </div>
    );
  }
  
  export default Team;
  