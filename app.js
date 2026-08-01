let sun1 = document.getElementById("sun");
let moon1 = document.getElementById("moon");

moon1.style.display = "none";

sun1.addEventListener("click", function () {
    sun1.style.display = "none";
    moon1.style.display = "inline-block";
    document.body.style.backgroundColor = "black";
    document.body.classList.add("text-white");
      document.getElementById("colorchng").style.background =
        "linear-gradient(to right, #8C5607 0%, #5C340D 50%, #8E571F 100%)"; 
        document.getElementById("textcolor").style.color = "white";
});

moon1.addEventListener("click", function () {
    moon1.style.display = "none";
    sun1.style.display = "inline-block";
    document.body.style.backgroundColor = "white";
    document.body.classList.remove("text-white");
    document.getElementById("colorchng").style.background =
    "linear-gradient(980deg, #FEDDA0 0%, #F9F7DB 45%, #F9F7DB 70%, #F7DA70 100%)";
    document.getElementById("textcolor").style.color = "gray";
})