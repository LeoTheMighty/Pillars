import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { Rectangle } from 'react-shapes';
import type Pillar from '../types/Pillar';
import { getCurrentPillarValue } from '../logic/PillarHelper';

type Props = {
  pillar: Pillar,
  intervalView: string,
};

/**
 * The view that displays the specific pillar information for a single pillar
 *
 * @param {Pillar} pillar The pillar to show information for
 * @param {string} intervalView The type of interval
 * @return {*}
 * @constructor
 */
const PillarView = ({ pillar, intervalView }: Props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentPillarValue(pillar, intervalView, 1));
  }, [pillar, intervalView]);

  return (
    <div>
      <Grid>
        <Grid.Row key={0}>{`Name: ${pillar.name}`}</Grid.Row>
        <Grid.Row key={1}>{`Value: ${value}`}</Grid.Row>
        <Grid.Row key={2} style={{ color: pillar.color }}>
          {`Color: ${pillar.color}`}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default PillarView;
