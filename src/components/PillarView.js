import React, { useState, useEffect } from 'react';
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
 * @return {*} The jsx for displaying the component
 * @constructor
 */
const PillarView = ({ pillar, intervalView }: Props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentPillarValue(pillar, intervalView, 1));
  }, [pillar, intervalView]);

  return (
    <div
      style={{
        height: `${value * 75}vh`,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pillar.color,
      }}
    >
      {value}
      {'\n'}
      {pillar.name}
    </div>
  );
};

export default PillarView;
