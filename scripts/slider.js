/* Image slider */
let container = document.getElementById('img-container-front'); // Image container
let imageCount = document.querySelectorAll('#img-container-front img').length; // Amount of images
let next = document.getElementById('next'); // Next button
let prev = document.getElementById ('prev'); // Prev button
let index = 0; // Array index

/* Check if next/prev image is within scope, if so, move index up or down */
next.onclick = () => { if (index < imageCount - 3) sliderShift(1) } // Next onclick
prev.onclick = () => { if (index > 0) sliderShift(-1) }                 // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShift(i) {
    index = index + i; // Increase/decrease index
    shift = container.clientWidth * 1.01 / 3 * index; // Calculate shift
    container.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift    
}