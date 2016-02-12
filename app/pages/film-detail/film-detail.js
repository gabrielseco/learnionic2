import {NavController, NavParams, Page} from 'ionic/ionic';
import {FilmsData} from '../../providers/films-data';



@Page({
  templateUrl: 'build/pages/film-detail/film-detail.html',
  providers:[FilmsData]
})
export class FilmDetailPage {
  constructor(nav: NavController, navParams: NavParams, films: FilmsData) {
    this.nav = nav;
    this.navParams = navParams;
    this.film = [];
    this.image = null;

    films.getFilm(this.navParams.data.id).then(films => {
      this.film = films;
      this.url = 'https://image.tmdb.org/t/p/original/'+this.film.poster_path;
      this.image = "url("+this.url+")";
    });
  }

  seeWebsite(film){
    window.open(film.homepage)
  }

}
