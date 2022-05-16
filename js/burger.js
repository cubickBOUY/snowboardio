const burger = document.querySelector('.burger')

if (burger) {
  const headerNav = document.querySelector('.header__nav')
  const html = document.querySelector('html')
  burger.addEventListener("click", function (e) {
    burger.classList.toggle('_active');
    headerNav.classList.toggle('_active');
    html.classList.toggle('_active')
  })
}