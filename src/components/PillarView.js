import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Measure from "react-measure";
import { Rectangle } from 'react-shapes';
import type Pillar from '../types/Pillar';
import { getCurrentPillarValue } from '../logic/PillarHelper';
import useWindowDimensions from "./hooks/useWindowDimensions";

type Props = {
  pillar: Pillar,
  width: number,
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
const PillarView = ({ pillar, intervalView, width }: Props) => {
  const { height } = useWindowDimensions();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentPillarValue(pillar, intervalView, 1));
  }, [pillar, intervalView]);

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setWidth(contentRect.bounds.width);
      }}
    >
      {({ measureRef }) => (
        <div ref={measureRef}>
          <Rectangle
            width={width}
            height={(height || 0) * value}
            fill={{ color: pillar.color }}
          />
        </div>
      )}
    </Measure>
  );
};

export default PillarView;
