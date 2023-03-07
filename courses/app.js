
const searchInput = document.querySelector('#search-input');
const list = document.querySelector('#list');
const nothingFound = document.createElement('div');
nothingFound.textContent = 'Nothing was found';
nothingFound.style.display = 'none';
list.appendChild(nothingFound);

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  let numMatches = 0;

  Array.from(list.children).forEach((item) => {
    const textContent = item.textContent.toLowerCase();
    if (textContent.includes(searchTerm)) {
      item.style.display = 'block';
      item.style.color = 'orange';
      nothingFound.style.fontSize = '35px';
      nothingFound.style.marginTop = '50px';
      numMatches++;
    } else {
      item.style.display = 'none';
    }
  });

  if (numMatches === 0) {
    nothingFound.style.display = 'block';
    document.querySelector('#course-sec').style.height = '90vh';
  } else {
    nothingFound.style.display = 'none';
    document.querySelector('#course-sec').style.height = '';
  }
});
