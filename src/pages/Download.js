import PrintBtn from "../components/PrintBtn";
import styled from "styled-components";

const DownloadContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Download() {
  return (
    <DownloadContainer>
      <PrintBtn />
    </DownloadContainer>
  );
}

export default Download;
