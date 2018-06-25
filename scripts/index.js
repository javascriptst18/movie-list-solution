async function getMovies(search = '') {
  let url = `https://javascriptst18.herokuapp.com/trending?q=${search}`;
  let responseObject = await fetch(url);
  let allMovies = await responseObject.json();
  createHTML(allMovies);
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



// function calculate(a, b, operator) {
//   const result = operator(a, b);
//   console.log(result);
// }

// function add(a, b) {
//   return a + b;
// }

// calculate(5, 5, add);