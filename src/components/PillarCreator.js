import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Message, Container, Button, Grid, Header, Form} from "semantic-ui-react";
import { SketchPicker } from 'react-color';
import {addPillar} from "../redux/actions/userActions";
import {newPillar} from "../logic/PillarHelper";

/**
 *
 * @param {string} name The name of pillar to the make.
 * @param {string} color The color of the pillar to create.
 * @param {function} addPillar The redux function to add a pillar to the user.
 * @param setSuccess
 * @param setIsLoading
 * @param setError
 */
const createPillar = (name, color, addPillar, setSuccess, setIsLoading, setError) => {
  setIsLoading(true);
  setTimeout(() => {
    if (name && color) {
      const pillar = newPillar(name, color);
      addPillar(pillar);
      setSuccess(true);
    }
    else {
      setSuccess(false);
      setError(new Error(''))
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
    return (<Message positive>
      <Message.Header>Success!</Message.Header>
      <p>
        You just created a new Challenge!
      </p>
    </Message>);
  } else {
    return null;
  }
};

/**
 * Displays an error message if applicable.
 *
 * @param {Error} error The error message string.
 * @return {*} The React JSX to show the error message.
 */
export const displayError = (error) => {
  if (error) {
    return (<Message negative>
      <Message.Header>Sorry!</Message.Header>
      <p>{error.message}</p>
    </Message>);
  }
};

const PillarCreator = (props) => {
  const [name, setName] = useState(null);
  const [color, setColor] = useState('#fff');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div align='center'>
      <Form onSubmit={() => createPillar(name, color, props.addPillar, setSuccess, setIsLoading, setError)}>
        <Header as='h3'>
          <Form.Input fluid type="text" name="name" placeholder="Name of the Pillar"
                      onChange={value => setName(value.target.value)}/>
        </Header>
        <div align='center'>
          <Container align='center'>
            <Grid centered>
              <Grid.Row centered>
                <Grid.Column>
                  <div className="field">
                    <label>Choose the pillar's color</label>
                    <SketchPicker color={color} onChangeComplete={(c) => setColor(c.hex)}/>
                  </div>
                  <div>{displayError(error)}{createSuccessLabel(success)}</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div>
          <Button loading={isLoading} disabled={isLoading} primary size="big" type='button'
                  onClick={() =>
                    createPillar(name, color, props.addPillar, setSuccess, setIsLoading, setError)
                  }>Submit</Button>
        </div>
        {createSuccessLabel(success)}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPillar: (pillar, index) => {
      dispatch(addPillar(pillar, index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PillarCreator);