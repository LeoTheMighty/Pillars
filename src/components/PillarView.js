import React, {useState, useEffect} from 'react';
import {Grid} from "semantic-ui-react";
import type Pillar from "../types/Pillar";
import {getCurrentPillarValue} from '../logic/PillarHelper';
import {Rectangle} from "react-shapes";

type Props = {
  pillar: Pillar,
  intervalView: string,
};

const PillarView = (props: Props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentPillarValue(props.pillar, props.intervalView, 1));
  }, [props.pillar, props.intervalView]);

  return (
    <div>
      <Grid>
        <Grid.Row key={0}>
          {"Name: " + props.pillar.name}
        </Grid.Row>
        <Grid.Row key={1}>
          {"Value: " + value}
        </Grid.Row>
        <Grid.Row key={2} style={{color: props.pillar.color}}>
          {"Color: " + props.pillar.color}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default PillarView;