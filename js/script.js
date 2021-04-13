
var app = new Vue({
  el: '#app',
  data: {
    userQuery: "",
    movies: [],
    languages : ["it-IT","en-US"],
    textInput:"input-text",


  },
  methods: {

    moviesSearch: function(event) {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: "49659ac56a41879716b29b1fe3c048a3",
          query: this.userQuery,
          page: 1,
          include_adult: false,
          selectlangindex:0,
          language: this.languages[this.selectlangindex]
        }
      })
      .then((response)=>{
        this.movies =   response.data.results;
        this.movieRate();
      });

      this.userQuery="";
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs', {
        params: {

          query: this.userQuery,
          page: 1,
          include_adult: false,
          selectlangindex:0,
          language: this.languages[this.selectlangindex]
        }
      })
      .then((response)=>{
        this.movies =   response.data.results;
        this.movieRate();
      });

    },
    inputAnimation:function(event){
  if (this.textInput=='input-text') {
     this.textInput='input-text2';
  }else{
    this.textInput='input-text';
  }

},

    movieRate: function() {
      this.movies.forEach((item) => {

        var vote = Math.ceil(item.vote_average / 2);
        item.vote_average = vote;
        console.log(item.vote_average);
      });
    }
  }

})
