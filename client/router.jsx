import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { AppContainer } from '../imports/ui/containers/AppContainer.jsx';
import { Homepage } from '../imports/ui/pages/Homepage.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(AppContainer, {
      content: (props) => <Homepage {...props} />
    });
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    mount(AppContainer, {
      content: (props) => <Homepage {...props} />
    });
  }
});
