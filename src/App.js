import React from 'react';
import Navbar from './components/Body';
import Footer from './components/Footer';
import Game from './components/Game';
import Cards from './components/pictureCard';
import pictures from "./gamePictures.json";


function App() {
  return (
    <div>
      <Navbar/>
      <Game/>
      <Cards
            alt={pictures[0].name}
            src={pictures[0].image}
      />
      <Cards
      alt={pictures[1].name}
      src={pictures[1].image}
      />
            <Cards
      alt={pictures[2].name}
      src={pictures[2].image}
      />
            <Cards
      alt={pictures[3].name}
      src={pictures[3].image}
      />
            <Cards
      alt={pictures[4].name}
      src={pictures[4].image}
      />
            <Cards
      alt={pictures[5].name}
      src={pictures[5].image}
      />
            <Cards
      alt={pictures[6].name}
      src={pictures[6].image}
      />
            <Cards
      alt={pictures[7].name}
      src={pictures[7].image}
      />
            <Cards
      alt={pictures[8].name}
      src={pictures[9].image}
      />
            <Cards
      alt={pictures[9].name}
      src={pictures[9].image}
      />
            <Cards
      alt={pictures[10].name}
      src={pictures[10].image}
      />
            <Cards
      alt={pictures[11].name}
      src={pictures[11].image}
      />
    
      <Footer/>
    </div>
  );
}

export default App;

