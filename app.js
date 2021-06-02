const changerTab = document.querySelectorAll("h4");
const tabS = document.querySelectorAll(".tab");
const faqs = document.querySelectorAll("li")
const switcher = document.querySelector(".switcher")
const hamburger = document.querySelector(".hamburger")
const cross = document.querySelector(".close")
const nav = document.querySelector("nav")
let pos = 0;

//TAB SYSTEM
changerTab.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("bottom-bar")) {
      return false;
    } else {
      item.classList.add("bottom-bar");
    }

    pos = item.getAttribute("data-nav");

    for (let i = 0; i < changerTab.length; i++) {
      if (changerTab[i].getAttribute("data-nav") != pos) {
        changerTab[i].classList.remove("bottom-bar");
      }
    }

    for (let j = 0; j < tabS.length; j++) {
      if (tabS[j].getAttribute("data-nav") == pos) {
        tabS[j].classList.add("tabActive");
      } else {
        tabS[j].classList.remove("tabActive");
      }
    }
  });
});

//FAQS SYSTEM
faqs.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active")
  })
})

//NAV MOBILE 

switcher.addEventListener("click", () => {
  if (hamburger.classList.contains("index")) {
    hamburger.classList.remove("index")
    cross.classList.add("index")
    nav.classList.remove('display')
  } else {
    hamburger.classList.add("index")
    cross.classList.remove("index")
    nav.classList.add('display')
  }
})