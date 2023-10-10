import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GraphHeader from "../components/GraphHeader";
import Graph from "../components/Graph";
import useCrimes from "../hooks/useCrimes";

import { usePDF } from "react-to-pdf";
import { useEffect, useState } from "react";

const StyledPage = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1.6rem;
`;

function PdfContent() {
  const { isLoading, crimes } = useCrimes();
  const { toPDF, targetRef } = usePDF({
    filename: "report.pdf",
  });
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!isLoading && !downloaded) {
      setTimeout(() => {
        toPDF();
        setDownloaded(true);
      }, 1500);
    }
  }, [isLoading, toPDF, downloaded]);
  return (
    <StyledPage ref={targetRef}>
      <Header />
      <GraphHeader />
      <Graph crimes={crimes} />
      <Footer />
    </StyledPage>
  );
}

export default PdfContent;
