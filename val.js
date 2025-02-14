// val.js - Final working version
document.addEventListener("DOMContentLoaded", function() {
    const valentines = document.querySelector('.valentines');
    const card = document.querySelector('.card');
    const heart = document.querySelector('.heart');
    const effectDiv = document.getElementById('heartClickEffect');

    // 1. Card Hover Effect
    valentines.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-100px)';
    });

    valentines.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

    // 2. Heart Click Effect
    heart.addEventListener('click', function(e) {
        e.stopPropagation(); // Crucial fix
        effectDiv.style.display = 'flex';
        effectDiv.style.opacity = '1';
    });

    // 3. Close Overlay
    effectDiv.addEventListener('click', function() {
        effectDiv.style.display = 'none';
        effectDiv.style.opacity = '0';
    });
});
