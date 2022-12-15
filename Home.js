import { useState } from 'react';
import './index.css';

const Home = () => {
    const [choice, setChoice] = useState('Which game should you buy?')

    const handleClick = () => {
        setChoice('NONE, ALL ARE BAD');
    }
    
    
    
    return ( 
        <div className="Home">
            <p>{ choice }</p>
            <button onClick={handleClick}>DECIDE NOW!</button>

            <>
      <div>
        <h1>Which game is worse?</h1>
        <h3>
          Reasons why League is bad
        </h3>
        <ol>
          <li>Toxic Players</li>
          <li>Matchmaking</li>
          <li>You Can Lose Friends</li>
          <li>Quitters</li>
          <li>
            Getting New Skins Only for the Champion to Get Nerfed
          </li>
        </ol>
        <h3>
          Reasons why Pokemon is bad
        </h3>
        <ol>
          <li>The Bugs</li>
          <li>PS1 graphics</li>
          <li>-50 FPS</li>
          <li>Nintendo 64 Textures</li>
          <li>GameFreak</li>
        </ol>

        
      <div>
        <h3> Reasons why Fifa is bad </h3>
        <ol>
          <li>L2 + shoot is broken</li>
          <li>Pain</li>
          <li>MORE PAIN</li>
          <li>EVEN MORE PAIN</li>
          <li>its endless</li>
        </ol>
      </div>

<div className="banner">
  <div className=" big-text">99% OFF</div>
  <div>All these 💩 games</div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here</a>
</div>
     
      </div>
    </>
      </div>
        
        
     );
     


  
   
}


 
export default Home;