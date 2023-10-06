const prevEl = document.querySelector('#prev')
const nextEl = document.querySelector('#next')
const slidesEl = document.querySelector('#slides')
const allImages = document.querySelectorAll('#slides img')

let moveWidth = 0

const handleNextClick = (e) => {
  if (moveWidth === (allImages.length - 1) * 500) {
    moveWidth = 0
    slidesEl.style.translate = `-${moveWidth}px`
  } else {
    moveWidth += 500
    slidesEl.style.translate = `-${moveWidth}px`
  }
}

const handlePrevClick = (e) => {
  if (moveWidth === 0) {
    moveWidth = (allImages.length - 1) * 500
    slidesEl.style.translate = `-${moveWidth}px`
  } else {
    moveWidth -= 500
    slidesEl.style.translate = `-${moveWidth}px`
  }
}

nextEl.addEventListener('click', handleNextClick)
prevEl.addEventListener('click', handlePrevClick)
