import VKLogo from "../static/icons/vk-icon.png";
import RutubeLogo from "../static/icons/rutube-icon.png";

export interface socialsProps {
  id: number;
  title: string;
  icon: string;
  url: string;
}

export const SocialsList: socialsProps[] = [
  {
    id: 1,
    title: "Группа ВКонтакте",
    icon: VKLogo,
    url: "https://vk.com/kreativ_plus",
  },
  {
    id: 2,
    title: "Канал на Rutube",
    icon: RutubeLogo,
    url: "https://rutube.ru/channel/41474478/",
  },
];
