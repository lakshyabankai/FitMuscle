document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, mirror: false });
  }

  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const header = document.querySelector('.site-header');
  let lastScroll = window.scrollY;

  navToggle?.addEventListener('click', function() {
    nav?.classList.toggle('open');
  });

  document.querySelectorAll('.site-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav?.classList.remove('open');
    });
  });

  function updateActiveLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(function(link) {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  updateActiveLink();

  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 120) {
      header?.classList.add('header-hidden');
    } else {
      header?.classList.remove('header-hidden');
    }
    lastScroll = currentScroll;
  });
});

function joinNow() {
  window.open('https://wa.me/919140661828?text=Hello%20I%20want%20to%20join%20The%20Fit%20Muscle%20Gym', '_blank');
}
