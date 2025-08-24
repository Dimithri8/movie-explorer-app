const movieResultsContaner = document.querySelector(
  ".search-results-container"
);

async function getMovie(movieName) {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=59ccd4a7`
    );
    if (!res.ok) throw Error("Movie cannot be found.");
    const movie = await res.json();
    if (movie.Response === "False") throw Error("Movie not found");
    console.log(movie);
    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", movie.Poster);

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.Title;
    movieTitle.classList.add("movie-title");

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.Year;

    const movieRating = document.createElement("p");
    movieRating.textContent = movie.imdbRating;

    const moviePlot = document.createElement("p");
    moviePlot.textContent = movie.Plot;

    movieResultsContaner.appendChild(movieTitle);
    movieResultsContaner.appendChild(moviePoster);
    movieResultsContaner.appendChild(movieYear);
    movieResultsContaner.appendChild(movieRating);
    movieResultsContaner.appendChild(moviePlot);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Hope you found your movie!");
  }
}

getMovie("Thor");
