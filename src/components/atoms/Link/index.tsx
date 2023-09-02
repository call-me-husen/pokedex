"use client";

import NextLink from "next/link";

interface ILinkProps {
  href: string;
  label: string;
  active?: boolean;
}

function Link({ href, label, active }: ILinkProps): JSX.Element {
  return (
    <NextLink
      href={href}
      className={[
        "atoms-link text-xl cursor-pointer hover:text-primary",
        active ? "underline" : "",
      ].join(" ")}
    >
      {label}
    </NextLink>
  );
}

export default Link;
