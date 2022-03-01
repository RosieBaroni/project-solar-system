import React from 'react';

import './styles.css';
import planets from '../../data/planets';
import Title from '../Title';
import PlanetCard from '../PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        <div className="container-planets">
          {planets.map((item) => (
            <PlanetCard
              key={ item.name }
              planetName={ item.name }
              planetImage={ item.image }
              imageWidth={ item.imageWidth }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

/** Source: https://stackoverflow.com/questions/47717636/react-how-to-pass-width-as-a-prop-from-the-component
 * OBS: Passando a largura como prop do componente, mesma referência usada no PlanetCart e data/planets.
*/
