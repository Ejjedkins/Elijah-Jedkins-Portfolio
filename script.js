/*Defining toggle Menu */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/*Allowing videos to be played and paused by user*/
const projectVideos = document.querySelectorAll('.project-video');

projectVideos.forEach(video => {
    video.addEventListener('play', function() {
        projectVideos.forEach(otherVideo => {
            if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
            }
        });
    });
});