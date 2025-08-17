async function searchMovies() {
    const searchQuery = document.getElementById('search').value;
    const apiKey = 'your-api-key'; // Use API key from TMDb or other movie API
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear previous results

    if (movies.length === 0) {
        movieList.innerHTML = '<p>No movies found.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieCard.appendChild(movieImage);

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        movieCard.appendChild(movieTitle);

        movieList.appendChild(movieCard);
    });
}
