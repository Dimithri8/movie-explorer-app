const movieResultsContaner = document.querySelector(
  ".search-results-container"
);
const searchBar = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const userInput = searchBar.value;
  getMovie(userInput);

  movieResultsContaner.innerHTML = "";
});

async function getMovie(movieName) {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(
        movieName
      )}&apikey=59ccd4a7`
    );
    if (!res.ok) throw Error("Movie cannot be found.");
    const movie = await res.json();
    if (movie.Response === "False") throw Error("Movie not found");
    console.log(movie);
    movie.Search.forEach((movieItem) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieResultsContaner.appendChild(movieCard);

      const moviePoster = document.createElement("img");
      moviePoster.setAttribute("src", movieItem.Poster);
      moviePoster.classList.add("movie-poster");

      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movieItem.Title;
      movieTitle.classList.add("movie-title");

      const movieYear = document.createElement("p");
      movieYear.textContent = movieItem.Year;
      movieYear.classList.add("movie-year");

      const movieRating = document.createElement("p");
      movieRating.textContent = movieItem.imdbRating;
      movieRating.classList.add("movie-year");

      const moviePlot = document.createElement("p");
      moviePlot.textContent = movieItem.Plot;
      moviePlot.classList.add("movie-plot");

      const posterContainer = document.createElement("div");
      const movieTextContainer = document.createElement("div");
      movieTextContainer.classList.add("movieTextContainer");

      movieCard.appendChild(posterContainer);
      posterContainer.classList.add("poster-container");
      posterContainer.appendChild(moviePoster);

      movieCard.appendChild(movieTextContainer);
      movieTextContainer.appendChild(movieTitle);
      movieTextContainer.appendChild(movieYear);
      movieTextContainer.appendChild(movieRating);
      movieTextContainer.appendChild(moviePlot);
    });
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Hope you found your movie!");
  }
}
