import React from 'react';
import {Grid, Button, Message} from "semantic-ui-react";
import _ from "lodash";
import {Rectangle} from "react-shapes";
import type Pillar from "../types/Pillar";

type Props = {
  pillars: [Pillar]
};

const AllPillarsView = (props: Props) => {
  return (
    props.pillars.length > 0 ?
      <Grid columns={props.pillars.length} stretched style={{color: 'purple'}}>
        {_.times(props.pillars.length, i => [
          <Grid.Column key={2 * i}>
            {"Value: " + props.pillars[i].value}
          </Grid.Column>,
          <Grid.Column key={2 * i + 1} style={{color: props.pillars[i].color}}>
            {"Color: " + props.pillars[i].color}
          </Grid.Column>
        ])}
      </Grid> :
      <Message> No Pillars Yet! </Message>
  );
};

export default AllPillarsView;