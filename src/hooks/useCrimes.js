import { useQuery } from "@tanstack/react-query";
import { getCrimes } from "../services/apiCrimes";

export default function useCrimes() {
  const {
    isLoading,
    data: crimes,
    error,
  } = useQuery({
    queryKey: ["crime"],
    queryFn: getCrimes,
  });

  return { isLoading, error, crimes };
}
