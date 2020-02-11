function runPorftolio() {

  const title = document.querySelector('h1')
  const homeButton = document.querySelector('.navButton1')
  const aboutButton = document.querySelector('.navButton2')
  const skillButton = document.querySelector('.navButton3')

  homeButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    homeButton.style.boxShadow = 'none'
    setTimeout(() => {
      homeButton.style.boxShadow = '6px 10px 7px rgba(20, 20, 20, 0.582)'
    }, 500)
  })

  aboutButton.addEventListener('click', () => {
    window.scrollTo({ top: 840, behavior: 'smooth' })
    aboutButton.style.boxShadow = 'none'
    setTimeout(() => {
      aboutButton.style.boxShadow = '6px 10px 7px rgba(20, 20, 20, 0.582)'
    }, 500)
  })

  skillButton.addEventListener('click', () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' })
    skillButton.style.boxShadow = 'none'
    setTimeout(() => {
      skillButton.style.boxShadow = '6px 10px 7px rgba(20, 20, 20, 0.582)'
    }, 500)
  })


  const skillIcons = document.getElementsByClassName('skillIcon')
  console.log(skillIcons[0])

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
  const link1 = document.querySelector('.linkText1')
  const link2 = document.querySelector('.linkText2')

  Array.from(imgLink).forEach(function (icon) {
    icon.addEventListener('mouseover', () => {
      if (icon.id === 'img1') {
        link1.style.display = 'block'
      } else if (icon.id === 'img2') {
        link2.style.display = 'block'
      }
    })
  })




}

document.addEventListener('DOMContentLoaded', runPorftolio)