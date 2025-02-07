const list = [
  'Abstract',
  'Issues',
  'Current Solutions & Problems',
  'Our Synergistic Solution',
  'Production of Biolarvicidal Toxins in a Chromosome-free System',
  'Our Project',
  'References',
];

const contentListDOM = document.querySelector('.D-content-list');

let contentListContent = '';

list.forEach((item) => {
  contentListContent += `
    <li class="cursor-pointer item underline-offset-4">
    ${item}
    </li>
  `;
});

contentListDOM.innerHTML = contentListContent;
