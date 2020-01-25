function runPorftolio() {

  const title = document.querySelector('h1')
  // title.style.fontSize = '50px'
  const homeButton = document.querySelector('.navButton1')

  homeButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    homeButton.style.boxShadow = 'none'
    setTimeout(() => {
      homeButton.style.boxShadow = '6px 10px 7px rgba(20, 20, 20, 0.582)'
    }, 1500)
  })
}

document.addEventListener('DOMContentLoaded', runPorftolio)