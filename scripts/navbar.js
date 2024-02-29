/* ---------- Logo resizing on desktop ---------- */
let logo = document.querySelector('.logo');

/* Change logo height if scrolled > 64px & using screenwidth > 768px */
window.onscroll = () => {
    if (screen.width >= 768) {          // Check screen width
        if (window.scrollY > 64) {      // Check scroll amount
            logo.style.width = "65px";
            logo.style.margin = "0.4rem 0.4rem 0.4rem 2rem"   // Make logo small
        } else {
            logo.style.width = "120px";
            logo.style.margin = "1rem 0 0 2rem"   // Make logo large
        }
    }
}