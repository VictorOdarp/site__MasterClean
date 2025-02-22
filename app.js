const perguntas = document.querySelectorAll(".container__perguntas");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        pergunta.classList.toggle("active");
    });
})

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => myObserver.observe(element));

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

