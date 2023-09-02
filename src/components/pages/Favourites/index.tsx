"use client";

import PokemonCard from "@components/molecules/PokemonCard";
import RootLayout from "@components/templates/Root";
import useFavourite from "@hooks/state/useFavourite";
import { useMemo } from "react";

export default function Favourites(): JSX.Element {
  const { favourite } = useFavourite();

  const favouriteIds = useMemo(
    () => favourite?.map((item: any) => item?.id),
    [favourite]
  );

  const isEmpty = useMemo(() => favouriteIds?.length === 0, [favouriteIds]);
  return (
    <RootLayout>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-center text-2xl">Favourites Pokemon</h1>
        {isEmpty ? (
          <p className="text-center text-xl text-primary">
            Favourites pokemon is empty
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {favourite?.map((pokemon: any) => (
                <PokemonCard
                  key={pokemon?.id}
                  name={pokemon?.name}
                  favourite={favouriteIds?.includes(pokemon?.id)}
                  sprites={pokemon?.sprites?.other?.dream_world?.front_default}
                  id={pokemon?.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
}
