// js/load.js

// ---------------------------
// ✅ Load Header & Footer
// ---------------------------
$(function () {
  $("#header").load("partials/header.html", function (response, status, xhr) {
    if (status == "error") {
      console.log("Header load failed: " + xhr.status + " " + xhr.statusText);
    }
  });

  $("#footer").load("partials/footer.html", function (response, status, xhr) {
    if (status == "error") {
      console.log("Footer load failed: " + xhr.status + " " + xhr.statusText);
    }
  });
});

// ---------------------------
// ✅ Tab Button Functionality (Generic)
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  if (tabs.length && contents.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add("active");
      });
    });
  }
});

// ---------------------------
// ✅ Swiper Initialization (Single Instance)
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
});

// ---------------------------
// ✅ Courses Tab Data (JEE / PRE / NEET)
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const courseData = {
    jee: [
      { img: "../Images/1.jpg", title: "Bansal Classes for JEE XI", badge: "Batch: Offline | Class: JEE 11th" },
      { img: "../Images/3.jpg", title: "Bansal Classes for JEE XII (Dropper)", badge: "Batch: Offline | Class: JEE 12th (Dropper)" },
      { img: "../Images/2.jpg", title: "Bansal Classes for JEE XII", badge: "Batch: Offline | Class: JEE 12th" },
    ],
    pre: [
      { img: "../Images/4.jpg", title: "Pre Foundation Class VIII", badge: "Batch: Offline | Class: 8th" },
      { img: "../Images/5.jpg", title: "Pre Foundation Class IX", badge: "Batch: Offline | Class: 9th" },
      { img: "../Images/6.jpg", title: "Pre Foundation Class X", badge: "Batch: Offline | Class: 10th" },
    ],
    neet: [
      { img: "../Images/7.jpg", title: "Bansal Classes for NEET XI", badge: "Batch: Offline | Class: 11th" },
      { img: "../Images/9.jpg", title: "Bansal Classes for NEET XII (Dropper)", badge: "Batch: Offline | Class: 12th (Dropper)" },
      { img: "../Images/8.jpg", title: "Bansal Classes for NEET XII", badge: "Batch: Offline | Class: 12th" },
    ],
  };

  const courseTabs = document.querySelectorAll(".tab");
  const courseContainer = document.getElementById("cardsContainer");

  if (courseTabs.length && courseContainer) {
    const renderCards = (tab) => {
      courseContainer.innerHTML = courseData[tab]
        .map(
          (card) => `
        <div class="card">
          <img src="${card.img}" alt="${card.title}">
          <div class="card-body">
            <div class="badge">${card.badge}</div>
            <div class="card-title">${card.title}</div>
            <a href="jeexI.html" class="view-btn">View Details</a>
          </div>
        </div>`
        )
        .join("");
    };

    courseTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelector(".tab.active")?.classList.remove("active");
        tab.classList.add("active");
        renderCards(tab.dataset.tab);
      });
    });

    renderCards("jee"); // Default
  }
});

// ---------------------------
// ✅ Gallery Tabs
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const data = {
    All: [
      { img: "../Images/all1.jpg" },
      { img: "../Images/all2.jpg" },
      { img: "../Images/all3.jpg" },
      { img: "../Images/all4.jpg" },
      { img: "../Images/all5.jpg" },
      { img: "../Images/topper1.jpg" },
      { img: "../Images/topper2.jpg" },
      { img: "../Images/topper3.jpg" },
      { img: "../Images/topper4.jpg" },
    ],
    Classroom: [
      { img: "../Images/4.jpg" },
      { img: "../Images/5.jpg" },
      { img: "../Images/6.jpg" },
    ],
    Toppers: [
      { img: "../Images/topper1.jpg" },
      { img: "../Images/topper2.jpg" },
      { img: "../Images/topper3.jpg" },
      { img: "../Images/topper4.jpg" },
    ],
    Events: [
      { img: "../Images/7.jpg" },
      { img: "../Images/9.jpg" },
      { img: "../Images/8.jpg" },
    ],
  };

  const tabs = document.querySelectorAll(".tab");
  const container = document.getElementById("cardsContainer");

  if (tabs.length && container) {
    const renderCards = (tab) => {
      container.innerHTML = data[tab]
        .map(
          (card) => `
        <div class="gallery-card">
          <img src="${card.img}" alt="Gallery Image">
        </div>`
        )
        .join("");
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelector(".tab.active")?.classList.remove("active");
        tab.classList.add("active");
        renderCards(tab.dataset.tab);
      });
    });

    renderCards("All"); // Default
  }
});

// ---------------------------
// ✅ Journey Call Button
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const callButton = document.getElementById("journeyCallButton");
  if (callButton) {
    callButton.addEventListener("click", (e) => {
      e.preventDefault();
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = "tel:+919270300215";
      } else {
        window.location.href = "contact.html";
      }
    });
  }
});

// ---------------------------
// ✅ FAQ Toggle
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".course-faq-item");
  if (faqItems.length) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".course-faq-question");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove("active");
        });
      });
    });
  }
});

// ---------------------------
// ✅ Contact Form Submission
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("thankPopup");
  const closeBtn = document.getElementById("closePopup");

  if (form && popup && closeBtn) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then(() => {
          popup.style.display = "flex";
          form.reset();
        })
        .catch(() => alert("Something went wrong. Please try again!"));
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
