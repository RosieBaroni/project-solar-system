import React from 'react';

import './styles.css';
import missions from '../../data/missions';
import Title from '../Title';
import MissionCard from '../MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />

        <div className="container-missions">
          {missions.map((item) => (
            <MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
