let tabsTriggers = document.querySelectorAll('.tabs__triggers-item')
let tabsConteiner = document.querySelectorAll('.tabs__content-item')

tabsTriggers.forEach((item) =>
{
  item.addEventListener('click',(e) =>{
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '')

    tabsTriggers.forEach((child) => child.classList.remove('_active')
    );
    tabsConteiner.forEach((child) => child.classList.remove('_active')
    );

    item.classList.add('_active')
    document.getElementById(id).classList.add('_active')
  })
}
);
