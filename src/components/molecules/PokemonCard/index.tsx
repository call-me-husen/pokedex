import Button from "@components/atoms/Button";
import "./style.css";

import Card from "@components/atoms/Card";
import { Star, StarSolid } from "@components/atoms/Icon";
import Image from "next/image";
import Link from "next/link";

interface IPokemonCard {
  id: number;
  name: string;
  sprites: string;
  favourite?: boolean;
}

export default function PokemonCard({
  id,
  name,
  sprites,
  favourite,
}: IPokemonCard): JSX.Element {
  return (
    <Link
      href={`/${name}`}
      prefetch
      className="molecules-pokemon-card container"
    >
      <Card>
        <div className="flex flex-col gap-0 relative">
          <div className="molecules-pokemon-card star absolute top-0 right-0 text-primary z-10">
            {favourite ? <StarSolid /> : <Star />}
          </div>
          <div className="molecules-pokemon-card sprite relative">
            <Image
              alt={name}
              src={sprites}
              width={100}
              height={100}
              className="molecules-pokemon-card"
            />
          </div>
          <div className="molecules-pokemon-card flex flex-col info">
            <p className="text-lg capitalize font-medium">{name}</p>
            <p className="text-sm text-neutral-500">#{id}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
