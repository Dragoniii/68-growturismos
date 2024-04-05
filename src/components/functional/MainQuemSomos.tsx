import { Fragment } from "react/jsx-runtime";
import imgQuemSomos from "../../assets/aeroporto.svg";
import { Conteiner } from "../styled/Conteiner";
import { Content } from "../styled/Content";

export function MainQuemSomos() {
  return (
    <Fragment>
      <Conteiner>
        <Content>
          <img src={imgQuemSomos} alt="imgHome" />
        </Content>
        <Content>
          <h1>| Quem Somos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam
            neque consequuntur minima, quis, tenetur maxime!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam
            neque consequuntur minima, quis, tenetur maxime!
          </p>
        </Content>
      </Conteiner>
    </Fragment>
  );
}
