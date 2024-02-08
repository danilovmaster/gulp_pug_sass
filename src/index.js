"use strict"
function allFunction() {
  const windowWidth = document.documentElement.clientWidth,
    buttonPopup = document.querySelector('header button'),
    popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup__close'),
    star_span = document.querySelector('.grade__stars span'),
    star_img = Array.from(document.querySelectorAll('.grade__stars img')),
    bill_img = document.querySelector('.bill img'),
    header_nav = document.querySelector('.header__nav'),
    burger = document.querySelector('.header__mobile');

  buttonPopup.addEventListener('click', ()=>{
    popup.classList.add('visible')
  })
  popupClose.addEventListener('click', ()=> {
    popup.classList.remove('visible')
  })

  for (let st of star_img){
    st.addEventListener('click', ()=> {
      let index = star_img.indexOf(st);
      star_span.textContent = index + 1;
      for (let s of star_img){
        if (index < star_img.indexOf(s)){
          s.src = 'images/svg/star_grey.svg';
        } else {
          s.src = 'images/svg/star.svg';
        }
      }
    })
  }
  if (windowWidth < 756){
    bill_img.src = '/public/images/bill_small.webp';
    burger.addEventListener('click', function (){
      header_nav.classList.toggle('visible');
      this.classList.toggle('close');
    });
    const swiperRelatedWrapper = document.querySelector('.related_post .container .grid'),
      relatedPostsH2 = document.querySelector('.related_post h2'),
      swiperRelated = document.createElement('div'),
      swiperRelatedPagination = document.createElement('div'),
      swiperRelatedSlider = swiperRelatedWrapper.querySelectorAll('div');
    swiperRelated.className ='swiper';
    swiperRelatedWrapper.className ='swiper-wrapper';
    swiperRelatedSlider.className ='swiper-slider';
    swiperRelatedPagination.className ='swiper-pagination';
    relatedPostsH2.after(swiperRelated);
    swiperRelated.append(swiperRelatedWrapper);
    swiperRelated.append(swiperRelatedPagination);
    function* genSlide(){
      for (let i = 0; i <= 2; i++){
        yield swiperRelatedSlider;
      }
    }
    for (let s of swiperRelatedSlider) {
      swiperRelatedWrapper.append(s);
      s.className = 'swiper-slide'
    }
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },

    });
  }
}

window.onload = allFunction;