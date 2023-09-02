"use client";

import FavouriteStateProvider from "@context/FavouriteState";
import "@styles/globals.css";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <FavouriteStateProvider>
          <QueryClientProvider client={queryClient}>
            <>
              {children}
              <div id="modal-root"></div>
            </>
          </QueryClientProvider>
        </FavouriteStateProvider>
      </body>
    </html>
  );
}
