const menu_btn = document.querySelector("#menu");
const mobile_nav = document.querySelector(".mobile-nav");
const close_navbar_btn = document.querySelectorAll(".close_navbar_btn");
const back_icon = document.querySelectorAll(".nav_bar_head_text i");
const nav_bar_mobile = document.querySelector(".nav-bar_mobile");
const mobile_item_menu = document.querySelectorAll(".menu_item_link[id]");
const close_header = document.querySelector("#close_header");

const menu = document.querySelector("#menu_mobile");
const category = document.querySelector("#cate");
const menu_mobile = document.querySelector(".menu");
const category_mobile = document.querySelector(".cate");

console.log(menu);
menu.onclick = function () {
  if (!menu.classList.contains("active")) {
    category.classList.remove("active");
    menu.classList.add("active");
    menu_mobile.classList.toggle("mobile-item-close");
    menu_mobile.style.display = "block";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

category.onclick = function () {
  if (!category.classList.contains("active")) {
    menu.classList.remove("active");
    category.classList.add("active");
    menu_mobile.style.display = "none";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

close_header.onclick = (e) => {
  if (e.target.closest(".header_top")) {
    e.target.closest(".header_top").remove();
  }
};
Array.from(mobile_item_menu).forEach(function (item) {
  item.onclick = (e) => {
    let list_item = document.querySelector(`.${item.id}`);
    console.log(list_item);
    list_item.classList.add("go_in");
  };
});

Array.from(back_icon).forEach(function (back) {
  back.onclick = (e) => {
    let nav_bar = e.target.closest(".nav-bar_mobile");
    if (nav_bar) {
      nav_bar.classList.remove("go_in");
    }
  };
});

menu_btn.onclick = function (e) {
  mobile_nav.classList.add("layer");
  nav_bar_mobile.classList.add("go_in");
  document.body.style.overflow = "hidden";
};

Array.from(close_navbar_btn).forEach(function (btn) {
  btn.onclick = function (e) {
    const nav_bar_mobile = document.querySelectorAll(".nav-bar_mobile");
    Array.from(nav_bar_mobile).forEach(function (nav) {
      nav.classList.remove("go_in");
    });
    document.body.style.overflow = "";
    mobile_nav.classList.remove("layer");
  };
});

/* ======================================== 
   Countdouwn
   ====================================== */

function countDown() {
  var day = document.getElementById("day");
  var hour = document.getElementById("hour");
  var minute = document.getElementById("min");
  var second = document.getElementById("sec");

  var countDownDate = new Date("Oct 16, 2024 00:00:00").getTime();

  var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    day.innerHTML = days;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
    second.innerHTML = seconds;
  }, 1000);
}
countDown();

window.addEventListener("scroll", () => {});

/* ======================================== 
     End  Countdouwn
   ====================================== */

//------------------------------------------------------------------------------------------------------------------------------------------------------

/* ======================================== 
   Trending slider
   ====================================== */
const next_btn = document.querySelector(".next-btn");
const back_btn = document.querySelector(".back-btn");
const trending_list_product = document.querySelector(".trending_list_product");
const product = document.querySelector(".trending_list_product .row .col:first-child");
next_btn.onclick = (e) => {
  trending_list_product.style.scrollBehavior = "smooth";
  trending_list_product.scrollLeft += product.clientWidth;
  if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
    trending_list_product.scrollLeft =
      Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
        product.clientWidth +
      product.clientWidth;
  }
};

back_btn.onclick = (e) => {
  trending_list_product.style.scrollBehavior = "smooth";
  trending_list_product.scrollLeft -= product.clientWidth;
  if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
    trending_list_product.scrollLeft =
      Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
      product.clientWidth;
  }
};
/* ======================================== 
   END Trending slider
   ====================================== */
