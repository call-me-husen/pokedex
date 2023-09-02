"use client";
import "./style.css";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Close } from "@components/atoms/Icon";
import Button from "@components/atoms/Button";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: IModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (!isOpen) return <></>;
  const container: Element = document.getElementById("modal-root") as never;
  return createPortal(
    <div className="atoms-modal container">
      <div className="atoms-modal overlay bg-neutral-900" />
      <div
        className={[
          "atoms-modal wrapper bg-neutral-100 text-black",
          isOpen ? "open" : "close",
        ].join(" ")}
      >
        <div className="atoms-modal close-wrapper">
          <Button variant="plain" onClick={onClose}>
            <div className="text-black">
              <Close />
            </div>
          </Button>
        </div>
        <p className="text-xl font-semi-bold">{title}</p>
        {children}
      </div>
    </div>,
    container
  );
}
