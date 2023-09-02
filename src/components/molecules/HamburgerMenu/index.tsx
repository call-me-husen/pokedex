import Button from "@components/atoms/Button";
import Bars3 from "@components/atoms/Icon/Bars3";
import Modal from "@components/molecules/Modal";
import Link from "next/link";
import { useState } from "react";

interface IHamburgerMenuProps {
  menus: Array<{
    href: string;
    label: string;
  }>;
  current: string;
}
export default function HamburgerMenu({
  menus,
  current,
}: IHamburgerMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button variant="plain" onClick={() => setIsOpen(true)}>
        <Bars3 />
      </Button>
      <Modal title="Menu" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-4">
          {menus.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "text-lg",
                href === current ? "text-primary" : "",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </div>
      </Modal>
    </div>
  );
}
