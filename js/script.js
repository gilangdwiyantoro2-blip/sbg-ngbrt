const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.getElementById('subang-explore');

// Toggle menu saat hamburger diklik
hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    navbarNav.classList.toggle('open');
});

// Tutup menu saat klik di luar
document.addEventListener('click', function(e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navbarNav.classList.remove('open');
    }
});

// Tutup menu dan scroll ke section saat link diklik
navbarNav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navbarNav.classList.remove('open');
    });
});
