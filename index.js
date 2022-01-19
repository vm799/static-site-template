const btnHamburger = document.getElementById("btnHamburger")

const headerMenu= document.querySelector(".header")

const overlay=document.querySelector(".overlay")

btnHamburger.addEventListener("click", function(){
   if(headerMenu.classList.contains("open")){
   headerMenu.classList.remove("open")
   overlay.classList.remove("fade-in")
   overlay.classList.add("fade-out")
   }else {
       headerMenu.classList.add("open")
       overlay.classList.remove("fade-out")
       overlay.classList.add("fade-in")
       
   }
})