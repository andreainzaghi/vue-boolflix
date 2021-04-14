
var app = new Vue({
  el: '#app',
  data: {

    userQuery: "",
    movies: [],
    series: [],
  film1:'m-selects',
    film2:'m-selects',
    selectlangindex:0,
    languages : ["it-IT","en-US"],
    textInput:"input-text",




  },
  methods: {

    moviesSearch: function(event) {
  if (this.userQuery !="") {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: "49659ac56a41879716b29b1fe3c048a3",
        query: this.userQuery,
        page: 1,
        include_adult: false,
        language: this.languages[this.selectlangindex]
      }
    })
    .then((response)=>{
      this.movies =   response.data.results;
      this.movieRate();
    });


    axios.get('https://api.themoviedb.org/3/search/tv',{
       params: {
        api_key: "49659ac56a41879716b29b1fe3c048a3",
        query: this.userQuery,
        page: 1,
        include_adult: false,
        language: this.languages[this.selectlangindex]
      }})
    .then((resultate)=>{
      this.series = resultate.data.results;
      // console.log(this.series);
      this.movieRate();
    });

  }
  // this.userQuery !=""
    },
    inputAnimation:function(event){
  if (this.textInput=='input-text') {
     this.textInput='input-text2';
  }else{
    this.textInput='input-text';
  }

},
AllSf:function(){
  this.film2 =='m-selects',
  this.film1=='m-selects'

},
 FilmClick:function(){
   if (this.film1 =='m-selects') {
    this.film2=='display',
    this.film1 =='m-selects'
   }
 },
 SerieClick:function(){
   if (this.film2 =='m-selects') {
    this.film1=='display',
    this.film2 =='m-selects'
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
