import PhoneIcon from "../static/icons/phone-icon.png";
import LocationIcon from "../static/icons/location-icon.png";

export interface contactsProps {
  id: number;
  icon?: string;
  title: string;
  text: string;
  url: string;
  styles?: string;
  pageVisible: boolean;
  footerVisible: boolean;
}

export const ContactsList: contactsProps[] = [
  {
    id: 1,
    icon: PhoneIcon,
    title: "Номер агентства",
    text: "+7 (4842) 75-19-06",
    url: "tel:+74842751906",
    styles: "footer-element-icon-basic",
    pageVisible: true,
    footerVisible: true,
  },
  {
    id: 2,
    icon: LocationIcon,
    title: "Адрес компаниии",
    text: "Николо-Козинская ул., 29, Калуга",
    url: "https://yandex.ru/maps/-/CPSpUH-h",
    styles: "footer-element-icon-special",
    pageVisible: false,
    footerVisible: true,
  },
  {
    id: 3,
    title: "Контактная почта",
    text: "kplus.751906@yandex.ru",
    url: "mailto:kplus.751906@yandex.ru",
    pageVisible: true,
    footerVisible: false,
  },
];
