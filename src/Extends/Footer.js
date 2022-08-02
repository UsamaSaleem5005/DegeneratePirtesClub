import { Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

// SITE LOGO
import sitelogo from '../Assets/ftr-logo.png';

function Footer() {
  return (
    <div className="main-footer">
     <div className="ftr-top">
       <Container>
         <Row>
           <Col md={4}>
           <a href="/degenerate-pirate-nft"><img src={sitelogo} alt="" /></a>
           </Col>
           <Col md={4}>
           <div class="ftr-links">
                <h4>Join Our Community</h4>
            </div>
            <div class="ftr-social-links">
                <ul>
                  <li><a href="https://discord.gg/7hSZDpRfzy"><FontAwesomeIcon icon={brands('discord')} /></a></li>
                  <li><a href="https://twitter.com/dgpirateclub"><FontAwesomeIcon icon={brands('twitter')} /></a></li>
                  <li><a href="https://www.instagram.com/dgpirateclub/"><FontAwesomeIcon icon={brands('instagram')} /></a></li>
                </ul>
              </div>
           </Col>
         </Row>
       </Container>
     </div>
      <div className="ftr-btm">
        <h4>© 2022 Degenerate Pirates Club. All rights reserved</h4>
      </div>
    </div>
  );
}

export default Footer;
