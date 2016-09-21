import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { AppLayout }  from '../layouts/AppLayout'

import { Todos } from '../../api/todos.js';

import Todo from '../Todo.jsx';

export class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('todos.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  renderTodos() {
    let filteredTodos = this.props.todos;
    if (this.state.hideCompleted) {
      filteredTodos = filteredTodos.filter(todo => !todo.checked);
    }
    return filteredTodos.map((todo) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = todo.owner === currentUserId;

      return (
        <Todo
          key={todo._id}
          todo={todo}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header className="sub-header">
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
                type="checkbox"
                readOnly
                checked={this.state.hideCompleted}
                onClick={this.toggleHideCompleted.bind(this)}
                />
            Hide Checked
          </label>

          {
            this.props.currentUser ?
                <form className="new-todo" onSubmit={this.handleSubmit.bind(this)}>
                  <input
                      type="text"
                      ref="textInput"
                      placeholder="Type to add new todos"
                      />
                </form> : ""
          }
        </header>

        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object
};

export default TodosListContainer = createContainer((props) => {
  Meteor.subscribe('todos');

  return {
    todos: Todos.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Todos.find({ checked: { $ne: true } }).count(),
    currentUser: props.currentUser
  };
}, TodosList);
