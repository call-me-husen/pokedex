import "@styles/globals.css";
import "./style.css";

import { ReactNode } from "react";

import Header from "@components/organisms/Header";

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <div>
      <Header />
      <div className="templates-root-content">{children}</div>
    </div>
  );
}
