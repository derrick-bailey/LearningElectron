// square_sidebar_buttons.js
function adjustButtonSizes() {
    var buttons = document.querySelectorAll('#sidebar button');
    buttons.forEach(function(button) {
      var width = button.offsetWidth;
      button.style.height = width + 'px'; // Sets the height equal to the current width to make it square
    });
  }
  
  // Adjust button sizes when the window loads and when it is resized
  window.onload = adjustButtonSizes;
  window.onresize = adjustButtonSizes;
  