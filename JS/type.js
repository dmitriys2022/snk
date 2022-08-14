



$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active1');
      $('.header__background').toggleClass('active2');
      $('body').toggleClass('lock');

      $('.header__background').click(function (event) {
         $('.header__burger, .header__menu').removeClass('active1');
         $('.header__background').removeClass('active2');
         $('body').removeClass('lock');
      });

      $('.header__link').click(function (event) {
         $('.header__burger, .header__menu').removeClass('active1');
         $('.header__background').removeClass('active2');
      });

   });
});



const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   })
}

function onMenuLinkClick(e) {

   const menuLink = e.target;

   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight + 650;

      window.scrollTo({
         top: gotoBlockValue,
         behavior: "smooth",
      });
   }
}


let footScr = document.querySelector('.footer__img');

footScr.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
})


let galImg = document.querySelectorAll('.gallery__image');

let stopScroll = document.body;
const screenWidth = window.screen.width;


galImg.forEach(galleryImage => {
   if (screenWidth > 1310) {
      galleryImage.addEventListener('click', () => {
         galleryImage.classList.toggle('big');

         let big = document.querySelector('.big');

         if (big) {
            let div = document.createElement('div');
            div.setAttribute('class', 'closeImage');
            div.innerHTML = '✖';
            galleryImage.appendChild(div);
            stopScroll.style.overflow = "hidden";
         }
         else {
            stopScroll.style.overflow = "scroll";
            removClose();
         }
      })
   }

})




function removClose() {
   document.querySelector('.closeImage').remove();
}





