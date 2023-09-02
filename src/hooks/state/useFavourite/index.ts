import { FavouriteStateContext } from "@context/FavouriteState";
import { useContext } from "react";

export default function useFavourite() {
  const context = useContext(FavouriteStateContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }

  return context;
}
