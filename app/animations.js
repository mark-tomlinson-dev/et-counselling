let imageItems = [...document.querySelectorAll('.intro__media')]
console.log(imageItems)

let textItems = [...document.querySelectorAll('.intro__text')]
console.log(textItems)

let titleItems = [...document.querySelectorAll('.intro__title')]



// When the element is 150px in the viewport, trigger the intersection obs callback
let options = {
  rootMargin: '-150px'
}

let setItemActive = (entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    }
  })
})

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, idx) => {
  observer.observe(item, idx)
})

textItems.forEach((item, idx) => {
  observer.observe(item, idx)
})

titleItems.forEach((item, idx) => {
  observer.observe(item, idx)
})
