import { Dispatch, ReactNode, createContext, useState } from "react";

export const FavouriteStateContext = createContext<
  { favourite: any; setFavourite: Dispatch<any> } | undefined
>(undefined);

export default function FavouriteStateProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [favourite, setFavourite] = useState([]);

  const value = {
    favourite,
    setFavourite,
  };

  return (
    <FavouriteStateContext.Provider value={value}>
      {children}
    </FavouriteStateContext.Provider>
  );
}
