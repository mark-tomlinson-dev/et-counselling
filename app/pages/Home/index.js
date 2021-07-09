import Page from 'classes/Page'  

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',
      element: '.home',
      
      elements: {
        wrapper: '.home__wrapper',
        button: '.home__hero__button__link',
        title: '.home__hero__title'
      }
    })
  }

  create() {
    // super.create will build on create function in Page, rather than overriding it
    super.create()
  }

}