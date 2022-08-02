import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown } from 'react-bootstrap';
import magic from '../../Assets/magic.png';
import solanart from '../../Assets/solanart.png';
function Story() {
    return (
      <div className="App">
       <div className="story-view">
           <Container>
           <h4>Degenerate <span>Pirates Club</span></h4>
      <p>In a run-down rum distillery, beside a row of dusty barrels, sits an old man with a parrot on his
        shoulder. Every evening he takes men and women through a secret door—hidden behind the dusty
        barrels—down a flight of stairs and into the Degenerate Pirates Club.</p>
        <p>It is a cathedral-like space hung with rum-bottle lanterns. All manner of objects are being used as
          tables—barrels, carriage wheels, even upturned boats. In the back sits a bar made of a broken mast,
          studded with swords, daggers, and shattered pistols. There is a bartender but he doesn’t make the drinks.
          Instead, he whistles as a pair of monkeys appear from behind the liquor rack. They screech and prattle as
          they pour drinks for rowdy pirates. Should anyone neglect to pay the monkeys, the bartender would set
          his glass down and get involved.</p>
          <p>Doors line the walls, each leading to a private room where pirates work out crews, discuss
            potential adventures, and trade information gained from expeditions. And stretched along the furthest wall
            is a massive chain beneath which sits a group of painters, dressed in everything from old army uniforms
            to Scottish kilts, working on portraits, landscapes, and scenes of battle. Upon the chain are hung
            completed works for purchase and patrons examine them, haggle over prices, and walk away satisfied or
            towards the bar for the comfort of rum.
          </p>
          <p>The centerpiece of the club, however, is a massive board hung from the ceiling that displays
            names and amounts of money. This is the game the pirates play. They place their bets and head out to sea
            to battle, ship to ship; to the winner goes the spoils and the honor of buying the next round.</p>
            <p>
              What started with a few pirates determined to create a refuge for adventurers and like-minded
individuals has now grown into a paradise of rogues. Everyday new pirates register for membership with
the bartender; a system that was devised when a group of British soldiers snuck into the club in disguise.
The Degenerate Pirates Club is the name on all aspiring pirates’ minds and a curse whispered by British
soldiers. It’s power has grown as new projects have emerged from its low-lit halls, from art to commerce.
It is not yet fully formed and no one knows how far it can go, but what everyone knows for sure is that
this is just the beginning. There are more exciting and unbelievable adventures on the horizon!
            </p>
            <p className='endpara'><i>This,</i> is the Degenerate Pirates Club.</p>
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
      </div>
    );
  }
  
  export default Story;
  