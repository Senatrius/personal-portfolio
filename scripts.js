const headerElement = document.querySelector('.header');

function handleHeaderBg() {
  let windowTopPosition = window.scrollY;
  const bgVisibilityOffset = 20;

  headerElement.style.backgroundColor = `hsla(0, 0%, 100%, ${windowTopPosition - bgVisibilityOffset}%)`

  console.log(windowTopPosition);
}

// Event Listeners

document.addEventListener('scroll', handleHeaderBg);