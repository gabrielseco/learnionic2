import {IonicApp, Page, NavController} from 'ionic/ionic';
//cargamos nuestro provider para hacer llamadas a la API
import { FilmsData } from '../../providers/films-data';
//Cargamos la página del detalle para que sepa a que página vamos a navegar
import { FilmDetailPage } from '../film-detail/film-detail';

//Le decimos a la página que provider tiene que usar y la templateUrl
@Page({
  templateUrl: 'build/pages/films/films.html',
  providers:[ FilmsData ]
})

//Films tiene un constructor con nav y films
export class Films {
  constructor(nav: NavController, films: FilmsData, app: IonicApp) {
    this.app = app;
    this.nav = nav;
    this.films = [];

    //hacemos la llamada al provider
    //nos devuelve las películas más populares

    films.getFilms().then( films => {
      this.films = films.results;
    });
  }
  //permite movernos al detalle, pasandole datos

  goToFilmDetail(film) {
    this.nav.push(FilmDetailPage, film);
  }
}
