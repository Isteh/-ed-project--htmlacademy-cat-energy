// меню мобайл

var pageHeader = document.querySelector('.page-header');
    var navToggle = document.querySelector('.page-header__toggler');

    pageHeader.classList.remove('page-header--nojs');

    navToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
      } else {
        pageHeader.classList.add('page-header--closed');
        pageHeader.classList.remove('page-header--opened');
      }
    });

// свитчер фотокарточек было\стало

    var switcherImgs = document.querySelector('.live-example__imgs');
    var switcherImgBefore = document.querySelector('.live-example__img--before');
    var switcherImgAfter = document.querySelector('.live-example__img--after');
    var switcherToggleBefore = document.querySelector('.range-toggle__button--before');
    var switcherToggleAfter = document.querySelector('.range-toggle__button--after');
    var switcherVisual = document.querySelector('.switcher');

    switcherImgs.classList.remove('live-example__imgs--nojs');

    switcherToggleBefore.addEventListener('click', function () {
      switcherImgAfter.classList.remove('live-example__img--current');
      switcherImgBefore.classList.add('live-example__img--current');
      switcherVisual.classList.remove('switcher--active');
    }
    );

    switcherToggleAfter.addEventListener('click', function () {
      switcherImgAfter.classList.add('live-example__img--current');
      switcherImgBefore.classList.remove('live-example__img--current');
      switcherVisual.classList.add('switcher--active');
    }
    );
