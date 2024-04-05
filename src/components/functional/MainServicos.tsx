import { Fragment } from "react/jsx-runtime";
import imgHospedagem from "../../assets/hotel.svg";
import imgRoteiro from "../../assets/roteiro.svg";
import imgPacotes from "../../assets/viagens.svg";
import { Conteiner } from "../styled/Conteiner";
import { Card } from "./Card";

interface ServicoType {
  img: string;
  h2: string;
}

const servicos: ServicoType[] = [
  { img: imgHospedagem, h2: "Hospedagem" },
  { img: imgRoteiro, h2: "Roteiros" },
  { img: imgPacotes, h2: "Pacotes" },
];

export function MainServicos() {
  return (
    <Fragment>
      <Conteiner>
        {servicos.map((item) => (
          <Card key={item.h2} img={item.img} h2={item.h2} />
        ))}
      </Conteiner>
    </Fragment>
  );
}
