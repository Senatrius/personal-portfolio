const headerElement = document.querySelector('.header');
const projectContainerElement = document.querySelector('.project-container');

function handleHeaderBg() {
  let windowTopPosition = window.scrollY;
  const bgVisibilityOffset = 20;

  headerElement.style.backgroundColor = `hsla(0, 0%, 100%, ${windowTopPosition - bgVisibilityOffset}%)`;
}

async function populateProjects() {

  const response = await fetch('./resources/projects.json');
  const data = await response.json();

  data.forEach(project => {

    let stack = project.stack.join(' / ');

    projectContainerElement.innerHTML += `
    <div class="project">
      <img src="${project.thumbnail}" alt="" class="project__thumbnail">
      <div class="project__summary">
        <h3 class="project__title">${project.title}</h3>
        <p class="project__skills">${stack}</p>
        <button class="btn">Learn more</button>
      </div>
    </div>
    `
  })
}

populateProjects();
// Event Listeners

document.addEventListener('scroll', handleHeaderBg);