import styled from "styled-components";
import Logo from "../assets/icons/logo.svg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  height: 1.6rem;
  width: 9.2rem;
`;

const StyledText = styled.div`
  color: #090e24;
  font-family: "Poppins";
  font-size: 9px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.6rem;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 2px;
  background: var(
    --Linear,
    linear-gradient(90deg, #005dff 0%, #00a3ff 44.27%, #21ddff 100%)
  );
  margin-top: 8px;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLogo src={Logo} />
        <StyledText>123 Main Street, Dover, NH 03820-4667</StyledText>
      </StyledHeader>
      <StyledBorder />
    </>
  );
}

export default Header;
