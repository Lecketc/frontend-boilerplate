try {
  const burgerMenu = document.querySelector('.nav_burger')
  const navItems = document.querySelector('.nav_items')
  const navItemsUL = document.querySelector('.nav_items ul')

  const toggleBurger = () => {
    navItems.classList.toggle('nav_items__active')
  }

  burgerMenu.addEventListener('click', toggleBurger)
  document.addEventListener('click', (e) => {
    if (e.target !== burgerMenu && e.target !== navItemsUL) {
      navItems.classList.remove('nav_items__active')
    }

  })
} catch (e) {
  console.log(e);
}