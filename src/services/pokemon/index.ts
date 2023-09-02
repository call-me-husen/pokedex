import { BASE_URL } from "@config/constants";

interface IFetchPokemonReq {
  page: number;
  limit?: number;
}

interface IFetchPokemonDetailReq {
  id: string;
}

export async function fetchPokemonDetail({ id }: IFetchPokemonDetailReq) {
  try {
    const res = await fetch(`api/pokemon/${id}`);

    const { status, data } = await res.json();

    if (status === 200) {
      return { ...data };
    }

    throw new Error("Error");
  } catch {
    throw new Error("Error");
  }
}

export async function fetchPokemon({ page, limit }: IFetchPokemonReq) {
  try {
    const res = await fetch(`api/pokemon?page=${page}&limit=${limit}`);

    const { status, data } = await res.json();

    if (status === 200) {
      const allData = await Promise.all(
        data?.data?.map((item: any) => fetchPokemonDetail({ id: item?.name }))
      );

      return {
        meta: data?.meta,
        data: allData,
      };
    }

    throw new Error("Error");
  } catch {
    throw new Error("Error");
  }
}
