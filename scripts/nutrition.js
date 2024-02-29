let gram = document.getElementById("gram")
let portion = document.getElementById("portion")
let text = "280 kcal <br> 11,5g <br> 2,5g <br> 17,5g <br> 1,5g <br> 17g <br> 2,7g <br>"
let text2 = "560 kcal <br> 23g <br> 5g <br> 35g <br> 3g <br> 34g <br> 5,4g"
let nutrition = document.getElementById("nutrition-numbers")

gram.addEventListener("click", function () {
    let dataElement = document.getElementById("nutrition-numbers");
    gram.style.backgroundColor = "#D56560";
    portion.style.backgroundColor = "#efefef"
    nutrition.style.lineHeight = "2"
    dataElement.innerHTML = text;
});

portion.addEventListener("click", function () {
    let dataElement = document.getElementById("nutrition-numbers");
    gram.style.backgroundColor = "#efefef";
    portion.style.backgroundColor = "#D56560";
    nutrition.style.lineHeight = "2"
    dataElement.innerHTML = text2;
});
