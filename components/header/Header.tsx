import styled from "styled-components";
import Setting from "./Setting";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #651fff;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  height: 18px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <Setting />
    </HeaderContainer>
  );
}

export default Header;
<header />;
