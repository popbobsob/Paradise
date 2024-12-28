// FullPage.js Initialization
document.addEventListener("DOMContentLoaded", () => {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        sectionsColor: ['#f0f4ff', '#fff', '#f0f4ff']
    });
});

// Play Video Function
function playVideo() {
    const video = document.getElementById('birthday-video');
    const thumbnail = document.querySelector('.video-thumbnail');
    thumbnail.style.display = 'none'; // Hide thumbnail
    video.style.display = 'block'; // Show video
    video.play(); // Auto-play the video
}
