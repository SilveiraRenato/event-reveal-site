// Video overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('videoOverlay');
    const mask = document.getElementById('videoMask');
    const video = document.getElementById('mainVideo');
    
    if (overlay && mask && video) {
        overlay.addEventListener('click', function() {
            // Hide the overlay
            overlay.style.display = 'none';
            
            // Show the mask
            mask.style.display = 'block';
            
            // Restart video with sound
            const currentSrc = video.src;
            video.src = currentSrc.replace('muted=true', 'muted=false');
        });
    }
});