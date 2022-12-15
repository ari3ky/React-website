import ImageSlider from './Components/ImageSlider'
import React from 'react'
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const slides = [
    {url: "https://wallpaperaccess.com/full/2379005.jpg", title: "League"},
    {url: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png", title: "Pokemon"},
    {url: "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-08/kk.jpg?itok=xhhOmPw7", title: "Fifa"},
    
  ] //array of slides
  const title = 'Welcome to the Gaming Blog';
  const leaguelink = "https://signup.leagueoflegends.com/en-gb/signup/redownload"
  const pokemonlink = "https://scarletviolet.pokemon.com/en-gb/buy/"
  const fifalink = "https://www.playstation.com/en-gb/games/ea-sports-fifa-23/"
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto" //best to not have a fixed dimension, better flexibility - makes container central
  }

  return (
  <div>
    <Router>
      <div className='App'> 
    <Navbar/>  
    <div className='Content'>
    <h1>{title}</h1>
    <div style={containerStyles}>
      <ImageSlider slides={slides}/>
    </div>
    <Switch>
    <Route exact path="/">
     <Home />
     </Route>
     <Route path="/create">
     <Create />
     </Route>
    </Switch>
    </div>
    <div><b>Only click the below links if you are out of your mind</b></div>

    <div><b><a href={leaguelink}>League: Click here to download and regret!</a></b></div>
    <> 
    </> 
    <div><b><a href={pokemonlink}>Pokemon: Click here to Buy then cry</a></b></div>
    <> 
    </>
    <div><b><a href={fifalink}>Fifa: Just dont.</a></b></div>
    <>
    </>
    </div>
    </Router>
    
  </div>
);}




export default App;