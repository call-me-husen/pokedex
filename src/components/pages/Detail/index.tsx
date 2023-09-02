"use client";
import Card from "@components/atoms/Card";
import { ArrowLeft } from "@components/atoms/Icon";
import InfoCard from "@components/organisms/InfoCard";
import RootLayout from "@components/templates/Root";
import usePokemonDetail from "@hooks/query/usePokemonDetail";
import useFavourite from "@hooks/state/useFavourite";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";

export default function Detail({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const { id } = params;
  const { isLoading, data, isError, isSuccess } = usePokemonDetail({ id });
  const { favourite, setFavourite } = useFavourite();
  const isFavourite = useMemo(
    () => favourite?.findIndex((item: any) => item?.name === id) !== -1,
    [favourite, id]
  );

  const stats = useMemo(() => {
    return data?.stats?.map((item: any) => ({
      title: item?.stat?.name,
      content: item?.base_stat,
    }));
  }, [data]);

  const abilities = useMemo(() => {
    return data?.abilities?.map((item: any) => {
      const isHidden = item?.is_hidden;
      const title = `${item?.ability?.name} ${isHidden ? "(Hidden)" : ""}`;

      return {
        title,
        content: item?.slot,
      };
    });
  }, [data]);

  const types = useMemo(() => {
    return data?.types?.map((item: any) => ({
      title: "types",
      content: item?.type?.name,
    }));
  }, [data]);

  const moves = useMemo(() => {
    return data?.moves?.map((item: any) => ({
      title: "moves",
      content: item?.move?.name,
    }));
  }, [data]);

  const addToFavourite = useCallback(() => {
    const newValue = [...favourite, data];
    setFavourite(newValue);
  }, [data, favourite, setFavourite]);

  const removeFromFavourite = useCallback(() => {
    const idx = favourite?.findIndex((item: any) => item?.name === id);
    const newValue = [
      ...favourite?.slice(0, idx),
      ...favourite?.slice(idx + 1),
    ];
    setFavourite(newValue);
  }, [favourite, id, setFavourite]);

  const onAction = useCallback(() => {
    if (isFavourite) {
      removeFromFavourite();
    } else {
      addToFavourite();
    }
  }, [addToFavourite, isFavourite, removeFromFavourite]);
  return (
    <RootLayout>
      <div className="flex flex-col justify-center gap-6">
        <div className="flex justify-between items-center">
          <Link href="/" prefetch={false}>
            <ArrowLeft />
          </Link>
          <h1 className="text-center text-2xl">Pokemon Detail</h1>
        </div>
        {isLoading && (
          <p className="text-center text-xl text-primary">Loading...</p>
        )}
        {isError && (
          <p className="text-center text-xl text-primary py-8">
            Oh No, something went wrong or your pokemon is missing!.
          </p>
        )}
        {isSuccess && (
          <div className="grid grid-flow-row md:grid-cols-12 gap-4">
            <div className="md:col-span-4 flex flex-col gap-4">
              <Card>
                <Image
                  src={data?.sprites?.other?.dream_world?.front_default}
                  alt="X"
                  width={250}
                  height={250}
                  className=" mx-auto"
                />
              </Card>
              <InfoCard
                title="BASIC INFO"
                info={[
                  { title: "ID", content: data?.id },
                  { title: "Name", content: data?.name },
                  { title: "Species", content: data?.species?.name },
                  { title: "EXP", content: data?.base_experience },
                  { title: "Height", content: data?.height },
                  { title: "Weight", content: data?.weight },
                ]}
                footer={
                  <button
                    className="bg-primary px-4 py-2 w-full rounded"
                    onClick={onAction}
                  >
                    {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
                  </button>
                }
              />
              <InfoCard title="TYPES" info={types} variant="list" />
            </div>
            <div className="md:col-span-8 flex flex-col gap-4">
              <InfoCard title="STATS" info={stats} />
              <InfoCard title="ABILITIES SLOT" info={abilities} />
              <InfoCard title="MOVES" info={moves} variant="list" />
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
}
