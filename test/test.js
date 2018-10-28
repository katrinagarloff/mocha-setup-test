let myFunctions = '../index.js';
const assert = require('assert');

describe('my functions', function() {
  describe('sayHello', function() {
    it('should return "hello"', function() {
      assert.equal("hello", myFunctions.sayHello());
    });
  });
});
