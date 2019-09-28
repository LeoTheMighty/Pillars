import React from 'react';
import {ModalContent, ModalHeader} from 'semantic-ui-react';

const IntroView = () => {
  return (
    <div>
      <ModalHeader as="h1">
        Welcome to Pillars!
      </ModalHeader>
      <ModalContent>
        This is an app about stuff
      </ModalContent>
    </div>
  );
};

export default IntroView;