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

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieResultsContaner.appendChild(movieCard);

    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", movie.Poster);
    moviePoster.classList.add("movie-poster");

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.Title;
    movieTitle.classList.add("movie-title");

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.Year;
    movieYear.classList.add("movie-year");

    const movieRating = document.createElement("p");
    movieRating.textContent = movie.imdbRating;
    movieRating.classList.add("movie-year");

    const moviePlot = document.createElement("p");
    moviePlot.textContent = movie.Plot;
    moviePlot.classList.add("movie-plot");

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieYear);
    movieCard.appendChild(movieRating);
    movieCard.appendChild(moviePlot);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Hope you found your movie!");
  }
}

getMovie("Thor");
getMovie("F1");
getMovie("Uncharted");
getMovie("Annabelle");
