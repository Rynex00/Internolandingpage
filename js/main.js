const navTriggerBtn =document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');


// event listener

navTriggerBtn.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-is-open');
})


//swiper

const swiper = new Swiper ('.swiper',{
    loop: true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    //breckpoints
    slidesPerView:3,
    spaceBetween:20,
    breakpoints:{
        320:{
            slidesPerView: 1
        },
        960:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 3
        },
    },
});


// number counting

let section_counter = document.querySelector('.section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 50;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);



// scroll reveal animation

const sr = ScrollReveal({
  origin:'bottom',
  distance:'60px',
  duration:3000,
  delay:600,
});

//hero

sr.reveal('.hero__text',{origin:'top'});

// steps
sr.reveal('.steps__step',{distance:'100px',interval:100});

// about
sr.reveal('.about__text',{origin:'left'});
sr.reveal('.about__img ',{origin:'right',delay:800});

// testimonial
sr.reveal('.testimonial__bg',{delay:800});
sr.reveal('.testtimonial__taitel');
sr.reveal('.testimonial__slider',{delay:1000});

// brands__img
sr.reveal('.brands__img',{delay:600,distance:'100px',interval:100});

//worrk
sr.reveal('.work__titel');
sr.reveal('.work__subtitel',{delay:800});
sr.reveal('.work__grid',{delay:1000});

// section_counter
sr.reveal('.section_counter');
sr.reveal('.counter-item',{distance:'100px',interval:100});

// news
sr.reveal('.news__titel');
sr.reveal('.news__subtitel',{delay:800});
sr.reveal('.news__item',{distance:'100px',interval:100,delay:1000});

// contact__container
sr.reveal('.contact__container');
sr.reveal('.contact__text',{delay:800});

// footer__item
sr.reveal('.footer__item',{distance:'100px',interval:100});
sr.reveal('.footer__copyright');





