import styled from "styled-components";

export const Header = styled.header`
  background-color: #122a57;
  color: white;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 58%;
  }

  a {
    color: #cccc;
    text-decoration: none;
  }

  li {
    :hover {
      color: white;
      font-weight: bold;
    }

    &.first-item a {
      margin-right: 25rem;
      font-size: 2rem;
      color: white;
    }
  }
`;
