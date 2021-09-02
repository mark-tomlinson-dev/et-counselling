import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".intro__text-content-title, .intro__text-content-text *, .text, .title")
ScrollTrigger.matchMedia({

  "(max-width: 767px)": function() {
    gsap.to(".intro__text-content-text", {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: '.intro__text-content-text',
        start: 'top 80%',
        end: 'bottom 75%',
        scrub: true,
      }
    })

    gsap.to('.intro__text-content-title', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.intro__text-content-text',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true
      }
    })

    gsap.to('.intro__text-content-text *', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.intro__text-content-text',
        start: 'top 40%',
        end: 'bottom 65%',
        scrub: true
      }
    })
    gsap.timeline({scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "+=400",
      toggleActions: "restart none none reverse",
      scrub: 0.5,
      ease: "sine.out",
    }})
    
    .to(".montage-adoption-image", {
      y: -30,
      opacity: 1
    })
    .to(".montage-intro-image", {
      y: -60,
      opacity: 1
    }, 0)
    .to(".montage-about-image", {
      y: -120,
      opacity: 1
    }, 0)
    .to(".montage__orange__ribbon", {
      opacity: 1
    }, 0.2)
  }
})













// let isLoadingAnimationEnd = false;

// const maskAnimation = () => {
//   const tl = gsap.timeline();
//   const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
//   const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
//   gsap.set(".mask", { autoAlpha: 1 });
//   tl.to(".path", {
//     duration: 0.8,
//     attr: { d: start },
//     ease: "power2.in"
//   }).to(".path", { duration: 0.4, attr: { d: end }, ease: "power2.out" });

//   return tl;
// };

// const entranceAnimation = () => {
//   const tl = gsap.timeline();
//   tl.add(maskAnimation())
//     .add(loadingAnimationOut(), 0.2)
//     .to(
//       "#main-content",
//       {
//         opacity: 1,
//         duration: 0.3
//       },
//       0.8
//     )
//     .from(
//       "#main-content",
//       {
//         duration: 3,
//         opacity: 0,
//         stagger: 0.2,
//         ease: "power2.out"
//       },
//       0.8
//     );
// };

// const loadingAnimationOut = () => {
//   const tl = gsap.timeline();
//   tl.to(".splash-title", {
//     y: -window.innerHeight,
//     duration: 1.3,
//     ease: "power2.inOut",
//     opacity: 0
//   });

//   return tl;
// };

// const loadingAnimation = () => {
//   const tl = gsap
//     .timeline({
//       onComplete: () => {
//         isLoadingAnimationEnd = true;
//         entranceAnimation();
//       }
//     })
//     tl.from(
//       ".splash-title",
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out"
//       },
//       0.5
//     );
// };

// loadingAnimation();
// if (isLoadingAnimationEnd) entranceAnimation();





// let imageItems = [...document.querySelectorAll('.intro__media')]
// console.log(imageItems)

// let textItems = [...document.querySelectorAll('.intro__text')]
// console.log(textItems)

// let titleItems = [...document.querySelectorAll('.intro__title')]

// let introTitle = document.querySelector('.intro__text-content-text')
// let introText = document.querySelector('.intro')


// When the element is 150px in the viewport, trigger the intersection obs callback
// let options = {
//   rootMargin: '-200px'
// }

// let setItemActive = (entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active')
//     }
//   })
// })

// let observer = new IntersectionObserver(setItemActive, options);

// observer.observe(introTitle)


// imageItems.forEach((item, idx) => {
//   observer.observe(item, idx)
// })

// textItems.forEach((item, idx) => {
//   observer.observe(item, idx)
// })

// titleItems.forEach((item, idx) => {
//   observer.observe(item, idx)
// })
