import React from 'react';
import {Container, Grid, Message} from "semantic-ui-react";
import _ from "lodash";
import type Pillar from "../types/Pillar";
import PillarView from "./PillarView";

type Props = {
  pillars: [Pillar],
  intervalView: string,
};

/**
 * Shows all the pillars for the User.
 */
const AllPillarsView = (props: Props) => {
  return (
    <Grid stretched columns={props.pillars.length} style={{marginRight: "5px", marginLeft: "5px"}}>
      {props.pillars.length > 0 ?
        _.times(props.pillars.length, i => (
          <Grid.Column key={i}>
            <PillarView pillar={props.pillars[i]} intervalView={props.intervalView}/>
          </Grid.Column>
        )) :
      <Message> No Pillars Yet! </Message>}
    </Grid>
  );
};

export default AllPillarsView;