document.addEventListener('DOMContentLoaded', function () {
    showContent('home');
});

// Darkmode

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Darkmode Ende

function showContent(id) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    window.scrollTo(0, 0); // Scroll to top when showing content
}

var flashcards = document.querySelectorAll('.flashcard');
flashcards.forEach(function (flashcard) {
    flashcard.addEventListener('click', function (event) {
        flashcard.classList.toggle('show');
        event.preventDefault(); // Prevent the default scroll behavior
        return false; // Ensure no default scrolling happens
    });
});


function toggleOSI() {
    var x = document.getElementById("OSI");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function toggleExample() {
    var x = document.getElementById("example");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggleTCPIP() {
    var x = document.getElementById("TCPIP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
