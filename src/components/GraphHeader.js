import styled from "styled-components";
import Location from "../assets/icons/location.svg";

const StyledGHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin: 1.8rem 0 1rem 0;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 1.6rem;
  width: 1.6rem;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 2px;
  background: var(
    --Linear,
    linear-gradient(90deg, #005dff 0%, #00a3ff 44.27%, #21ddff 100%)
  );
`;

const StyledText = styled.div`
  color: #090e24;
  font-family: "Poppins";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
`;

function GraphHeader() {
  return (
    <StyledGHeader>
      <StyledLogoContainer>
        <StyledLogo src={Location} />
        <StyledText>Crime</StyledText>
      </StyledLogoContainer>
      <StyledBorder />
    </StyledGHeader>
  );
}

export default GraphHeader;
