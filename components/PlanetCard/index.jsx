import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, imageWidth } = this.props;

    return (
      <div className="planet-card" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img
          style={ { width: imageWidth } }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
};

export default PlanetCard;
