function opentab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class = "tabcontent" and hide them
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class = "tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}

// Function to hide the loading animation
function hideLoadingAnimation() {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.display = 'none';
    }
  }
  
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Hide the loading animation after a fixed duration (e.g., 2 seconds)
    setTimeout(hideLoadingAnimation, 5000);
  });