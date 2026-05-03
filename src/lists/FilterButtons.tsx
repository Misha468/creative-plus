export interface filterButtonsProps {
  id: number;
  title:
    | "Все"
    | "Дизайн"
    | "Наружняя реклама"
    | "Сувенирная продукция"
    | "Полиграфия";
}

export const FilterButtonsList: filterButtonsProps[] = [
  {
    id: 1,
    title: "Все",
  },
  {
    id: 2,
    title: "Дизайн",
  },
  {
    id: 3,
    title: "Наружняя реклама",
  },
  {
    id: 4,
    title: "Сувенирная продукция",
  },
  {
    id: 5,
    title: "Полиграфия",
  },
];
