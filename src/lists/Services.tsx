import DesignImage from "../static/images/design.png";
import AdvertisementImage from "../static/images/advertisement.png";
import SouvenirsImage from "../static/images/souvenirs.png";
import PolygraphyImage from "../static/images/polygraphy.png";

export interface typeProps {
  id: number;
  image: string;
  type: "Дизайн" | "Реклама" | "Сувениры" | "Полиграфия";
  services: servicesProps[];
}
export interface servicesProps {
  id: number;
  title: string;
}

export const ServicesList: typeProps[] = [
  {
    id: 1,
    image: DesignImage,
    type: "Дизайн",
    services: [
      {
        id: 1,
        title: "Фирменный стиль",
      },
      {
        id: 2,
        title: "Логотип",
      },
      {
        id: 3,
        title: "наружная реклама",
      },
      {
        id: 4,
        title: "Сувенирная продукция",
      },
      {
        id: 5,
        title: "Полиграфия",
      },
    ],
  },
  {
    id: 2,
    image: AdvertisementImage,
    type: "Реклама",
    services: [
      {
        id: 1,
        title: "Баннеры",
      },
      {
        id: 2,
        title: "Указатели/щиты",
      },
      {
        id: 3,
        title: "Брендирование транспорта",
      },
      {
        id: 4,
        title: "Вывески",
      },
      {
        id: 5,
        title: "Интерьерное оформление",
      },
      {
        id: 6,
        title: "Таблички/бирки",
      },
      {
        id: 7,
        title: "Плоттерная резка",
      },
    ],
  },
  {
    id: 3,
    image: SouvenirsImage,
    type: "Сувениры",
    services: [
      {
        id: 1,
        title: "Кружки/тарелки",
      },
      {
        id: 2,
        title: "Небесные фонарики",
      },
      {
        id: 3,
        title: "Пазлы/часы",
      },
      {
        id: 4,
        title: "Футболки",
      },
      {
        id: 5,
        title: "Брендирование спецодежды",
      },
      {
        id: 6,
        title: "Деловые сувениры",
      },
    ],
  },
  {
    id: 4,
    image: PolygraphyImage,
    type: "Полиграфия",
    services: [
      {
        id: 1,
        title: "Деловая",
      },
      {
        id: 2,
        title: "Рекламная",
      },
      {
        id: 3,
        title: "Упаковка",
      },
      {
        id: 4,
        title: "В подарок",
      },
      {
        id: 5,
        title: "Для церкви",
      },
    ],
  },
];
