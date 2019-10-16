import React from 'react';
import { Button, Checkbox, Modal } from 'semantic-ui-react';

/**
 * Displays information about how to use the app and what its purpose is.
 *
 * @return {*} Jsx to display the component.
 * @constructor
 */
const IntroView = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Modal.Header as="h1">
        Welcome to <b>Pillars!</b>
      </Modal.Header>
      <Modal.Content>
        <h3> Overview </h3>
        <p>
          This is an app that{"'"}s dedicated to the <i>consistency</i> of
          living life in this modern age.
        </p>
        <p>
          This app keeps track of the habits you wish to maintain throughout
          your life and helps make sure that you both are trying to continue to
          accomplish these things everyday and also are aware about the
          analytics of how well you have been accomplishing them.
        </p>
        <p>
          Each <b>pillar</b> indicates a different daily habit to accomplish.
          These can be anything from <i>exercising</i> to <i>meditating</i> and
          even to maintaining a strong <i>connection</i> to loved ones. It{"'"}s
          in my personal opinion that keeping track of these and committing to
          the process of accomplishing them will help you have a more fulfilling
          and engaging life.
        </p>
        <h3> How To Use: </h3>
        <p>
          To use this app, you first have to figure out the things that you want
          to keep track of in your day-to-day life. These will make up the
          Pillars of your day and will be a frame of reference for your day
          went. These can be everything from going to bed early, to meditating,
          to eating healthy, even to maintaining a strong relationship with
          friends or family.
        </p>
        <p>
          For each one of your pillars, you click the + button at the top of the
          screen, which looks like this:
        </p>
        <Button primary icon="plus" />
        <p />
        <p>This will get you to the Pillar creation step.</p>
        <h3>Creating a Pillar</h3>
        <h4>Name</h4>
        <p>
          The name indicates what the Pillar will be called and what it will show up as.
        </p>
        <h4>Description</h4>
        <p>
          The description should basically describe what needs to be done to
          accomplish the Pillar each day, along with metrics about how to do it
          and why it is important to accomplish.
        </p>
        <h4>Color</h4>
        <p>
          This will determine the color of the pillar as it shows up in the
          view.
        </p>
        <h3>Tracking your Progress</h3>
        <p>
          The Pillars are based on a once-a-day checking system. Every day, as
          you complete the Pillars, you will use the app in order to check off
          and say that you have completed the Pillar goal. Then, at the end of
          the day, the switch for the Pillar will reset and allow you to check
          it off for the next day.
        </p>
        <p>
          In order to check off each Pillar for the day, first switch the app
          into the checking mode by pressing the check button:
        </p>
        <Button primary icon="check circle" />
        <p />
        <p>
          Then, you check off each one by clicking on the switch at the bottom
          of the Pillar that looks like:
        </p>
        <Checkbox toggle checked={false} />
        <p />
        <p>After you check it off, it will be in the checked position like:</p>
        <Checkbox toggle checked />
        <p />
        <h2>Thank You!</h2>
        <p>Enjoy using my app and I hope you gain something out of it :)</p>
        <p />
      </Modal.Content>
    </div>
  );
};

export default IntroView;
