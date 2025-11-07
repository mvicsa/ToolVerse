(function ($) {
  "use strict";

  // Get Current Year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // AOS
  if ($("[data-aos]").length > 0) {
    function aosFunc () {
      AOS.init({
        once: true,
      });
    }

    window.addEventListener("load", aosFunc);
    window.addEventListener("scroll", aosFunc);
  }

  // Custom Title
  const customTitles = document.querySelectorAll(".custom-title");
  if (customTitles) {
    window.addEventListener("load", () => {
      customTitles.forEach((el) => {
        const wordsLength = el.textContent.trim().split(" ").length;
        let wordsArray = el.textContent.trim().split(" ");
        const lastWord = wordsArray[wordsLength - 1];
        wordsArray[wordsLength - 1] = `<span>${lastWord}</span>`;
        el.innerHTML = wordsArray.join(' ');
      });
    });
  }

  // Dropdown
  const dropdown = document.querySelectorAll('[data-dropdown]');
  if (dropdown) {
    dropdown.forEach(function (el) {
      let dropdownMenu = el.querySelector(".drop-down-menu");
      function dropdownOP() {
        dropdownMenu.style.top = "40px";
      }
      window.addEventListener("click", function (e) {
        if (el.contains(e.target)) {
          el.classList.toggle('active');
          setTimeout(function () {
            el.classList.toggle('animated');
          }, 0);
        } else {
          el.classList.remove('active');
          el.classList.remove('animated');
        }
        dropdownOP();
      });
    });
  }
  
  // Toggle
  var toggle = document.querySelectorAll('[data-toggle]');
  if (toggle) {
    toggle.forEach(function (el, id) {
      el.querySelector(".toggle-title").addEventListener("click", () => {
        for (var i = 0; i < toggle.length; i++) {
          if (i !== id) {
            toggle[i].classList.remove("active");
            toggle[i].classList.remove("animated");
          }
        }
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          el.classList.remove("animated");
        } else {
          el.classList.add("active");
          setTimeout(function () {
            el.classList.add("animated");
          }, 0);
        }
      });
    });
  }
  
  // Navbar
  let navbar = document.querySelector(".nav-bar");
  if (navbar) {
    let navbarOp = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolling");
      } else {
        navbar.classList.remove("scrolling");
      }
    };
    window.addEventListener("scroll", navbarOp);
    window.addEventListener("load", navbarOp);
  }

  // Navbar Menu
  let navbarMenu = document.querySelector(".nav-bar-menu"),
    navbarMenuBtn = document.querySelector(".nav-bar-menu-btn");
  if (navbarMenu) {
    let navbarMenuClose = navbarMenu.querySelector(".nav-bar-menu-close"),
      navbarMenuOverlay = navbarMenu.querySelector(".overlay"),
      navUploadBtn = document.querySelector(".nav-bar-menu [data-upload-btn]");
    navbarMenuBtn.onclick = () => {
      navbarMenu.classList.add("show");
      document.body.classList.add("overflow-hidden");
    };

    navbarMenuClose.onclick = navbarMenuOverlay.onclick = () => {
      navbarMenu.classList.remove("show");
      document.body.classList.remove("overflow-hidden");
    };
    if (navUploadBtn) {
      navUploadBtn.addEventListener("click", () => {
        navbarMenu.classList.remove("show");
      });
    }
  }

  // SwiperJS
  const  categoriesSwiper = document.querySelector(".categoriesSwiper");
  if (categoriesSwiper) {
    new Swiper(categoriesSwiper, {
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      },
      spaceBetween: 16,
      navigation: {
        nextEl: "#categoriesSwiperNext",
        prevEl: "#categoriesSwiperPrev",
      },
    });
  }

  // SwiperJS
  const swiperTestimonials = document.querySelector(".testimonials-swiper");
  if (swiperTestimonials) {
    new Swiper(swiperTestimonials, {
      spaceBetween: 16,
      navigation: {
      nextEl: "#testimonials-swiper-next",
      prevEl: "#testimonials-swiper-prev",
    },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // TabsSwiper
  const swiperTabs = document.querySelector(".tabs-swiper");
  if (swiperTabs) {
    var swiper = new Swiper(swiperTabs, {
      slidesPerView: 'auto'
    });
  }

  // Ratings
  const ratings = document.querySelectorAll(".ratings-selective");
  if (ratings) {
    ratings.forEach((el) => {
      const rating = el.querySelectorAll(".rating");
      rating.forEach((ratingEl, id) => {
        ratingEl.addEventListener("click", () => {
          ratingEl.querySelector("input[type=radio]").checked = true;
          rating.forEach((ratingActive, activeId) => {
            ratingActive.classList.remove("rating-active");
            if (id >= activeId) {
              ratingActive.classList.add("rating-active");
            }
          });
        });
      });
    });
  }

  // Cookies
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Announcement
  const announcement = document.querySelector(".announcement"),
    announcementClose = document.querySelector(".announcement-close");
  if (announcement) {
    announcementClose.addEventListener("click", () => {
      announcement.remove();
      setCookie("announcement", true, 1);
      document.body.classList.remove("pt-0");
    });

    if (getCookie("announcement") === "true") {
      announcement.remove();
      document.body.classList.remove("pt-0");
    } else {
      document.body.classList.add("pt-0");
    }
  }

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Auto Size
  const autoSize = document.querySelectorAll('[auto-size]');
  if (autoSize.length > 0) {
    autosize(autoSize);
  }

  // Clipboardjs
  const copyBtn = document.querySelectorAll(".btn-copy");
  if (copyBtn.length > 0) {
    const clipboard = new ClipboardJS(copyBtn);
    clipboard.on("success", () => {
      console.log("Success");
    });
  }

  // Plyr
  const plyr = document.querySelectorAll(".video-plyr");
  if (plyr.length > 0) {
    plyr.forEach((el) => {
      new Plyr(el);
    });
  }

  // Filter
  const searchFilter = document.querySelector(".search-filter"),
          filterBtn = document.querySelector(".filter-btn"),
          filterBtnClose = document.querySelector(".filter-btn-close");

  if (searchFilter) {
    filterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchFilter.classList.toggle("show");
    });

    filterBtnClose.addEventListener("click", () => {
      searchFilter.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".search-filter")) {
        searchFilter.classList.remove("show");
      }
    });
  }

  // Dashboard
  const dashboard = document.querySelector(".dashboard"),
    dashboardToggleBtn = document.querySelectorAll(".dashboard-toggle-btn");
  if (dashboard) {
    dashboardToggleBtn.forEach((el) => {
      el.addEventListener("click", () => {
        dashboard.classList.toggle("toggle");
      });
    });
    dashboard.querySelector(".dashboard-sidebar .overlay").addEventListener("click", () => {
      dashboard.classList.remove("toggle");
    });
  }

  // CK Editor
  const editor = document.querySelector('#editor');
  if (editor) {
    ClassicEditor
      .create(editor)
        .catch(error => {
          console.error(error);
        });
  }
})(jQuery);
