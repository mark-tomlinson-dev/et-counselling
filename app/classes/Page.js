export default class Page {
  constructor ({
    element,
    elements,
    id
  }) {
    this.selector = element
    this.selectorChildren = elements

    this.id = id
  }
  // going to behave like componentDidMount etc.
  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}
    console.log('Create', this.id, this.element)
  }
}