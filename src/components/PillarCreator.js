import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Message,
  Container,
  Button,
  Grid,
  Header,
  Form,
} from 'semantic-ui-react';
import { SketchPicker } from 'react-color';
import { addPillar } from '../redux/actions/userActions';
import { newPillar } from '../logic/PillarHelper';

type Props = {
  // Redux
  addPillarRedux: Function,
};

/**
 * Creates a pillar and adds it to the redux and component state.
 *
 * @param {string} name The name of pillar to the make.
 * @param {string} color The color of the pillar to create.
 * @param {Function} addPillarRedux The redux function to add a pillar to the user.
 * @param {Function} setSuccess Sets the success state
 * @param {Function} setIsLoading Sets the is loading state
 * @param {Function} setError Sets the error state
 * @returns {void}
 */
const createPillar = (
  name,
  color,
  addPillarRedux,
  setSuccess,
  setIsLoading,
  setError,
) => {
  setIsLoading(true);
  setTimeout(() => {
    if (name && color) {
      const pillar = newPillar(name, color);
      addPillarRedux(pillar);
      setSuccess(true);
    } else {
      setSuccess(false);
      setError(new Error(''));
    }
    setIsLoading(false);
  }, 2000);
};

/**
 * Shows a success label based on the given info.
 *
 * @param {boolean} show Whether the User has successfully created a Challenge or not.
 * @return {*} The React JSX to display the success label or null if not applicable.
 */
export const createSuccessLabel = (show) => {
  if (show) {
    return (
      <Message positive>
        <Message.Header>Success!</Message.Header>
        <p>You just created a new Challenge!</p>
      </Message>
    );
  }
  return null;
};

/**
 * Displays an error message if applicable.
 *
 * @param {Error} error The error message string.
 * @return {*} The React JSX to show the error message.
 */
export const displayError = (error) => {
  if (error) {
    return (
      <Message negative>
        <Message.Header>Sorry!</Message.Header>
        <p>{error.message}</p>
      </Message>
    );
  }
  return null;
};

/**
 * The view in charge of creating a new pillar for User.
 *
 * @param {PillarsUser} user The redux user currently using the app
 * @param {Function} addPillarRedux The redux function responsible for adding a new pillar
 * @return {*} The jsx to display the component
 * @constructor
 */
const PillarCreator = ({ addPillarRedux }: Props) => {
  const [name, setName] = useState(null);
  const [color, setColor] = useState('#fff');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div align="center">
      <Form
        onSubmit={() =>
          createPillar(
            name,
            color,
            addPillarRedux,
            setSuccess,
            setIsLoading,
            setError,
          )
        }
      >
        <Header as="h3">
          <Form.Input
            fluid
            type="text"
            name="name"
            placeholder="Name of the Pillar"
            onChange={(value) => setName(value.target.value)}
          />
        </Header>
        <div align="center">
          <Container align="center">
            <Grid centered>
              <Grid.Row centered>
                <Grid.Column>
                  <div className="field">
                    <text>Choose the color for the pillar</text>
                    <SketchPicker
                      color={color}
                      onChangeComplete={(c) => setColor(c.hex)}
                    />
                  </div>
                  <div>
                    {displayError(error)}
                    {createSuccessLabel(success)}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div>
          <Button
            loading={isLoading}
            disabled={isLoading}
            primary
            size="big"
            type="button"
            onClick={() =>
              createPillar(
                name,
                color,
                addPillarRedux,
                setSuccess,
                setIsLoading,
                setError,
              )
            }
          >
            {'Submit'}
          </Button>
        </div>
        {createSuccessLabel(success)}
      </Form>
    </div>
  );
};

export default connect(
  () => ({}),
  (dispatch) => {
    return {
      addPillarRedux: (pillar, index) => {
        dispatch(addPillar(pillar, index));
      },
    };
  },
)(PillarCreator);
