import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Title extends Animation {

}

animateIn() {
  GSAP.fromTo(this.element, {
    autoAlpha: 0
  })
}
