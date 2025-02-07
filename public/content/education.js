const list = [
  'Education Outreach',
  'Dengue Synthetic Biology Lessons',
  'Dengue Day',
  'Synthetic Biology Education',
  'Education Tools',
  'Promotion',
];

const contentListDOM = document.querySelector('.D-content-list');

let contentListContent = '';

list.forEach((item) => {
  contentListContent += `
    <li class="cursor-pointer">
    ${item}
    </li>
  `;
});

contentListDOM.innerHTML = contentListContent;
