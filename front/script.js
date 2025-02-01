
document.addEventListener("DOMContentLoaded", () => {
    // Select the Sign-Up Link
    const signUpLink = document.getElementById("sign-up-link");

    // Add Click Event Listener
    signUpLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert("I miss you saagaaaaaaaad!");
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Show only one card at a time
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "slide",
    speed: 500 // Smooth transition speed
  });

