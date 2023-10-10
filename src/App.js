import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Download from "./pages/Download";
import PdfContent from "./pages/PdfContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Download />} />
          <Route path="pdf-content" element={<PdfContent />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
