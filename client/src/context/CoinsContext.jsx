import { createContext } from "react";
import { useGetCoins } from "../hooks/cryptoAPI";

export const CoinsContext = createContext();

export function CoinsContextProvider({ children }) {

    const { coins, isPending, setCoins } = useGetCoins();
    return (
        <CoinsContext.Provider value={{ coins, isPending }}>
            {children}
        </CoinsContext.Provider>
    )
} 