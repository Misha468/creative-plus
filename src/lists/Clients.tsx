import ClientLogo1 from "../static/clients/afd_99_580.jpg";
import ClientLogo2 from "../static/clients/brk.jpg";
import ClientLogo3 from "../static/clients/faurecia.jpg";
import ClientLogo4 from "../static/clients/ggrka.png";
import ClientLogo5 from "../static/clients/hellmann.jpg";
import ClientLogo6 from "../static/clients/ht&l_fitting.jpg";
import ClientLogo7 from "../static/clients/kemz.jpg";
import ClientLogo8 from "../static/clients/magna.jpg";
import ClientLogo9 from "../static/clients/magnit.jpg";
import ClientLogo10 from "../static/clients/rio.jpg";
import ClientLogo11 from "../static/clients/rpm_group.jpg";
import ClientLogo12 from "../static/clients/trust.jpg";
import ClientLogo13 from "../static/clients/zolotie_lvi.jpg";

export interface clientProps {
  id: number;
  logo: string;
  title: string;
}

export const ClientsList: clientProps[] = [
  {
    id: 1,
    logo: ClientLogo1,
    title: "afd_99_580",
  },
  {
    id: 2,
    logo: ClientLogo2,
    title: "brk",
  },
  {
    id: 3,
    logo: ClientLogo3,
    title: "faurecia",
  },
  {
    id: 4,
    logo: ClientLogo4,
    title: "ggrka",
  },
  {
    id: 5,
    logo: ClientLogo5,
    title: "hellmann",
  },
  {
    id: 6,
    logo: ClientLogo6,
    title: "ht&l_fitting",
  },
  {
    id: 7,
    logo: ClientLogo7,
    title: "kemz",
  },
  {
    id: 8,
    logo: ClientLogo8,
    title: "magna",
  },
  {
    id: 9,
    logo: ClientLogo9,
    title: "magnit",
  },
  {
    id: 10,
    logo: ClientLogo10,
    title: "rio",
  },
  {
    id: 11,
    logo: ClientLogo11,
    title: "rpm_group",
  },
  {
    id: 12,
    logo: ClientLogo12,
    title: "trust",
  },
  {
    id: 13,
    logo: ClientLogo13,
    title: "zolotie_lvi",
  },
];
