import piratenew from './Assets/pirate-new.png';
import dicord from './Assets/dicord.png';
import pirate2 from './Assets/pirate-2.png';
import magic from './Assets/magic.png';
import solanart from './Assets/solanart.png';
import sitelogo from './Assets/logo.png';
import video from './Assets/pirate-video.mp4';
import { Container, Row, Col, Tabs, Tab, TabContent, TabContainer, TabPane, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
import piratessmoke from './Assets/Pirates-Smoke.gif';
import blackpirate from './Assets/background-smoke.gif';
import React, { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState(false);
  const setExpand = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  }
  return (
    <section className='main'>
     
     <div class="banner-sec">
       <Container>
         <Row>
           <Col md={6}>
             <div className='banner-img'>
             <img src={piratessmoke} alt="" />
             </div>
           </Col>
           <Col md={6}>
           <div className="banner-txt">
              <h6>Degenerate Pirates Club</h6>
              <h2>Hold to <span>Earn</span></h2>
              <ul>
                <li>
                  <a href="#viewstory" class="yel-btn">view story</a>
                </li>
                <li>
                  <Link to="/Mint" className='wht-btn'>mint NFT</Link>
                  
                </li>
              </ul>
            </div>
           </Col>
         </Row>
         <div class="scroll-down">
          <a href="#viewstory">
                <FontAwesomeIcon icon={solid('arrow-down')} />
          </a>
        </div>
       </Container>
     </div>
     <div className='pirate-club-sec' id='viewstory'>
       <Container>
       <div className='pirate-club-sec'>
      <p>What is</p>
      <h5>Degenerate <span>Pirates Club</span></h5>
      <p>In a run-down rum distillery, beside a row of dusty barrels, sits an old man with a parrot on his
        shoulder. Every evening he takes men and women through a secret door—hidden behind the dusty
        barrels—down a flight of stairs and into the Degenerate Pirates Club.</p>
        <p>It is a cathedral-like space hung with rum-bottle lanterns. All manner of objects are being used as
          tables—barrels, carriage wheels, even upturned boats. In the back sits a bar made of a broken mast,
          studded with swords, daggers, and shattered pistols. There is a bartender but he doesn’t make the drinks.
          Instead, he whistles as a pair of monkeys appear from behind the liquor rack. They screech and prattle as
          they pour drinks for rowdy pirates. Should anyone neglect to pay the monkeys, the bartender would set
          his glass down and get involved.</p>
          <Link to="/Story" className='yel-btn' onClick={setExpand}>read more</Link>
       {/* <a href="/degenerate-pirate-nft/story" className='yel-btn'>read more</a> */}
    </div>
       </Container>
     </div>
     <div className='sec-roadmap' id='roadmap'>
       <Container>
         <div className='roadmap-map-head'>
            <h3>Roadmap</h3>
         </div>
       </Container>
       <Container fluid>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" transition>
      <Nav className="flex-column">
        <Row className='road-row'>
          <Col md={2}>
          <Nav.Item className='road-tab'>
           <p>phase</p>
          <Nav.Link eventKey="first">01</Nav.Link>
          </Nav.Item>
          </Col>
          <Col md={2}>
          <Nav.Item className='road-tab'>
          <p>phase</p>
          <Nav.Link eventKey="second">02</Nav.Link>
        </Nav.Item>
          </Col>
          <Col md={2}>
          <Nav.Item className='road-tab'>
          <p>phase</p>
          <Nav.Link eventKey="third">03</Nav.Link>
        </Nav.Item>
          </Col>
          {/* <Col md={2}>
          <Nav.Item className='road-tab'>
          <p>Giveaways</p>
          <Nav.Link eventKey="fourth">04</Nav.Link>
        </Nav.Item>
          </Col> */}
          {/* <Col md={2}>
          <Nav.Item className='road-tab'>
          <p>Degen Liar's Dice</p>
          <Nav.Link eventKey="fifth">05</Nav.Link>
        </Nav.Item>
          </Col> */}
        </Row>
        </Nav>
        
        
      <Container>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div className='road-txt'>
          <div className='tab-num'>
          <span>01</span>
        </div>
        <div className='tab-txt'>
          <ol>
            <li>Matey! We have created 5555 Degenerate Pirate Collection for all the sea raiders out there!</li>
            <li>A community of pirates and their crew should get us at our DISCORD AND OFFICIAL WEBSITE.</li>
            <li>With all the hearties that came aboard, we are going to REWARD them all!</li>
            <li>LORE! through a secret door and into the Degenerate Pirates Club.</li>
            <li>STORY of our sails! How our ship and crew set our sails to the deadliest sea.</li>
            <li>To get you all familiar with our project's journey, an introduction VIDEO will be announced soon.</li>
            <li>RARITY CHART</li>
            <li>Sail Ho! to our grand NFT LAUNCH! Launch will be exclusive to our websites with WL holders to catch our NFTs first!</li>
            <li>NFTs will be listed on SOLANART AND MAGICEDEN Marketplaces only.</li>
          </ol>

        </div>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className='road-txt'>
          <div className='tab-num'>
          <span>02</span>
        </div>
        <div className='tab-txt'>
         <ul>
           <li>Trailer for Degen Liar’s Dice</li>
           <li>TBA</li>
           <li>TBA</li>
           <li>TBA</li>
         </ul>
        </div>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div className='road-txt'>
          <div className='tab-num'>
          <span>03</span>
        </div>
        <div className='tab-txt'>
        <ul>
           <li>TBA</li>
         </ul>
        </div>
        </div>
        </Tab.Pane>
        {/* <Tab.Pane eventKey="fourth">
        <div className='road-txt'>
          <div className='tab-num'>
          <span>04</span>
        </div>
        <div className='tab-txt'>
          <p>
          An exclusive DPC lottery will be held every month where lucky holders can win up to 50 SOL!
          </p>
        </div>
        </div>
        </Tab.Pane> */}
        {/* <Tab.Pane eventKey="fifth">
        <div className='road-txt'>
          <div className='tab-num'>
          <span>05</span>
        </div>
        <div className='tab-txt'>
          <p>
          Each round, each player rolls a "hand" of dice under their cup and looks at their hand while keeping it concealed from the other players. The first player begins bidding, announcing any face value and the number of dice that the player believes are showing that value, under all of the cups in the game. Ones are often wild, always counting as the face of the current bid. DPC holders will receive a percentage of all game sales.
          </p>
        </div>
        </div>
        </Tab.Pane> */}
      </Tab.Content>
      </Container>
    </Tab.Container>
       </Container>
     </div>
     <div className='connect-sec'>
       <Container>
         <Row>
           <Col md={6}>
           <div class="connect-txt">
          <h6>Learn From Us</h6>
          <h5>Connect Our Discord Community</h5>
          <p>We are on your way to create the most unique and creative NFT, collaborate with us for an exciting journey amongst the digital art.</p>
          <p>Mint NFT into your wallet by engaging with us at Degenerate Pirates Club.</p>
           <a href="https://discord.gg/7hSZDpRfzy">join discord <img src={dicord} alt="" /></a>
        </div>
           </Col>
           <Col md={6}>
           <div class="connect-img">
              <img src={blackpirate} alt="" />
            </div>
           </Col>
         </Row>
       </Container>
     </div>
     <div className='sec-art-gal'>
       <Container>
       <div className='art-gallery-txt'>
      <h5>View Art Gallery</h5>
      <ul>
        <li><img src={solanart} alt="" /></li>
        <li><img src={magic} alt="" /></li>
      </ul>
    </div>
       </Container>
     </div>
    </section >
  );
}

export default App;
