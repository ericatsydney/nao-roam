(function(window, document, undefined) {
  App = window.App || {};
  App.UI = {
    placeOnClick: function(e) {
      e.preventDefault();
      var x = document.getElementById('place-x');
      var y = document.getElementById('place-y');
      var orientation = document.getElementById('place-orientation');
      var xValue = parseInt(x.options[x.selectedIndex].value);
      var yValue = parseInt(y.options[y.selectedIndex].value);
      App.myRobot.tryToMove(xValue,yValue, orientation.options[orientation.selectedIndex].value);
    },
    moveOnClick: function(e) {
      e.preventDefault();
      App.myRobot.move();
    },
    leftOnClick: function(e) {
      e.preventDefault();
      App.myRobot.left();
    },
    rightOnClick: function(e) {
      e.preventDefault();
      App.myRobot.right();
    },
    reportOnClick: function(e) {
      e.preventDefault();
      App.myRobot.report();
    },
    init: function() {
      var buttonsEvents = {
        'place-button': 'placeOnClick',
        'left-button': 'leftOnClick',
        'right-button': 'rightOnClick',
        'move-button': 'moveOnClick',
        'report-button': 'reportOnClick'
      }
      for( var buttonId in buttonsEvents) {
        var button = document.getElementById(buttonId);
        var callback = buttonsEvents[buttonId];
        if (typeof App.UI[callback] === 'function') {
          button.addEventListener('click', App.UI[callback]);
        }
      }
      var message = document.getElementById('robot-says-content');
      // Listen for the event.
      document.addEventListener('robotPaused', function (e) {
        message.innerHTML= 'Oops, I cannot go there';
      }, false);
      // Listen for the event.
      document.addEventListener('robotMoved', function (e) {
        message.innerHTML= 'Successful';
      }, false);
      // Listen for the event.
      document.addEventListener('robotReported', function (e) {
        message.innerHTML= 'My position is ' + JSON.stringify(App.myRobot.get());
      }, false);
    },
  };
  App.Canvas.init();
  App.UI.init();
})(this, this.document)
