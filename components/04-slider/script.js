function slider() {
  const slides = document.querySelector('.slides');
  const imgs = document.querySelectorAll('.img');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const dotsContainer = document.querySelector('.dots-container');
  const numberOfSlides = slides.childElementCount;
  let dots;
  let current;

  function goToLeft() {
    current = current === 1 ? numberOfSlides : current - 1;
    goToSlide(current);
    createDots(current);
  }

  function goToRight() {
    current = current === numberOfSlides ? 1 : current + 1;
    goToSlide(current);
    createDots(current);
  }

  function goToSlide(n) {
    imgs.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i + 1) - 100 * n}%)`;
    });
  }

  function createDots(n) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < numberOfSlides; i++) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `
        <div class="dot">
          <i class="${i + 1 === n ? 'fas' : 'far'} fa-circle"></i>
        </div>
        `
      );
    }
    dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) =>
      dot.addEventListener('click', () => clickDot(i + 1))
    );
  }

  function clickDot(n) {
    goToSlide(n);
    createDots(n);
  }

  function init() {
    current = 1;
    goToSlide(current);
    createDots(current);
  }

  init();
  btnLeft.addEventListener('click', goToLeft);
  btnRight.addEventListener('click', goToRight);
}

slider();
