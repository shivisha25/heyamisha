document.addEventListener('DOMContentLoaded', () => {
    const loveRevealSection = document.getElementById('love-reveal');
    const loveButton = loveRevealSection ? loveRevealSection.querySelector('.love-button') : null;
    const loveMessageDiv = loveRevealSection ? loveRevealSection.querySelector('#loveMessage') : null;

    function revealLove() {
        const messages = [
            "You are my everything, Amisha.",
            "My love for you is deeper than the ocean and higher than the mountains.",
            "Every moment with you is a blessing I cherish.",
            "You complete me in ways I never thought possible.",
            "My heart beats only for you, my love."
        ];

        if (loveMessageDiv) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            
            loveMessageDiv.textContent = randomMessage;
            loveMessageDiv.style.display = 'block';
            
            // Add animation to the message
            loveMessageDiv.classList.add('animate__animated', 'animate__fadeIn');
        }
    }

    // Attach event listener if button exists
    if (loveButton) {
        loveButton.addEventListener('click', revealLove);
    }

    // Optional: Add floating hearts animation
    function createFloatingHearts() {
        const section = document.querySelector('.decorative-section');
        if (!section) return;

        const heartsContainer = section.querySelector('.floating-hearts');
        if (!heartsContainer) return;

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
            heart.style.opacity = Math.random().toString();
            heartsContainer.appendChild(heart);
        }
    }

    // Create floating hearts
    createFloatingHearts();
    // Create popup functionality for images and videos
    const mediaElements = document.querySelectorAll('.carousel-image, .carousel-video');
    const body = document.querySelector('body');

    mediaElements.forEach((media) => {
        media.addEventListener('click', () => {
            // Create the overlay
            const overlay = document.createElement('div');
            overlay.classList.add('media-popup-overlay');

            // Create the media element for display
            let popupContent;
            if (media.tagName === 'IMG') {
                popupContent = document.createElement('img');
                popupContent.src = media.src;
                popupContent.alt = media.alt;
            } else if (media.tagName === 'VIDEO') {
                popupContent = document.createElement('video');
                popupContent.src = media.src;
                popupContent.controls = true;
                popupContent.autoplay = true;
            }

            popupContent.classList.add('popup-media');
            overlay.appendChild(popupContent);
            body.appendChild(overlay);

            // Close popup when clicking outside the media
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.remove();
                }
            });
        });
    });
});