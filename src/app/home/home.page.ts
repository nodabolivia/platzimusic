import { Component } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  config: SwiperOptions = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400,
    centeredSlides: true,
  };
  slides = [
    {
      title: 'Escucha tu música',
      subTitle: 'EN CUALQUIER LUGAR',
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      icon: 'play',
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VIDEOS INCREÍBLES',
      // eslint-disable-next-line max-len
      description: 'Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increíbles de tu artista favorito.',
      icon: 'videocam',
    },
    {
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada en tu actividad física. <br> Ten reportes y acceso a lo que necesites, integrado con GPS!',
      icon: 'bicycle',
    },
  ];
  constructor() {}
}
