import type { Photo } from "../types/photo";

import Gomel from '../assets/images/Gomel.jpg';
import Polesie from '../assets/images/Polesie.jpg';
import university from '../assets/images/university.jpg';
import workplace from '../assets/images/workplace.png';

export const photos: Photo[] = [
  {
    image: university,
    caption: "Архитектура родного университета — ГГУ им. Ф. Скорины"
  },
  {
    image: Gomel,
    caption: "Вечерние огни Гомеля: вид на центральные улицы"
  },
  {
    image: workplace,
    caption: "Рабочее пространство: где рождаются идеи и код"
  },
  {
    image: Polesie,
    caption: "Природа Полесья: вдохновение для новых свершений"
  }
];
