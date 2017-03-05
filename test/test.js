var assert = require('assert');
var robot = require('../assets/javascripts/robot');
var testInput = require('./testInput.json');


describe('Robot test', function() {
var testCases = testInput.testCases;
testCases.forEach(function(testCase) {
  var commands = testCase.testInput;
  describe.only(testCase.title, function() {
    it(testCase.spec, function() {
      // Reset the robot to starting point before every individual testing.
      App.myRobot.reset();
      var output = testCase.output.split(',');
      var currentX = 0;
      var currentY = 0;
      var currentOrientation = '';
      var length = commands.length;
      for( var i = 0; i < length; i++) {
        switch (commands[i]) {
          case 'MOVE':
            App.myRobot.move();
            break;
          case 'LEFT':
            App.myRobot.left();
            break;
          case 'RIGHT':
            App.myRobot.right();
            break;
          case 'REPORT':
            var currentPosition = App.myRobot.report();
            currentX = currentPosition.x;
            currentY = currentPosition.y;
            currentOrientation = currentPosition.orientation;
            break;
          default:
            if (commands[i].indexOf('PLACE') === 0) {
              var parameters = commands[i].substring(6);
              var parametersArray = parameters.split(',');
              App.myRobot.tryToMove(parseInt(parametersArray[0]), parseInt(parametersArray[1]), parametersArray[2]);
            }
            break;
        }
      }
      assert.equal(output[0], currentX);
      assert.equal(output[1], currentY);
      assert.equal(output[2], currentOrientation);
    });
  });
});
});
