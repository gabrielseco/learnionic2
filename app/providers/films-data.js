import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class FilmsData {
  constructor(http: Http) {
    // asignamos la propiedad http a this para usarla posteriormente
    //asignamos la clave de la nuestra api para usarla posteriormente
    this.http = http;
    this.api_key = 'f9868bfa67c8ac93675e8de8a33cbd17'
  }

  load(url) {

    return new Promise(resolve => {

      this.http.get(url).subscribe(res => {

        this.data = (res.json());
        resolve(this.data);
      });
    });
  }
  //llamamos a la api the moviedb
  //obtenemos las películas más populares del momento
  getFilms() {
    var url = 'http://api.themoviedb.org/3/movie/popular?api_key='+this.api_key
    return this.load(url).then(data => {
      return data;
    });
  }
  getFilm(id){
    var url = `http://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}`
    return this.load(url).then(data => {
      return data;
    })
  }


}
