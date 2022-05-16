
document.querySelectorAll('.spoiler__but').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling

    //accordion
    if(document.querySelector('.spoiler').classList.contains('one')){
      if (content.style.maxHeight && el.classList.contains('_open')) {
        document.querySelectorAll('.spoiler__text').forEach((el) => {el.style.maxHeight = null})
        el.classList.remove('_open')
      } else
      {
        document.querySelectorAll('.spoiler__text').forEach((el) => {el.style.maxHeight = null})
        content.style.maxHeight = content.scrollHeight + 'px'
        document.querySelectorAll('.spoiler__but').forEach((child) => {
          child.classList.remove('_open')
        })
        el.classList.toggle('_open')
      }
    }
    //spoiler
    else
    {
      el.classList.toggle('_open')
    }
  })
})

