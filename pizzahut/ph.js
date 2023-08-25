let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
veg=document.querySelector(".veg_pizza");
vegpizza=document.querySelector(".veg");
nonveg=document.querySelector(".non_veg_pizza");
nonvegpizza=document.querySelector(".nonveg")
veg.addEventListener('click',()=>{
    let i;
    let price = document.getElementsByClassName("price");
    let nonprice=document.getElementsByClassName("nonprice");
    vegpizza.classList.remove("none");
    vegpizza.classList.add("block");
    nonvegpizza.classList.remove("block");
    nonvegpizza.classList.add("none");
    for (i = 0; i < price.length; i++) {
        price[i].style.display = "block";
    }
    for (i = 0; i < nonprice.length; i++) {
        nonprice[i].style.display = "none";
    }
})
nonveg.addEventListener('click',()=>{
    let i;
    let price = document.getElementsByClassName("price");
    let nonprice=document.getElementsByClassName("nonprice");
    nonvegpizza.classList.remove("none");
    nonvegpizza.classList.add("block");
    vegpizza.classList.remove("block");
    vegpizza.classList.add("none");
    for (i = 0; i < price.length; i++) {
        price[i].style.display = "none";
    }
    for (i = 0; i < nonprice.length; i++) {
        nonprice[i].style.display = "block";
    }
})
pizzan=document.querySelector(".pizzanav");
pizz= document.querySelector(".pizza");
drinkn=document.querySelector(".drinknav");
drin= document.querySelector(".drink");
dessertn=document.querySelector(".dessertnav");
desser=document.querySelector(".dessert");
pizzan.addEventListener('click',()=>{
    pizz.classList.add("block");
    pizz.classList.remove("none");
    desser.classList.add("none");
    desser.classList.remove("block");
    let i;
    let dprice=document.getElementsByClassName("dprice");
    drin.classList.add("none");
    drin.classList.remove("block");
    for (i = 0; i < dprice.length; i++) {
        dprice[i].style.display = "none";
    }
    let dessertprice=document.getElementsByClassName("deserrtprice");
    for (i = 0; i < dessertprice.length; i++) {
        dessertprice[i].style.display = "none";
    }
})
drinkn.addEventListener('click',()=>{
    drin.classList.add("block");
    drin.classList.remove("none");
    let i;
    let dprice=document.getElementsByClassName("dprice");
    for (i = 0; i < dprice.length; i++) {
        dprice[i].style.display = "block";
    }
    let dessertprice=document.getElementsByClassName("deserrtprice");
    for (i = 0; i < dessertprice.length; i++) {
        dessertprice[i].style.display = "none";
    }
    pizz.classList.add("none");
    pizz.classList.remove("block");
    desser.classList.add("none");
    desser.classList.remove("block");
})
dessertn.addEventListener('click',()=>{
    drin.classList.add("none");
    drin.classList.remove("block");
    let i;
    let dprice=document.getElementsByClassName("dprice");
    for (i = 0; i < dprice.length; i++) {
        dprice[i].style.display = "none";
    }
    let dessertprice=document.getElementsByClassName("deserrtprice");
    for (i = 0; i < dessertprice.length; i++) {
        dessertprice[i].style.display = "block";
    }
    pizz.classList.add("none");
    pizz.classList.remove("block");
    desser.classList.add("block");
    desser.classList.remove("none");
})