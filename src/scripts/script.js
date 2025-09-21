/**
 * Unconventional Neuroscientists - Essential JavaScript Functions
 * Minimal script with only required interactive functionality
 */

// Letter Modal Functions
function openLetter() {
    document.getElementById('letterModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLetter() {
    document.getElementById('letterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        closeLetter();
    }
}

// Flip card functionality
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Simple hover interactions for envelope
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const arrowImg = document.querySelector('.curvy-arrow');
    const typewriterText = document.querySelector('.typewriter-text');
    
    // Add hover interactions
    [arrowImg, typewriterText].forEach(element => {
        if (element) {
            element.addEventListener('mouseenter', () => {
                envelope.classList.add('highlight');
            });
            
            element.addEventListener('mouseleave', () => {
                envelope.classList.remove('highlight');
            });
        }
    });
});