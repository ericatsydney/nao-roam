(function(window, document, undefined) {
  App = window.App || {};
  var Robot = function(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    return this;
  }

  /**
   * Report the current position.
   *
   * @returns {object}
   *   A robot object contain the current position.
   */
  Robot.prototype.report = function() {
    return this;
  }

  /**
   * Get the current position of the robot.
   *
   * @returns {object}
   *   A robot object contain the current position.
   */
  Robot.prototype.get = function() {
    return this;
  }

  /**
   * Set the position to starting point.
   */
  Robot.prototype.reset = function() {
    this.set(0, 0, 'NORTH');
  }

  /**
   * Take one step forward along the current orientation.
   */
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

  /**
   * Turn 90 degree clockwise.
   */
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

  /**
   * Turn 90 degree anti-clockwise.
   */
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


  /**
   * Make sure the move is safe and take the step..
   *
   * @argument {integer} x
   *   x axis position.
   * @argument {integer} y
   *   y axis position.
   * @argument {string} orientation
   *   orientation valid values are ['NORTH', 'SOUTH', 'EAST', 'WEST'].
   */
  Robot.prototype.tryToMove = function(x, y, orientation) {
    var maxSteps = 5;
    var validOrientation = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    if (x < maxSteps && x >= 0 && y < maxSteps && y >= 0 && validOrientation.indexOf(orientation) > -1) {
      this.set(x, y, orientation);
    }
  }

  /**
   * Put the robot to the place according to parameters.
   *
   * @argument {integer} x
   *   x axis position.
   * @argument {integer} y
   *   y axis position.
   * @argument {string} orientation
   *   orientation valid values are ['NORTH', 'SOUTH', 'EAST', 'WEST'].
   */
  Robot.prototype.set = function(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    return this;
  }

  // Init the robot.
  App.myRobot = new Robot(0, 0, 'NORTH');
})(this, this.document)
