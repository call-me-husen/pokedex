import { fetchPokemonDetail } from "@services/pokemon";
import { useQuery } from "react-query";

interface IUsePokemonDetail {
  id: string;
}

export default function usePokemonDetail({ id }: IUsePokemonDetail) {
  return useQuery(["fetch-pokemon", id], () => {
    return fetchPokemonDetail({ id });
  });
}
