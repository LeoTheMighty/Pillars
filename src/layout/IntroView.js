import React from 'react';
import {ModalContent, ModalHeader} from 'semantic-ui-react';

/**
 * Displays information about how to use the app and what its purpose is.
 *
 * @return {*} Jsx to display the component.
 * @constructor
 */
const IntroView = () => {
  return (
    <div>
      <ModalHeader as="h1">
        Welcome to <b>Pillars!</b>
      </ModalHeader>
      <ModalContent>
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
      </ModalContent>
    </div>
  );
};

export default IntroView;