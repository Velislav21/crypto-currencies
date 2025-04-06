import { useState, useEffect } from "react";

import { BASE_URL } from "../../constants/constants";
import http from "../../utils/http";

export function useGetCoins() {

    const [coins, setCoins] = useState([]);
    const [isPending, setIsPending] = useState(true);

    // useEffect(() => {
    //     console.log('it works')
    //     http.get(`${BASE_URL}/coins/markets?vs_currency=${"usd"}`) // !todo make it dynamic
    //         .then(setCoins)
    //         .finally(() => setIsPending(false));
    // }, [])

    return {
        coins, setCoins, isPending
    }

}