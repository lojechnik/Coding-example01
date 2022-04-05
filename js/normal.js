// window.onscroll = function showHeader(){
//     let header = document.querySelector(".header");
//     if(window.pageYOffset > 200){
//         header.classList.add('header-fixed');
//     }

// }
const headermenu = document.querySelector(".header-menu__ul");
const hamburger = document.querySelector(".hamburger");
const headitem = document.querySelectorAll(".header-menu__item");
hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  headermenu.classList.toggle("active");
})
document.querySelectorAll(".header-menu__item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  headermenu.classList.remove("active");
}))
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
    draggable.style.cursor = "url('https://raw.githubusercontent.com/mylifeisgame/Coding-example01/master/img/cursor.png'), auto";
  })
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})


containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      }
    } else {
      return closest
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element
}

// function barsFixed () {
//   var hamburger = document.querySelector(".hamburger");
//   window.scrollY > 1 ? hamburger.classList != 'hamburger fixed' : hamburger.classList.add('fixed');
// }
// window.addEventListener("scroll", barsFixed , false);