import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GraphHeader from "../components/GraphHeader";
import Graph from "../components/Graph";
import useCrimes from "../hooks/useCrimes";

import { usePDF } from "react-to-pdf";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const StyledPage = styled.div`
  height: 125rem;
  width: 895px;
  margin: 0 auto;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function PdfContent() {
  const { isLoading, crimes } = useCrimes();
  const { toPDF, targetRef } = usePDF({
    filename: "report.pdf",
  });
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!isLoading && !downloaded) {
      toPDF();
      setDownloaded(true);
    }
  }, [isLoading, toPDF, downloaded]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledPage ref={targetRef}>
      <div>
        <Header />
        <GraphHeader />
        <Graph crimes={crimes} />
      </div>
      <Footer />
    </StyledPage>
  );
}

export default PdfContent;
