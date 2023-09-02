import { fetchPokemon } from "@services/pokemon";
import { useQuery } from "react-query";

interface IUsePokemon {
  page: number;
  limit?: number;
}

export default function usePokemon({ page, limit }: IUsePokemon) {
  return useQuery(["fetch-pokemon", page, limit], () => {
    return fetchPokemon({ page, limit });
  });
}
