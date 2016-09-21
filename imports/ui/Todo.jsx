import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Todos } from '../api/todos.js';

export default class Todo extends Component {
  toggleChecked() {
    Meteor.call('todos.setChecked', this.props.todo._id, !this.props.todo.checked);
  }

  deleteThisTodo() {
    Meteor.call('todos.remove', this.props.todo._id);
  }

  togglePrivate() {
    Meteor.call('todos.setPrivate', this.props.todo._id, ! this.props.todo.private);
  }

  render() {
    // Give Todos a different className when they are checked off,
    // so that we can style them nicely in CSS
    const todoClassName = classnames({
      checked: this.props.todo.checked,
      private: this.props.todo.private,
    });

    return (
      <li className={todoClassName}>
        { this.props.showPrivateButton ? (
          <button className="delete" onClick={this.deleteThisTodo.bind(this)}>
            &times;
          </button>
        ) : ''}

        { this.props.showPrivateButton ? (
          <input
            type="checkbox"
            readOnly
            checked={this.props.todo.checked}
            onClick={this.toggleChecked.bind(this)}
          />
        ) : ''}

          { this.props.showPrivateButton ? (
            <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
              { this.props.todo.private ? 'Private' : 'Public' }
            </button>
          ) : ''}

        <span className="text">
          <strong>{this.props.todo.username}</strong>: {this.props.todo.text}
        </span>
     </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  showPrivateButton: PropTypes.bool.isRequired,
};

Todo.defaultProps = {
  checked: false,
}
