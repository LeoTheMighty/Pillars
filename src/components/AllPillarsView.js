import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import _ from 'lodash';
import type Pillar from '../types/Pillar';
import PillarView from './PillarView';

type Props = {
  pillars: [Pillar],
  intervalView: string,
};

/**
 * The view for displaying all of the pillars.
 *
 * @param {[Pillar]} pillars The pillar objects to display
 * @param {string} intervalView The type of interval type for the values
 * @return {*} The jsx for the component
 * @constructor
 */
const AllPillarsView = ({ pillars, intervalView }: Props) => {
  return (
    <Grid
      columns={pillars.length}
      style={{
        height: '80vh',
      }}
    >
      {pillars.length > 0 ? (
        _.times(pillars.length, (i) => (
          <Grid.Column key={i} verticalAlign="bottom">
            <PillarView pillar={pillars[i]} intervalView={intervalView} />
          </Grid.Column>
        ))
      ) : (
        <Message> No Pillars Yet! </Message>
      )}
    </Grid>
  );
};

export default AllPillarsView;
