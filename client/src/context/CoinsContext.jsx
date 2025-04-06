import { createContext } from "react";
import { useGetCoins } from "../hooks/coinsAPI/useGetCoins";

export const CoinsContext = createContext();

export function CoinsContextProvider({ children }) {

    const { coins, isPending, setCoins } = useGetCoins();
    console.log(coins, isPending)
    return (
        <CoinsContext.Provider value={{ coins, isPending }}>
            {children}
        </CoinsContext.Provider>
    )
} 