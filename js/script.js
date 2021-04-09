var app = new Vue({
  el: '#app',
  data: {
    userQuery: "",
    movies: [],
  },
  methods: {
    moviesSearch: function() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: "49659ac56a41879716b29b1fe3c048a3",
          query: this.userQuery,
          page: 1,
          include_adult: false,
          language: "it-IT",
        }
      })
      .then((response)=>{
        const searchResults = response.data.results;
        this.movies = searchResults;

        this.userQuery="";
      });
    }
  }

})