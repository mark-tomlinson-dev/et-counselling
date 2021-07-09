import GSAP from 'gsap'
import Prefix from 'prefix'
import each from 'lodash/each'

export default class Page {
  constructor ({
    element,
    elements,
    id
  }) {
    this.selector = element
    this.selectorChildren = {
      ...elements
    }

    this.id = id
    this.transformPrefix = Prefix('transform')
    
    this.scroll = {
      current: 0,
      target: 0,
      last: 0
    }

    this.onMouseWheelEvent = this.onMouseWheel.bind(this)

  }
  // going to behave like componentDidMount etc.
  create() {
    this.element = document.querySelector(this.selector)
    this.elements = {}
    
    this.scroll = {
      current: 0,
      target: 0,
      last: 0
    }
    

    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key]. length === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }
      console.log(this.elements[key], entry);
    })
  }

  show() {
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline()

      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      })

      this.animationIn.call(_ => {
        this.addEventListeners()

        resolve()
      })
    })
  }

  // hide() {
  //   GSAP.to(this.element, {
  //     autoAlpha: 0,
  //   })
  // }

  onMouseWheel(event) {
    const { deltaY } = event
    this.scroll.target +=deltaY
  }

  update() {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
    }
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onMouseWheelEvent)
  }

  removeEventListeners() {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent)
  }

}