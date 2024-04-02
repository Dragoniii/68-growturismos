import styled from "styled-components";

export const Header = styled.header`
  background-color: #122a57;
  color: white;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  a {
    color: gray;
    text-decoration: none;
  }

  li {
    :hover {
      color: white;
      font-weight: bold;
    }
  }

`;