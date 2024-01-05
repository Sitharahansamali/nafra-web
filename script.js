var typed = new Typed (".multiple-text",{
    strings: ["A Frontend Developer", "A Youtuber", "An Editor"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

function displayPopup() {
    alert("Thank You For the message. I Will Contact You As Soon As Possible!");
  }

  const video = document.getElementById('myVideo');
  const videoContainer = document.getElementById('video-container');

  // Play video on mouse enter
  videoContainer.addEventListener('mouseenter', function() {
    video.play();
  });

  // Pause video on mouse leave
  videoContainer.addEventListener('mouseleave', function() {
    video.pause();
  });