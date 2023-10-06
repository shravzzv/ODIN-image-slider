const prevEl = document.querySelector('#prev')
const nextEl = document.querySelector('#next')
const slidesEl = document.querySelector('#slides')
const allImages = document.querySelectorAll('#slides img')

let moveWidth = 0

const handleNextClick = (e) => {
  moveWidth += 500
  slidesEl.style.translate = `-${moveWidth}px`
  controlButtons()
}

const handlePrevClick = (e) => {
  moveWidth -= 500
  slidesEl.style.translate = `-${moveWidth}px`
  controlButtons()
}

const controlButtons = () => {
  if (moveWidth === 0) {
    prevEl.setAttribute('disabled', true)
  } else {
    prevEl.removeAttribute('disabled')
  }

  if (moveWidth === (allImages.length - 1) * 500) {
    nextEl.setAttribute('disabled', true)
  } else {
    nextEl.removeAttribute('disabled')
  }
}

controlButtons()

nextEl.addEventListener('click', handleNextClick)
prevEl.addEventListener('click', handlePrevClick)
