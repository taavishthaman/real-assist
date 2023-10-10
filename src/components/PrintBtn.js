import styled from "styled-components";
import Printer from "../assets/icons/printer.svg";
import { useNavigate } from "react-router-dom";

const StyledBtn = styled.div`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 5.6rem;
  width: 10.9rem;
  background-color: #090e24;
  border-radius: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const StyledText = styled.div`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-style: normal;
  font-weight: 600;
  font-family: "Cabin";
  color: #fff;
`;

const StyledIcon = styled.img``;

function PrintBtn() {
  const navigate = useNavigate();
  return (
    <StyledBtn
      onClick={() => {
        navigate("/pdf-content");
      }}
    >
      <StyledIcon src={Printer} />
      <StyledText>Print</StyledText>
    </StyledBtn>
  );
}

export default PrintBtn;
