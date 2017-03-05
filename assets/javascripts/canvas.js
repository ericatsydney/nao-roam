// This is the javascript.
(function(window, document, undefined) {
  App = window.App || {};
  App.Canvas = {
    canvasLength: 400,
    maxSteps: 5,
    context: document.getElementById("canvas-table").getContext("2d"),
    robotContext: document.getElementById("canvas-robot").getContext("2d"),
    /**
     * Convert Y Axis to make it upward.
     */
    yAxis: function(canvasYAxis) {
      return canvasYAxis * -1;
    },
    init: function() {
      var context = App.Canvas.context;
      var robotContext = App.Canvas.robotContext;
      var canvasLength = App.Canvas.canvasLength;
      var maxSteps = App.Canvas.maxSteps;
      var stepLength = canvasLength / maxSteps;

      // Table canvas.
      context.translate(0, canvasLength);
      context.beginPath();
      for (i = 1; i < maxSteps; i++) {
        context.moveTo(0, App.Canvas.yAxis(stepLength) * i);
        context.lineTo(canvasLength, App.Canvas.yAxis(stepLength) * i);
        context.moveTo(stepLength * i, 0);
        context.lineTo(stepLength * i, App.Canvas.yAxis(canvasLength) * i);
      }
      context.stroke();

      // Robot canvas.
      robotContext.translate(0, canvasLength);
      var image = new Image();
      image.src = 'assets/images/nao-north.jpg';
      image.onload = function() {
        robotContext.drawImage(image, 0, -80, 130, 90);
      }

      // Listen for the event.
      document.addEventListener('robotMoved', function (e) {
        console.log(App.myRobot.get());
        App.Canvas.redraw();
      }, false);
    },

    redraw: function() {
      var canvasLength = App.Canvas.canvasLength;
      var maxSteps = App.Canvas.maxSteps;
      var stepLength = canvasLength / maxSteps;
      App.Canvas.robotContext.clearRect(0, canvasLength * -1, canvasLength, canvasLength);
      var image = new Image();
      var currentPosition = App.myRobot.get();
      switch(currentPosition.orientation) {
        case 'NORTH':
          image.src = 'assets/images/nao-north.jpg';
          break;
        case 'SOUTH':
          image.src = 'assets/images/nao-south.jpg';
          break;
        case 'WEST':
          image.src = 'assets/images/nao-west.jpg';
          break;
        case 'EAST':
          image.src = 'assets/images/nao-east.jpg';
          break;
      }
      image.onload = function() {
        // Convert the position to canvas axis
        var canvasX = parseInt(currentPosition.x) * stepLength;
        var canvasY = (parseInt(currentPosition.y) + 1) * stepLength * -1;
        console.log(canvasY);
        App.Canvas.robotContext.drawImage(image, canvasX, canvasY, 130, 90);
      }
    }
  }
})(this, this.document)

