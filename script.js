document.querySelector(".header__burger").onclick = () => {
    document.querySelector(".header__burger").classList.toggle("active")
    document.querySelector(".header__menu").classList.toggle("active")
    document.querySelector(".body").classList.toggle("active")
}

document.querySelectorAll(".nav__item").forEach((item) => { 
    item.onclick = () => {
        document.querySelector(".header__menu").classList.remove("active")
        document.querySelector(".header__burger").classList.remove("active")
        document.querySelector(".body").classList.remove("active")
    }
})

let minOffset = 50;
let header = document.querySelector("#header")
  window.onscroll = function() { 
    let has_class = header.classList.contains("is_scrolled");
 
    if (minOffset < document.documentElement.scrollTop ) {
      if (!has_class) {
          header.classList.add("is_scrolled");
      } 
    } else if (has_class) {
      header.classList.remove("is_scrolled")
 
    } 
  }