import { createContext, useState, useEffect } from "react";

import { BASE_URL } from "../constants/constants";
import http from "../utils/http";

export const CoinsContext = createContext();

export function CoinsContextProvider({ children }) {

    const [coins, setCoins] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [currencyData, setCurrencyData] = useState({ currency: "usd", currencySymbol: "$" })

    useEffect(() => {
        http.get(`${BASE_URL}/coins/markets?vs_currency=${currencyData.currency}`) // !todo make it dynamic
            .then(coins => setCoins(coins))
            .finally(() => setIsPending(false));
    }, [currencyData])

    return (
        <CoinsContext.Provider value={{ coins, isPending, currencyData, setCurrencyData }}>
            {children}
        </CoinsContext.Provider>
    )
} 