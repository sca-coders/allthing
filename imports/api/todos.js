import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('todos', function todosPublication() {
    return Todos.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'todos.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Todos.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'todos.remove'(todoId) {
    check(todoId, String);
    const todo = Todos.findOne(todoId);
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Todos.remove(todoId);
  },
  'todos.setChecked'(todoId, setChecked) {
    check(todoId, String);
    check(setChecked, Boolean);
    const todo = Todos.findOne(todoId);
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Todos.update(todoId, { $set: { checked: setChecked } });
  },
  'todos.setPrivate'(todoId, setToPrivate) {
    check(todoId, String);
    check(setToPrivate, Boolean);

    const todo = Todos.findOne(todoId);
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Todos.update(todoId, { $set: { private: setToPrivate } });
  },
});
