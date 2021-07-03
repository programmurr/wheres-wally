// TODO: Turn this into a custom hook? Keeps throwing that unmounted
//   component error but it still works
export default function handleScroll(isMounted, setState) {
  const nav = document.getElementById('NavContainer');
  const sticky = nav.offsetTop;
  document.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky || window.pageXOffset > 0) {
      if (isMounted) setState(true);
    } else {
      if (isMounted) setState(false);
    }
  })
}