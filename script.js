const mobileMenu = document.getElementById('mobile_menu');

mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// create an array of objects to store card information

const projects = [
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',

  },
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');

  const cardImage = document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'Card Image';
  card.appendChild(cardImage);

  const cardTitle = document.createElement('h3'); // Fixed typo in 'cardTittle'
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);

  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);

  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'See Project';
  card.appendChild(cardBtn);
  cardBtn.addEventListener('click', () => openModal(project));

  return card;
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.remove();
    window.removeEventListener('click', outsideClick);
  }
}

function outsideClick(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
}

function insertCards() {
  const projectsContainer = document.getElementById('projects_cards');
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', insertCards);