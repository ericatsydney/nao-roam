(function(window, document, undefined) {
  App = window.App || {};
  var Robot = function(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    console.log( this.x + ' ' + this.y + ' ' + this.orientation);
    return this;
  }

  Robot.prototype.report = function() {
    console.log( this.x + ' ' + this.y + ' ' + this.orientation);
    return this;
  }

  Robot.prototype.get = function() {
    return this;
  }

  Robot.prototype.move = function() {
    var currentPosition = this.get();
    switch (currentPosition.orientation) {
      case 'NORTH':
        this.tryToMove(currentPosition.x, currentPosition.y + 1, currentPosition.orientation);
        break;
      case 'SOUTH':
        this.tryToMove(currentPosition.x, currentPosition.y - 1, currentPosition.orientation);
        break;
      case 'WEST':
        this.tryToMove(currentPosition.x - 1, currentPosition.y, currentPosition.orientation);
        break;
      case 'EAST':
        this.tryToMove(currentPosition.x + 1, currentPosition.y, currentPosition.orientation);
        break;
    }
  }

  Robot.prototype.right = function() {
    var currentPosition = this.get();
    switch (currentPosition.orientation) {
      case 'NORTH':
        this.tryToMove(currentPosition.x, currentPosition.y, 'EAST');
        break;
      case 'SOUTH':
        this.tryToMove(currentPosition.x, currentPosition.y, 'WEST');
        break;
      case 'WEST':
        this.tryToMove(currentPosition.x, currentPosition.y, 'NORTH');
        break;
      case 'EAST':
        this.tryToMove(currentPosition.x, currentPosition.y, 'SOUTH');
        break;
    }
  }

  Robot.prototype.left = function() {
    var currentPosition = this.get();
    switch (currentPosition.orientation) {
      case 'NORTH':
        this.tryToMove(currentPosition.x, currentPosition.y, 'WEST');
        break;
      case 'SOUTH':
        this.tryToMove(currentPosition.x, currentPosition.y, 'EAST');
        break;
      case 'WEST':
        this.tryToMove(currentPosition.x, currentPosition.y, 'SOUTH');
        break;
      case 'EAST':
        this.tryToMove(currentPosition.x, currentPosition.y, 'NORTH');
        break;
    }
  }


  Robot.prototype.tryToMove = function(x, y, orientation) {
    if (x > 4 || x < 0 || y > 4 || y < 0) {
      //var event = new Event('robotPaused');
      //// Emit custom event
			//document.dispatchEvent(event)
      return false;
    }
    this.set(x, y, orientation);
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
