"use client";

import Pagination from "@components/molecules/Pagination";
import PokemonCard from "@components/molecules/PokemonCard";
import RootLayout from "@components/templates/Root";
import usePokemon from "@hooks/query/usePokemon";
import useFavourite from "@hooks/state/useFavourite";
import { useMemo, useState } from "react";

export default function Home(): JSX.Element {
  const [page, setPage] = useState(1);
  const { isLoading, data } = usePokemon({ page });

  const { favourite } = useFavourite();

  const favouriteIds = useMemo(
    () => favourite?.map((item: any) => item?.id),
    [favourite]
  );
  return (
    <RootLayout>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-center text-2xl">Pokemon Directory</h1>
        {isLoading ? (
          <p className="text-center text-xl text-primary">Loading...</p>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data?.data?.map((pokemon: any) => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  favourite={favouriteIds?.includes(pokemon.id)}
                  sprites={pokemon.sprites.other.dream_world.front_default}
                  id={pokemon.id}
                />
              ))}
            </div>
            <Pagination
              totalPage={data?.meta?.totalPage}
              currentPage={page}
              onChange={setPage}
            />
          </div>
        )}
      </div>
    </RootLayout>
  );
}
