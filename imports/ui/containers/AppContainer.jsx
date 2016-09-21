import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import { AppLayout }  from '../layouts/AppLayout'

export const AppContainer = createContainer((props) => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  return {
    currentUser: Meteor.user()
  };
}, AppLayout);
