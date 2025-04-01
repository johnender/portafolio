
/* code for the pagination (for the card at the center) */

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 5,
        centeredSlides: true,
      
        autoplay: {
            delay: 2000,
        },
        //card size = 395 px
        breakpoints: {
            // when window width is >= 830px
            800: {
                slidesPerView: 2,
            },
            // when window width is >= 1225px
            1140: {
                slidesPerView: 3,
            },
            // when window width is >= 1620px
            1900: {
                slidesPerView: 5,
            },
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        /* scrollbar: {
          el: '.swiper-scrollbar',
        }, */
      });

  /* const cards = document.querySelectorAll(".projects-container--card");
  const dots = document.querySelectorAll(".pagination a");

  const observerOptions = {
      root: document.querySelector(".projects-container--slider"), // The scrolling container
      rootMargin: "0px",
      threshold: [0.75, 0.9] // 50% and 90% visibility triggers
  };

  const observer = new IntersectionObserver((entries) => {
      let mostVisibleCard = null;
      let maxIntersection = 0;

      entries.forEach(entry => {
          if (entry.intersectionRatio > maxIntersection) {
              maxIntersection = entry.intersectionRatio;
              mostVisibleCard = entry.target;
          }
      });
      if (mostVisibleCard) {
          // Get index of the most visible card
          const index = Array.from(cards).indexOf(mostVisibleCard);

          // Remove "active" class from all dots
          dots.forEach(dot => dot.classList.remove("active"));

          // Add "active" class to the corresponding dot
          if (dots[index]) {
              dots[index].classList.add("active");
          }
      }
  }, observerOptions);

  // Observe all cards
  cards.forEach(card => observer.observe(card)); */
});

