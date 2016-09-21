import React, { Component, PropTypes } from 'react';

import TodosListContainer from '../containers/TodosListContainer';

export const Homepage = (props) => {
    return (
        <TodosListContainer {...props}/>
    )
}

