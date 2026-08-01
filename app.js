let sun1 = document.getElementById("sun");
let moon1 = document.getElementById("moon");

moon1.style.display = "none";

sun1.addEventListener("click", function () {
    sun1.style.display = "none";
    moon1.style.display = "inline-block";
    document.body.style.backgroundColor = "black";
    document.body.classList.add("text-white");
});

moon1.addEventListener("click", function () {
    moon1.style.display = "none";
    sun1.style.display = "inline-block";
    document.body.style.backgroundColor = "white";
    document.body.classList.remove("text-white");
});