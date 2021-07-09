export default class Animation extends Component {
  constructor ({ element}) {
    this.element = element
    
    this.createObserver()
  }

  createObserver() {
    this.observer = new IntersectionObserver(entry => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('animatein')
        } else {
          console.log('animateout')
        }
      })
    })
    this.observer.observe(this.element)
  }
}