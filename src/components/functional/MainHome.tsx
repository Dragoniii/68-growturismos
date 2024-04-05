import { Fragment } from "react/jsx-runtime";
import imgHome from "../../assets/home.svg";
import { Conteiner } from "../styled/Conteiner";
import { Content } from "../styled/Content";
import { Button } from "../styled/Button";

export function MainHome() {
  return (
    <Fragment>
      <Conteiner>
        <Content>
          <h1>GrowTravel</h1>
          <p>O melhor serviço para você!</p>
          <Button>Saiba Mais!</Button>
        </Content>
        <Content>
          <img src={imgHome} alt="imgHome" />
        </Content>
      </Conteiner>
    </Fragment>
  );
}
