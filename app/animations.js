import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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


const timeline = gsap.timeline({scrollTrigger: {
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
