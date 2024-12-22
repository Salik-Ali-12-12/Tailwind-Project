document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter-value');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const current = +counter.innerText;
      const increment = target / 150;  // You can adjust the speed here
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);  // Adjust the interval for smoother/faster transitions
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});


$(".owl-slider").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 50,

  autoplay: true,
  autoplayTimeout: 2000,
  slideTransition: "linear",
  autoplaySpeed: 2000,
  smartSpeed: 2000,
  center: true,

  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});