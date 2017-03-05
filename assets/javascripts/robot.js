(function(window, document, undefined) {
  App = window.App || {};
  var Robot = function(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    return this;
  }

  Robot.prototype.report = function() {
    return this;
  }

  Robot.prototype.get = function() {
    return this;
  }

  Robot.prototype.move = function() {
    var currentPosition = this.get();
    var currentX = 0;
    var currentY = 0;
    switch (currentPosition.orientation) {
      case 'NORTH':
        currentX = currentPosition.x;
        currentY = currentPosition.y + 1;
        break;
      case 'SOUTH':
        currentX = currentPosition.x;
        currentY = currentPosition.y - 1;
        break;
      case 'WEST':
        currentX = currentPosition.x - 1;
        currentY = currentPosition.y;
        break;
      case 'EAST':
        currentX = currentPosition.x + 1;
        currentY = currentPosition.y;
        break;
    }
    this.tryToMove(currentX, currentY, currentPosition.orientation);
  }

  Robot.prototype.right = function() {
    var currentPosition = this.get();
    var currentOrientation = '';
    switch (currentPosition.orientation) {
      case 'NORTH':
        currentOrientation = 'EAST';
        break;
      case 'SOUTH':
        currentOrientation = 'WEST';
        break;
      case 'WEST':
        currentOrientation = 'NORTH';
        break;
      case 'EAST':
        currentOrientation = 'SOUTH';
        break;
    }
    this.tryToMove(currentPosition.x, currentPosition.y, currentOrientation);
  }

  Robot.prototype.left = function() {
    var currentPosition = this.get();
    var currentOrientation = '';
    switch (currentPosition.orientation) {
      case 'NORTH':
        currentOrientation = 'WEST';
        break;
      case 'SOUTH':
        currentOrientation = 'EAST';
        break;
      case 'WEST':
        currentOrientation = 'SOUTH';
        break;
      case 'EAST':
        currentOrientation = 'NORTH';
        break;
    }
    this.tryToMove(currentPosition.x, currentPosition.y, currentOrientation);
  }


  Robot.prototype.tryToMove = function(x, y, orientation) {
    var maxSteps = 5;
    var validOrientation = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    if (x < maxSteps && x >= 0 && y < maxSteps && y >= 0 && validOrientation.indexOf(orientation) > -1) {
      this.set(x, y, orientation);
    }
  }

  Robot.prototype.report = function() {
    return this;
  }

  Robot.prototype.set = function(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    return this;
  }

  // Init the robot.
  App.myRobot = new Robot(0, 0, 'NORTH');
})(this, this.document)
