
function getMovies(search = '') {
  let url = `https://javascriptst18.herokuapp.com/trending?q=${search}`;
  $.getJSON(url, function (allMovies) {
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
  })

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
