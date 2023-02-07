import React from 'react';
import { HybridName } from './hybrids';
import { PlanetDetails } from './planets';
import { SpeciesInfo } from './species';
import image from "./img/bg.png";


function App() {
  const planet = [
    {name:"Pandora", species:"Navi", heightofspecies: 9},
    {name:"Earth",   species:"Humans", heightofspecies: 6}
  ]
  return (
    
    <div style={{ backgroundImage:`url(${image})` }}>

      
        <h1>Avatar Fan Page</h1>
        <h3>A website by Maha</h3> 

        <Introduction></Introduction>
          
        <SpeciesInfo type='Pandora' species='Navi'  modeOfTransportation='Animals'        color='Blue'></SpeciesInfo>
        <SpeciesInfo type='Earth'   species='Human' modeOfTransportation='Armed Vehicles' color='Varying'></SpeciesInfo>
        <PlanetDetails name='Earth'  species='Humans' heightofspecies={7}></PlanetDetails> 
        <PlanetDetails name='Pandora' species='Navi' heightofspecies={9}></PlanetDetails>
        <HybridName></HybridName>
        
        {/* {planet.map(p => <PlanetDetails {...p}></PlanetDetails>)} */}
      </div>  
    );
  }
  

  function Introduction(){
  
    const avatar: number = 2009;
    const avatar2: number = 2022;
    const avatar3: number = 2024; 
  
    return(
      <div>
      <p>Avatar is a epic science fiction film directed and written James Cameron,starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez and Sigourney Weaver.</p>
          <ul>
            <li>Avatar {avatar}</li>
            <li>The Way of Water {avatar2}</li>
            <li>Avatar 3 {avatar3} </li>
          </ul>
      </div>
      )
  }
  

export default App ;
