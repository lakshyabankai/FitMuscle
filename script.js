// function joinGym(){

// alert("Welcome To Muscle Fit Gym!");

// }
function joinGym(){

window.open(<a href="https://wa.me/9140661828?text=🏋️‍♂️%20Hello!%20I%20want%20to%20join%20The%20Fit%20Muscle%20Gym."
   target="_blank">
   Join Now
</a>
// "https://wa.me/9140661828?text=Hello%20I%20want%20to%20join%20The%20Fit%20Muscle%20Gym",
// "_blank"
);

}
function contactOwner(){

window.open(
"https://wa.me/9140661828?text=Hello%20I%20want%20information%20about%20Muscle%20Fit%20Gym",
"_blank"
);

}
function ownerPhone(){

window.location.href = "tel:+91 9140661828";

}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const isExpanded = card.classList.contains('expanded');

            cards.forEach(function(otherCard) {
                otherCard.classList.remove('expanded');
            });

            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });
});