import {App, IonicApp, Config} from 'ionic/ionic';
import {Films} from './pages/films/films';


@App({
  templateUrl: 'build/app.html',
})

export class MyApp {
  constructor(app: IonicApp,config: Config) {

    // le decimos a films que va tener la página films
    this.films = Films;

    //usamos la configuración para cambiarle el botón de la navegación

    config.set('backButtonText','Atrás')



  }
}
