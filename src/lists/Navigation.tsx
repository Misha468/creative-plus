export interface navigationProps {
  id: number;
  title: string;
  url: string;
  isActive: boolean;
}

export const NavigationList: navigationProps[] = [
  {
    id: 1,
    title: "Главная",
    url: "/",
    isActive: true,
  },
  {
    id: 2,
    title: "Услуги",
    url: "/услуги",
    isActive: false,
  },
  {
    id: 3,
    title: "Портфолио",
    url: "/портфолио",
    isActive: false,
  },
  {
    id: 4,
    title: "Отзывы",
    url: "/отзывы",
    isActive: false,
  },
  {
    id: 5,
    title: "Контакты",
    url: "/контакты",
    isActive: false,
  },
];
