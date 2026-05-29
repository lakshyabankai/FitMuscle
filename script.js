// function joinGym(){

// alert("Welcome To Muscle Fit Gym!");

// }
function joinGym(){

window.open(
"https://wa.me/9140661828?text=Hello%20I%20want%20to%20join%20The%20Fit%20Muscle%20Gym",
"_blank"
);

}
function contactOwner(){

window.open(
"https://wa.me/919876543210?text=Hello%20I%20want%20information%20about%20Muscle%20Fit%20Gym",
"_blank"
);

}
function ownerPhone(){

window.location.href = "tel:+91 9140661828";

}

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