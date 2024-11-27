const mobileMenu = document.getElementById('mobile_menu');

mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// create an array of objects to store card information

const projects = [
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    cardButton: '#',
  },
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage = document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'Card Image';
  card.appendChild(cardImage);
  const cardTittle = document.createElement('h3');
  cardTittle.innerHTML = project.title;
  card.appendChild(cardTittle);
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
  return card;
}

// Function to insert the cards in the projects_cards div

function insertCards() {
  const projectsContainer = document.getElementById('projects_cards');
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', insertCards);