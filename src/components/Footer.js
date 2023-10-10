import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 1.6rem;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 3.2rem);
`;

const ReportText = styled.div`
  color: #1463ff;
  font-family: "Poppins";
  font-size: 9px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.6rem;
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
  margin-bottom: 8px;
`;

const PageNum = styled.span`
  color: #626e99;
`;

function Footer() {
  return (
    <FooterContainer>
      <StyledBorder />
      <StyledFooter>
        <ReportText>Report Genereted on September 26, 2023</ReportText>
        <StyledText>
          RealAssist Property Report | Page 1 <PageNum>of 25</PageNum>
        </StyledText>
      </StyledFooter>
    </FooterContainer>
  );
}

export default Footer;
