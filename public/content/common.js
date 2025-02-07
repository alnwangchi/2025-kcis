const menu = [
  'Project',
  'Wet lab',
  'Hardware',
  'Human Practices',
  'Model',
  'Education',
  'Software',
  'Team',
];

const menuDOM = document.querySelector('.D-menu');

let menuContent = '';

menu.forEach((item) => {
  menuContent += `
    <li class="mx-4 item">
      <a href="./${item.toLowerCase().replaceAll(' ', '-')}.html">${item}</a>
    </li>
  `;
});

menuDOM.innerHTML = menuContent;
