function runPorftolio() {

  const homeButton = document.querySelector('.navButton1')
  const aboutButton = document.querySelector('.navButton2')
  const skillButton = document.querySelector('.navButton3')
  const projectButton = document.querySelector('.navButton4')
  const contactButton = document.querySelector('.navButton5')

  const home = document.getElementById('home')
  const about = document.getElementById('about')
  const skills = document.getElementById('skills')
  const projects = document.getElementById('projects')
  const contact = document.getElementById('contact')

  function addStyles(button) {
    return `${button.style.boxShadow = 'none'}`,
    setTimeout(() => {
      `${button.style.boxShadow = '6px 10px 7px rgba(20, 20, 20, 0.582)'}`
    }, 500)
  }
  
  homeButton.addEventListener('click', () => {
    home.scrollIntoView({ behavior: 'smooth' })
    addStyles(homeButton)
  })

  aboutButton.addEventListener('click', () => {
    about.scrollIntoView({ behavior: 'smooth' })
    addStyles(aboutButton)
  })

  skillButton.addEventListener('click', () => {
    skills.scrollIntoView({ behavior: 'smooth' })
    addStyles(skillButton)
  })

  projectButton.addEventListener('click', () => {
    projects.scrollIntoView({ behavior: 'smooth' })
    addStyles(projectButton)
  })

  contactButton.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth' })
    addStyles(contactButton)
  })


  const skillIcons = document.getElementsByClassName('skillIcon')

  Array.from(skillIcons).forEach(function (icon) {
    icon.addEventListener('mouseover', () => {
      // icon.style.backgroundColor = 'rgba(72, 72, 88, 0.72)'
      icon.style.backgroundColor = 'rgba(7, 7, 14, 0.35)'
      icon.children[1].innerHTML = icon.id
    })
  })

  Array.from(skillIcons).forEach(function (icon) {
    icon.addEventListener('mouseout', () => {
      icon.style.backgroundColor = 'rgba(189, 189, 224, 0)'
      icon.children[1].innerHTML = ''
    })
  })

  const imgLink = document.getElementsByClassName('imgLink')
  const linkText = document.getElementsByClassName('linkText')
  const linkArray = []


  Array.from(imgLink).forEach(function (icon) {
    linkArray.push(icon)
  })

  // function fullArray() {
  linkArray.forEach((item) => {
    const position = linkArray.indexOf(item)
    item.addEventListener('mouseover', () => {
      linkText[position].style.display = 'block'
      // linkText[position].style.marginLeft = '20px'
      linkText[position].style.animation = 'links 1s normal'
      // linkText[position].style.animation = 'links 1s normal'
      // setTimeout(() => {
      //   linkText[position].style.animation = ' linksOut 1s normal forwards'
      //   // linkText[position].style.display = 'none'
      //   // setTimeout(() => {
      //   //   linkText[position].style.display = 'none'
      // }, 3000)
      //   console.log('bye')
      // }, 2000)
    })
  })

  // linkArray.forEach((item) => {
  //   const position = linkArray.indexOf(item)
  //   item.addEventListener('mouseout', () => {
  //     // setTimeout(() => {
  //     // linkText[position].style.display = 'block'
  //     linkText[position].style.animation = 'linksOut 1s normal forwards'
  //     // setTimeout(() => {
  //     //   linkText[position].style.display = 'none'
  //     //   // linkText[position].style.animation = 'none'
  //     // }, 1000)
  //     console.log('bye')
  //     // }, 2000)
  //   })
  // })

  // ---------------------Scroll Events ------------------------------

  const skill = document.querySelectorAll('.skillIcon')
  // const interests = document.getElementsByClassName(interests)

  var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) }

  var elementsToShow = document.querySelectorAll('.show-on-scroll')
  // var elementsToShow2 = document.querySelectorAll('.show-on-scroll-right')

  let time = 300
  let complete = true

  function loop1() {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        if (element.className.includes('leftScroll')) {
          setTimeout(() => {
            element.classList.add('is-visible-left')
          }, 0)
        } else if (element.className.includes('rightScrollSlow') && screen.width > 500) {
          setTimeout(() => {
            element.classList.add('is-visible-right')
          }, 750)
        } else if (element.className.includes('rightScroll')) {
          element.classList.add('is-visible-right')
        } else if (element.className.includes('fadeIn')) {
          element.classList.add('fade-in')
        }
        if (element.className.includes('skills')) {
          if (complete) {
            for (let i = 0; i < element.children.length; i++) {
              setTimeout(() => {
                element.children[i].classList.add('drop-in')
              }, time)
              time += 400
            }
            complete = false
          }
        }
      } else {
        // element.classList.remove('is-visible-left')
        // element.classList.remove('is-visible-right')
        element.classList.remove('fade-in')
      }
    })
    scroll(loop1)
  }

  loop1()

  // function loop2() {
  //   elementsToShow2.forEach(function (element) {
  //     if (isElementInViewport(element)) {
  //       setTimeout(() => {
  //         element.classList.add('is-visible-right')
  //       }, 500)
  //     } else {
  //       element.classList.remove('is-visible-right')
  //     }
  //   })
  //   scroll(loop2)
  // }

  // loop2()

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
  }


  // ------ Slides -------

  let slideIndex = 1
  showSlides(slideIndex)

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n)
  }

  function showSlides(n) {
    let i = 0
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('dot')
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'flex'
    dots[slideIndex - 1].className += ' active'

  }

  function buttons() {
    const dots = document.getElementsByClassName('dot')
    const array = [...dots]
    array.forEach((e, i) => {
      e.addEventListener('click', () => {
        currentSlide(i + 1)
      })
    })

    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    prev.addEventListener('click', () => {
      plusSlides(-1)
    })
    next.addEventListener('click', () => {
      plusSlides(1)
    })
  }

  buttons()

}



document.addEventListener('DOMContentLoaded', runPorftolio)