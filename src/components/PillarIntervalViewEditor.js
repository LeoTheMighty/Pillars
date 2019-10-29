import React from 'react';
import { Grid, Dropdown, Input, Label } from 'semantic-ui-react';
import type { FlowReducer } from '../redux/reducers/flowReducer';

type Props = {
  flow: FlowReducer,
  setIntervalViewRedux: (string) => void,
  setIntervalSpanRedux: (number) => void,
};

/**
 * Shows the view for the editor for the Pillar Interval View so that the user
 * can view pillars at different time spans.
 *
 * @return {*} The jsx to show the component.
 * @constructor
 */
const PillarIntervalViewEditor = ({
  flow,
  setIntervalViewRedux,
  setIntervalSpanRedux,
}: Props) => {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Column>
          <Dropdown
            label="Type of interval"
            value={flow.currentIntervalView}
            selection
            options={[
              { key: 'day', value: 'day', text: 'Daily View' },
              { key: 'week', value: 'week', text: 'Weekly View' },
              { key: 'month', value: 'month', text: 'Monthly View' },
              {
                key: 'start',
                value: 'start',
                text: 'Since Pillar Start',
              },
            ]}
            onChange={(e, { value }) => {
              setIntervalViewRedux(value);
              setIntervalSpanRedux(1);
            }}
          />
        </Grid.Column>
        <Grid.Column>
          {flow.currentIntervalView === 'start' || [
            <Label color="black">{`How many ${flow.currentIntervalView}s`}</Label>,
            <Input
              value={flow.currentIntervalSpan}
              onChange={(e) =>
                e.target.value > 0 && setIntervalSpanRedux(e.target.value)
              }
              type="number"
            />,
          ]}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default PillarIntervalViewEditor;
