const { textContent } = require("domutils");

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
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver: '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver:  '#',
  },
  {
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver: '#',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver: '#',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: '#',
    liveserver: '#',
    
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
  cardBtn.innerHTML = "See Project";
  card.appendChild(cardBtn);
  cardBtn.addEventListener("click", () => openModal(project))
  return card;
}

function openModal(projects){
  const modal = document.createElement("div");
  modal.classList.add("modal_style");
  modal.id = "projectModal";

  const closeButton = document.createElement("span");
  closeButton.classList.add("close_btn");
  closeButton.innerHTML = "&times";
  closeButton.addEventListener("click", closeModal);
  modal_content.appendChild(closeButton);

  const modal_content = document.createElement("div");
  modal_content.classList.add("modal_content");
  modal.appendChild(modal_content);

  const modal_image = document.createElement("img");
  modal_image.src = projects.image;
  modal_image.alt = projects.title;
  modal_content.appendChild(modal_image);

  const modal_title = document.createElement("h1");
  modal_title.innerHTML = projects.title
  modal_content.appendChild(modal_title);

  const modal_list = document.createElement("ul");
  modal_list.id='modalTechnologies'
  projects.technologies.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = element
    modal_list.appendChild(listItem);
  })
  modal_content.appendChild(modal_list);

  const modal_links = document.createElement("div");
  modal_links.classList.add("modal_links");

  const modal_description = document.createElement("p");
  modal_description.innerHTML = projects.description
  modal_content.appendChild(modal_description);
  modal.appendChild(modal_content);
  document.body.appendChild(modal)

  const githublink = document.createElement("a");
  githublink.href = projects.githubLink;
  githublink.target = "blank";
  githublink.textContent = "Github Repo";
  githublink.classList.add("button");
  modal_links.appendChild(githublink);

  const liveserver = document.createElement("a");
  liveserver.href = projects.liveserver;
  liveserver.target = "blank";
  liveserver.textContent = "Live Site"
  liveserver.classList.add("button");
  modal_links.appendChild(liveserver);

  modal_content.appendChild(modal_links);
  modal.appendChild(modal_content);
  document.body.appendChild(modal);

  window.addEventListener("click", outsideClick);

  }

  //Function to close modal
  function closeModal(){
    const modal = document.getElementById("projectModal");
    if (modal) {
      modal.remove();
      window.removeEventListener("click", outsideClick);
    }
  }

  //Close modal when clicking outside modal content
  function outsideClick(event){
  const modal = document.getElementById("projectModal");
  if(event.target === modal){
  closeModal();
  }
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