"use client";
import "./style.css";

import { usePathname } from "next/navigation";
import Link from "@components/atoms/Link";
import HamburgerMenu from "@components/molecules/HamburgerMenu";

const LINKS = [
  {
    href: "/",
    label: "Directory",
  },
  {
    href: "/favourites",
    label: "Favourites",
  },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="organisms-header flex items-center justify-between p-8">
      <p className="text-3xl text-primary">Pokédex</p>
      <div className="flex gap-8">
        {LINKS.map(({ href, label }) => (
          <div key={href} className="hidden md:block">
            <Link active={href === pathname} href={href} label={label} />
          </div>
        ))}
        <div className="md:hidden">
          <HamburgerMenu menus={LINKS} current={pathname} />
        </div>
      </div>
    </div>
  );
}
