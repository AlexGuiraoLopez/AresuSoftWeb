window.addEventListener("scroll", function(){
    var header = document.querySelector(".menu");
    header.classList.toggle("menuSticky",window.scrollY>0);
})