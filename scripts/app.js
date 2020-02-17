function runPorftolio() {

  const homeButton = document.querySelector('.navButton1')
  const aboutButton = document.querySelector('.navButton2')
  const skillButton = document.querySelector('.navButton3')
  const projectButton = document.querySelector('.navButton4')

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

  projectButton.addEventListener('click', () => {
    window.scrollTo({ top: 2370, behavior: 'smooth' })
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
  const linkText = document.getElementsByClassName('linkText')
  const linkArray = []


  Array.from(imgLink).forEach(function (icon) {
    linkArray.push(icon)
    // if (linkArray.length === 6) {
    //   fullArray()
    // }
  })

  // function fullArray() {
  linkArray.forEach((item) => {
    const position = linkArray.indexOf(item)
    item.addEventListener('mouseover', () => {
      linkText[position].style.display = 'block'
      // linkText[position].style.animation = 'links 1s normal'
      // setTimeout(() => {
      //   linkText[position].style.animation = ' linksOut 1s normal'
      //   setTimeout(() => {
      //     linkText[position].style.display = 'none'
      //   }, 1000)
      //   console.log('bye')
      // }, 2000)
    })
  })
  
  // linkArray.forEach((item) => {
  //   const position = linkArray.indexOf(item)
  //   item.addEventListener('mouseleave', () => {
  //     setTimeout(() => {
  //       linkText[position].style.animation = 'linksOut 1s normal'
  //       setTimeout(() => {
  //         linkText[position].style.display = 'none'
  //       }, 1000)
  //       console.log('bye')
  //     }, 2000)
  //   })
  // })


}

document.addEventListener('DOMContentLoaded', runPorftolio)