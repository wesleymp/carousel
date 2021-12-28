const carouselImages = document.querySelectorAll('.carousel-img img');
const carouselPagination = document.querySelector('.carousel-pagination');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const maxIndex = carouselImages.length;
const minIndex = 0;
const time = 2000;
let currentIndex = 0;
let busyScroll = false;

function prevImage() {
  busyScroll = true;
  const btnsPagination = document.querySelectorAll('.btn-pagination');
  carouselImages[currentIndex].classList.remove('selected');
  btnsPagination[currentIndex].classList.remove('btn-selected');

  currentIndex -= 1;

  if (currentIndex < 0) currentIndex = maxIndex - 1;

  carouselImages[currentIndex].classList.add('selected');
  btnsPagination[currentIndex].classList.add('btn-selected');
}

function nextImage() {
  busyScroll = true;
  const btnsPagination = document.querySelectorAll('.btn-pagination');

  carouselImages[currentIndex].classList.remove('selected');
  btnsPagination[currentIndex].classList.remove('btn-selected');

  currentIndex += 1;

  if (currentIndex > maxIndex - 1) currentIndex = minIndex;

  carouselImages[currentIndex].classList.add('selected');
  btnsPagination[currentIndex].classList.add('btn-selected');
}

function paginationButtons() {
  const button = document.createElement('button');
  button.classList.add('btn-pagination');
  carouselImages.forEach(() => carouselPagination.appendChild(button.cloneNode(true)));
}

function startCarousel() {
  paginationButtons();
  const btnsPagination = document.querySelectorAll('.btn-pagination');

  setInterval(() => {
    if (!busyScroll) {
      carouselImages[currentIndex].classList.remove('selected');
      btnsPagination[currentIndex].classList.remove('btn-selected');
      currentIndex += 1;

      if (currentIndex > maxIndex - 1) currentIndex = minIndex;
      carouselImages[currentIndex].classList.add('selected');
      btnsPagination[currentIndex].classList.add('btn-selected');

    } else {
      busyScroll = false;
    }
  }, time);
}

btnPrev.addEventListener('click', prevImage);
btnNext.addEventListener('click', nextImage);
window.addEventListener('load', startCarousel);