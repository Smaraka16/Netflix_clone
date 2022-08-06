const API_KEY ="22db34e3d601be9f630541712d666f00";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_networks=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_networks=99`
}

export default requests;