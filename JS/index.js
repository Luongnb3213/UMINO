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
const next_btns = document.querySelectorAll(".next-btn");
const back_btns = document.querySelectorAll(".back-btn");

Array.from(next_btns).forEach((next_btn) => {
  next_btn.onclick = (e) => {
    let parentElement = next_btn.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".trending_list_product"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".row .col:first-child"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft += product.clientWidth;
      if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
        trending_list_product.scrollLeft =
          Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
            product.clientWidth +
          product.clientWidth;
      }
    }
  };
});
Array.from(back_btns).forEach((back_btn) => {
  back_btn.onclick = (e) => {
    let parentElement = back_btn.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".trending_list_product"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".row .col:first-child"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft -= product.clientWidth;
      if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
        trending_list_product.scrollLeft =
          Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
          product.clientWidth;
      }
      console.log(trending_list_product.scrollLeft);
    }
  };
});

const next_btns_mobile = document.querySelectorAll(".mobile_button .next-btn");
const back_btns_mobile = document.querySelectorAll(".mobile_button .back-btn");

Array.from(next_btns_mobile).forEach((next_btn) => {
  next_btn.onclick = (e) => {
    let parentElement = next_btn.parentElement.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".trending_list_product"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".row .col:first-child"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft += product.clientWidth;
      if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
        trending_list_product.scrollLeft =
          Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
            product.clientWidth +
          product.clientWidth;
      }
    }
  };
});
Array.from(back_btns_mobile).forEach((back_btn) => {
  back_btn.onclick = (e) => {
    let parentElement = back_btn.parentElement.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".trending_list_product"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".row .col:first-child"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft -= product.clientWidth;
      if (trending_list_product.scrollLeft % product.clientWidth !== 0) {
        trending_list_product.scrollLeft =
          Math.floor(trending_list_product.scrollLeft / product.clientWidth) *
          product.clientWidth;
      }
      console.log(trending_list_product.scrollLeft);
    }
  };
});

/* ======================================== 
   END Trending slider
   ====================================== */

/* ======================================== 
  Hover image
   ====================================== */
const hover_images = document.querySelectorAll(".green");

Array.from(hover_images).forEach((h) => {
  h.onmouseover = function (e) {
    let parentElement = e.target.closest(".col");
    let image_change = parentElement.querySelector(
      ".trending_product_image img:nth-child(1)"
    );
    let hover_button = parentElement.querySelectorAll(".green");
    Array.from(hover_button).forEach((i) => {
      i.classList.remove("active");
    });
    this.classList.add("active");
    image_change.src = this.dataset.img;
  };
});

/* ======================================== 
   END Hover image
   ====================================== */

const footer_icon = document.querySelectorAll(".open-children-toogle");

footer_icon.forEach((i) => {
  i.onclick = function () {
    let parentElement = i.parentElement.parentElement;
    let footer_list = parentElement.querySelector(".footer_list");
    // window.getComputedStyle để lấy giá trị của thuộc tính từ kiểu đã tính
    //  (computed style) thay vì từ thuộc tính trực tiếp được thiết lập trong
    //  style attribute.
    // Ví dụ: ở trên nếu sử dụng  footer_list.style.maxHeight thì sẽ ra là = "" nên cần sử dụng  window.getComputedStyle để nó lấy luôn giá trị đã tính
    let computedStyle = window.getComputedStyle(footer_list);

    footer_list.style.maxHeight =
      computedStyle.maxHeight === "0px" ? footer_list.scrollHeight + "px" : "0";
    footer_list.classList.toggle("footer-list-padding");
    this.classList.toggle("rotate");
  };
});

var check = true;
window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.clientHeight;
  const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
  const back_top = document.querySelector(".back-top");

  const scrollYValue = window.scrollY;
  if (scrollYValue > 100) {
    if (check) {
      back_top.classList.add("back-top_show");
      back_top.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      check = false;
    }
  } else {
    if (!check) {
      back_top.classList.remove("back-top_show");
      check = true;
    }
  }

  const percentage = ((scrollYValue / maxScrollHeight) * 100).toFixed(0);

  const test = document.querySelector(".bls_back-top");

  test.style.height = `${percentage}%`;

  // let header_top_list = document.querySelector(".header-top-list");
  // let computedStyle = window.getComputedStyle(header_top_list);
  // header.classList.toggle("sticky", this.window.scrollY > header.clientHeight);
  // // header_top_list.clientHeight
  // header_top_list.classList.toggle("d-none", this.window.scrollY > header.clientHeight);
});
