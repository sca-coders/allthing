/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { expect, assert } from 'meteor/practicalmeteor:chai';

import { Todos } from './todos.js';

if (Meteor.isServer) {
  describe('Todos', () => {
    const userId = Random.id();
    const otherUserId = userId + 1;
    let todo;

    beforeEach(() => {
      Todos.remove({});
      todoId = Todos.insert({
        text: 'test todo',
        createdAt: new Date(),
        owner: userId,
        username: 'tmeasday',
      });
    });

    describe('method todos.remove', () => {
      it('can delete owned todo', () => {
        const deleteTodo = Meteor.server.method_handlers['todos.remove'];
        const invocation = { userId };
        deleteTodo.apply(invocation, [todoId]);
        assert.equal(Todos.find().count(), 0);
      });

      it('cannot delete unowned todo', () => {
        const deleteTodo = Meteor.server.method_handlers['todos.remove'];
        const invocation = { userId: otherUserId };
        expect(() => {
          deleteTodo.apply(invocation, [todoId]);
        }).to.throw('not-authorized');
        assert.equal(Todos.find().count(), 1);
      });
    });

  });
}
