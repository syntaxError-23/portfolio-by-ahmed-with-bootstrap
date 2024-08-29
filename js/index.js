const scrollBtn = document.getElementById('scroll-btn');
const cardsSectionDiv = document.getElementById('cards-section');
const projectsHeader = document.getElementById('projects-header');
const projectNavLink = document.getElementById('projects');
const contactNavLink = document.getElementById('contact-me');
const footerDiv = document.getElementById('footer');

scrollBtn.addEventListener('click', () => {
    console.log('button clicked');
    projectsHeader.scrollIntoView()
})

projectNavLink.addEventListener('click', () => {
    console.log('button clicked');
    projectsHeader.scrollIntoView()
})

contactNavLink.addEventListener('click', () => {
    console.log('button clicked');
    footerDiv.scrollIntoView()
})