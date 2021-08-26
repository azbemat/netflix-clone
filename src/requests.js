const API_KEY = "e5b4dd708de5c4023478a2b8b2908656";


const requests = {

    fetch_NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetch_trendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch_TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetch_ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetch_ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetch_HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetch_RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetch_Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
} 

export default requests;