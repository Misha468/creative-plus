import PortfolioImage1 from "../static/portfolio/design/H-NvNwq-We6zvfyegU1iq6E-txczjLwPxKADFRIC2KW4dbdyZ2BEPMKvAsnNEePSFIFbttSN.jpg";
import PortfolioImage2 from "../static/portfolio/advertisement/-0uctf38yLZG1nxd0zUTttIG-z5fP9ue5Ee1qxwWqRti53ztW62afe7y4K4n14yCw7Y41fuR6-FjYJk9Fit3mmhG.jpg";
import PortfolioImage3 from "../static/portfolio/advertisement/2CzqlZtB_4SKvOjNP7DlooFRFzZ-vO2IWx_BZXQm0LdnDR-P5XXkcZBA8by4T_rrbf-TrWgDONiblA1qr1Aimocs.jpg";
import PortfolioImage4 from "../static/portfolio/advertisement/Lpc3U3MbQ7mPckcY34CD1cKQTfjw8H_MvKTuRzbMJja51t4_mx01GZvVQrYYun8AJiMl5PkpNAE4rNqBk9AarSDZ.jpg";
import PortfolioImage5 from "../static/portfolio/advertisement/UBI5fFiykdZniJmFjBbbrQvvN7fM-B-DA_A0GODHGB9klZnQolOeD8ucGgoIGKbdr_AbPQBta8F_u-WKqsaYpMim.jpg";
import PortfolioImage6 from "../static/portfolio/advertisement/XEfN_7LqFhgh_sL8pVIHdtE7svyVfAS1tmtok-9S_U986W1qf0YDiSE6e4O44bm3m2K2pcHFjZVzwY-7fHSpAM4J.jpg";
import PortfolioImage7 from "../static/portfolio/advertisement/eGsSQhAzLAw4EgJZIzBEpRHSkZNH7ymp4nDB4A7ci-N-ljhvR_J9tnhov7mp-m0pooq3Y5jLQk_N8FNByIbk9akg.jpg";
import PortfolioImage8 from "../static/portfolio/advertisement/g1AjZbLfetACrrycJ7ziRs31T8DSoye7sXoLbBt_RbD0tyQwmBfw-0_RxBezB8BwWQc6E0IIw7oFFISSlAh3R-4W.jpg";
import PortfolioImage9 from "../static/portfolio/souvenirs/2GOyglnIpYiopFMlRk8Eg7gPHoGvdceM6_QvnQUMYw-M3wmFbQPhyZUsuaul9vyzaUReN24n65w41PxEq-ybJnGw.jpg";
import PortfolioImage10 from "../static/portfolio/souvenirs/D0IBedHJEA0AT44EMdwIk8h3geH1WcS0Cti67vHeSuOO2-edzU1dXjql6kGaW1oFbsp5VkWk.jpg";
import PortfolioImage11 from "../static/portfolio/souvenirs/U8Vc-9E-mT3JjWlxTLJzPMEUmjuNJ6e3DB2IYWObMIXsLOxxCrnh2z2egV3LAQnRv7UKlh6h15-aQwH_dj7Bscv1.jpg";
import PortfolioImage12 from "../static/portfolio/souvenirs/b4ngY72x1PZoIEfy0uBHIhdPIKpMh9r-OuJpgWzV-QNmrxzBhm4eBtxpVTixt0P4z1JVFw6IOy6CiluXwpYPnDii.jpg";
import PortfolioImage13 from "../static/portfolio/souvenirs/kSaUPW6VOcRRiZMLt9w2wzJAZKtRgkmO4Rse_T-127JTTQwGaLZePrre-2oWjWcXrQI3V7qNz8jQMdT6onBvNPQV.jpg";
import PortfolioImage14 from "../static/portfolio/polygraphy/055JloWDwaPSgFONiCMguJ2H-of4W1O5taMVxdq9sP2Atoq1beLvfJbR5LRXs_vTGNfbenQAAxScUYU9bP18rfFr.jpg";
import PortfolioImage15 from "../static/portfolio/polygraphy/5Y9_QtVTCUr0De3xwg_JbPrtbR4u8jsUX3GFPsnrxPQaNVibpSfM0kNSwjQNwVBEosoeyOlexeIK2PfndiOxmCjT.jpg";
import PortfolioImage16 from "../static/portfolio/polygraphy/I5wtxsQA29MEgnXkPH6UUbL3351HQGXfTgHof5Z8MIOCq6p2S-wDT4j30vzffvYFQCMxWn3j1yUt9NHTPG4KPJXp.jpg";
import PortfolioImage17 from "../static/portfolio/polygraphy/bcSpd4ON80UhiZh5LyD95MdSgK-o_k1F6p44TVA_cf7oEOJoMWPHsF3jjsSLFDAjwazxlFPWTJFLpPUCemw-rGDy.jpg";

export interface portfolioProps {
  id: number;
  title: string;
  type?: "Дизайн" | "Наружняя реклама" | "Сувенирная продукция" | "Полиграфия";
  image: string;
}

export const PortfolioList: portfolioProps[] = [
  {
    id: 1,
    title: "Изображение работы",
    type: "Дизайн",
    image: PortfolioImage1,
  },
  {
    id: 2,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage2,
  },
  {
    id: 3,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage3,
  },
  {
    id: 4,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage4,
  },
  {
    id: 5,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage5,
  },
  {
    id: 6,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage6,
  },
  {
    id: 7,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage7,
  },
  {
    id: 8,
    title: "Изображение работы",
    type: "Наружняя реклама",
    image: PortfolioImage8,
  },
  {
    id: 9,
    title: "Изображение работы",
    type: "Сувенирная продукция",
    image: PortfolioImage9,
  },
  {
    id: 10,
    title: "Изображение работы",
    type: "Сувенирная продукция",
    image: PortfolioImage10,
  },
  {
    id: 11,
    title: "Изображение работы",
    type: "Сувенирная продукция",
    image: PortfolioImage11,
  },
  {
    id: 12,
    title: "Изображение работы",
    type: "Сувенирная продукция",
    image: PortfolioImage12,
  },
  {
    id: 13,
    title: "Изображение работы",
    type: "Сувенирная продукция",
    image: PortfolioImage13,
  },
  {
    id: 14,
    title: "Изображение работы",
    type: "Полиграфия",
    image: PortfolioImage14,
  },
  {
    id: 15,
    title: "Изображение работы",
    type: "Полиграфия",
    image: PortfolioImage15,
  },
  {
    id: 16,
    title: "Изображение работы",
    type: "Полиграфия",
    image: PortfolioImage16,
  },
  {
    id: 17,
    title: "Изображение работы",
    type: "Полиграфия",
    image: PortfolioImage17,
  },
];
