const key = "6a8cc0c1d9bd26a68c87811ec82a1428";

const requests = {
  Toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  Nowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
};

export default requests;



