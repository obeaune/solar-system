import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets'; // array com cada planeta sendo um obj com Name e Image;

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((planeta) => (
          <PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />
        )) }
      </div>);
  }
}

export default SolarSystem;
