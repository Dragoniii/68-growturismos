import { Header as HeaderStyled } from "../styled/Header";
import { Navigation } from "../../config/navegation/Navegation";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyled>
      <ul>
        {Navigation.map((item) => (
          <li>
            <Link to={item.path}>{item.element}</Link>
          </li>
        ))}
      </ul>
    </HeaderStyled>
  );
}
