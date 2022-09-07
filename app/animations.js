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
