import { Header as HeaderStyled } from "../styled/Header";
import { Navigation } from "../../config/navegation/Navegation";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyled>
      <ul>
        {Navigation.map((item, index) => (
          <li
            key={index}
            id={`nav-item-${index}`}
            className={index === 0 ? "first-item" : ""}
          >
            <Link to={item.path}>{item.element}</Link>
          </li>
        ))}
      </ul>
    </HeaderStyled>
  );
}
