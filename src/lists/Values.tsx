import Quality from "../static/images/quality.png";
import Professionality from "../static/images/professionality.png";
import Personality from "../static/images/personality.png";
import Creativity from "../static/images/creativity.png";

export interface valuesProps {
  id: number;
  title: string;
  image: string;
}

export const ValuesList: valuesProps[] = [
  {
    id: 1,
    title: "Качество",
    image: Quality,
  },
  {
    id: 2,
    title: "Профессионализм",
    image: Professionality,
  },
  {
    id: 3,
    title: "Персонализация",
    image: Personality,
  },
  {
    id: 4,
    title: "Креативность",
    image: Creativity,
  },
];
