const handleScroll = (navBar, gameWindow, sticky) => {
  if (window.pageYOffset >= sticky) {
    gameWindow.classList.add('expand');
    navBar.classList.add('sticky');
  } else {
    gameWindow.classList.remove('expand');
    navBar.classList.remove('sticky');
  }
}

export default handleScroll;