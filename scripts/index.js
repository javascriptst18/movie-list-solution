async function getMovies(search = '') {
  let url = `https://javascriptst18.herokuapp.com/trending?q=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((allMovies) => {
      createHTML(allMovies);
    });
}

function createHTML(allMovies) {
  const container = document.querySelector('.container');
  let html = '';
  for (let movie of allMovies) {
    html += `
        <div class="card">
          <p>${movie.title}</p>
          <p>${movie.genres} </p>
        </div>
      `;
  }
  container.innerHTML = html;
}

function addSearchEvent() {
  const searchInputField = document.querySelector('#searchTerm');
  searchInputField.addEventListener('change', (event) => {
    const searchValue = event.target.value;
    getMovies(searchValue);
  })
}

getMovies();
addSearchEvent();
