const prevEl = document.querySelector('#prev')
const nextEl = document.querySelector('#next')
const slidesEl = document.querySelector('#slides')
const navEl = document.querySelector('.nav')
const allImages = document.querySelectorAll('#slides img')

let moveWidth = 0

const updateNav = () => {
  const allNavBtnElsArr = Array.from(document.querySelectorAll('.nav button'))
  allNavBtnElsArr.forEach((button) => button.classList.remove('active'))
  allNavBtnElsArr[moveWidth / 500].classList.add('active')
}

const handleNextClick = () => {
  if (moveWidth === (allImages.length - 1) * 500) {
    moveWidth = 0
    slidesEl.style.translate = `-${moveWidth}px`
  } else {
    moveWidth += 500
    slidesEl.style.translate = `-${moveWidth}px`
  }
  updateNav()
}

const handlePrevClick = () => {
  if (moveWidth === 0) {
    moveWidth = (allImages.length - 1) * 500
    slidesEl.style.translate = `-${moveWidth}px`
  } else {
    moveWidth -= 500
    slidesEl.style.translate = `-${moveWidth}px`
  }
  updateNav()
}

const handleNavBtnClick = (e) => {
  const index = Array.from(navEl.children).indexOf(e.currentTarget)
  moveWidth = index * 500
  slidesEl.style.translate = `-${moveWidth}px`
  updateNav()
}

nextEl.addEventListener('click', handleNextClick)
prevEl.addEventListener('click', handlePrevClick)

Array.from(allImages).forEach((image) => {
  const button = document.createElement('button')
  navEl.appendChild(button)
  button.addEventListener('click', handleNavBtnClick)
})

updateNav()

const handleInterval = () => {
  handleNextClick()
}

setInterval(handleInterval, 5000)
