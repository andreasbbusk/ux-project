const typedText = document.querySelector(".skrevet-tekst");
const cursor = document.querySelector(".cursor");

const textArray = ["inspirerer", "er børnevenlige", "er varierende", "er sunde"];

let textArrayIndex = 0;
let charIndex = 0;

const slet = () => {
    if (charIndex > 0) {
        cursor.classList.remove('blink');
        typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(slet, 60);
    } else {
        cursor.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
        }
        setTimeout(skriv, 1000);
    }
}

const skriv = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove('blink');
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(skriv, 90);
    } else {
        cursor.classList.add('blink');
        setTimeout(slet, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    skriv();
})