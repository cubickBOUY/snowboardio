const popUpLinks = document.querySelectorAll('.pop-up-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')


let unlock = true;

const timeout = 500;

if (popUpLinks.length > 0) {
  popUpLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const popUpName = el.getAttribute('href').replace('#', '');
      const curentPopUp = document.getElementById(popUpName)
      popUpOpenFun(curentPopUp)
    })
  })
}

const popUpClose = document.querySelectorAll('.pop-up__close')
if (popUpClose.length > 0) {
  popUpClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      popUpCloseFun(el.closest('.pop-up'))
    })
  })
}


function popUpOpenFun(curentPopUp) {
  if (curentPopUp && unlock) {
    const popUpActive = document.querySelector('.pop-up._open');
    if (popUpActive) {
      popUpCloseFun(popUpActive, false)
    } else {
      bodyLock();
    }
    curentPopUp.classList.add('_open');
    curentPopUp.addEventListener('click', (e) => {
      if (!e.target.closest('.pop-up__content')) {
        popUpCloseFun(e.target.closest('.pop-up'))
      }
    })
  }
}

function popUpCloseFun(popUpActive, doUnlock = true) {
  if (unlock) {
    popUpActive.classList.remove('_open')
    if (doUnlock) {
      bodyUnLock()
    }
  }
}

function bodyLock() {
  const lockPaddingVal = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    lockPadding.forEach((el) => {
      el.style.paddingRight = lockPaddingVal
    })
  }
  body.style.paddingRight = lockPaddingVal

  body.classList.add('_lock')

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      lockPadding.forEach((el) => {
        el.style.paddingRight = '0px'
      })
    }
    body.style.paddingRight = '0px'
    body.classList.remove('_lock');
  }, timeout)

  unlock = false;
  setTimeout(function () {
    unlock = true
  }, timeout);
}

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const popUpActive = document.querySelector('.pop-up._open')
    popUpCloseFun(popUpActive)
  }
})