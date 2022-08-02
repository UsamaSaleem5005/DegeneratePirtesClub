// SITE LOGO
import sitelogo from '../Assets/logo.png';
import me from '../Assets/me.png';
import flicon from '../Assets/fl-icon.png';
import wallet from '../Assets/wallet.png';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import video from '../Assets/pirate-video.mp4';
function Header() {

  let [EnterBtn, setEnterBtn] = useState(0);
  
  function enterWeb() {
    var vid = document.getElementById("myVideo");
    setHideVideo(1)
    vid.pause();
      
  }

function playVid() {
  var vid = document.getElementById("myVideo");
    vid.play();
    var element = document.getElementById("play-btn");
   element.classList.add("mystyle");
   setEnterBtn(1);
}

  let [hideVideo, setHideVideo] = useState(0);
    return (
      <Container>
         <div className={"video-player"+(hideVideo==1?' video-hider':'')}>
      <video onEnded={() => setHideVideo(1)} width="100%" controls id='myVideo'>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
      </video>
      <Button className={'btnskip'+(EnterBtn==1?' skipvid':'')} onClick={enterWeb}>Skip</Button>
      <div className='video-play' id='play-btn'>
      
      <img src={sitelogo} alt="" />
        <Button onClick={playVid}>Enter</Button>
        </div>
    </div>
      <Navbar>
        <Navbar.Brand as={Link} to="/">
          <img src={sitelogo} alt="/" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={(e) => {e.preventDefault(); window.location.replace('/#roadmap');}}>Road map</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link href="https://discord.gg/7hSZDpRfzy">Discord</Nav.Link>
            <Nav.Link as={Link} to="/"><img src={flicon} alt="" /></Nav.Link>
            <Nav.Link as={Link} to="/"><img src={me} alt="" /></Nav.Link>
          </Nav>
          <div className='nav-wallet'>
                <a href='#'>
                  <img src={wallet} alt="" />
                </a>
          </div>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    );
  }
  
  export default Header;
  