import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Measure from "react-measure";
import type Pillar from '../types/Pillar';
import { getCurrentPillarValue } from '../logic/PillarHelper';
import useWindowDimensions from './hooks/useWindowDimensions';

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
  const { height } = useWindowDimensions();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentPillarValue(pillar, intervalView, 1));
  }, [pillar, intervalView]);

  return (
    <div>
      <div
        style={{
          height: (height || 0) * value,
          backgroundColor: pillar.color,
        }}
      >
        {value}
        {'\n'}
        {pillar.name}
      </div>
    </div>
  );
};

export default PillarView;
