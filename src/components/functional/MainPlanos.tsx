import { Fragment } from "react/jsx-runtime";
import { Conteiner } from "../styled/Conteiner";
import { CardPlanos } from "./CardPlanos";
import { CardPlanosProps } from "./CardPlanos";

const planos: CardPlanosProps[] = [
  {
    h2: "Plano 1",
    servicosInclusos: ["Suporte 24h", "Serviços de quarto", "Guia turístico"],
  },
  {
    h2: "Plano 2",
    servicosInclusos: [
      "Suporte 24h",
      "Serviços de quarto",
      "Guia turístico",
      "Roteiro de trilhas",
      "Serviço personalizado",
    ],
  },
  {
    h2: "Plano 3",
    servicosInclusos: [
      "Suporte 24h",
      "Serviços de quarto",
      "Guia turístico",
      "Roteiros de trilhas",
      "Serviço personalizado",
      "Área Vip",
    ],
  },
];

export function MainPlanos() {
  return (
    <Fragment>
      <Conteiner>
        {planos.map((item) => (
          <CardPlanos key={item.h2} h2={item.h2}  servicosInclusos={item.servicosInclusos} />
        ))}
      </Conteiner>
    </Fragment>
  );
}
