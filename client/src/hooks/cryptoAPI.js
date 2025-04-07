import { useState, useEffect } from "react";

import { BASE_URL } from "../constants/constants";
import http from "../utils/http";
import useCoinsContext from "./useCoinsContext";

export function useGetCoinDetails(coinId) {

    const [coinDetails, setCoinDetails] = useState({});
    const [isDetailsDataPending, setIsPending] = useState(true);
    const { currencyData } = useCoinsContext()
    useEffect(() => {

        http.get(`${BASE_URL}/coins/${coinId}`)
            .then(setCoinDetails)
            .finally(() => setIsPending(false));
    }, [currencyData.currency])


    return {
        coinDetails, isDetailsDataPending
    }
}

export function useGetCoinChartData(coinId) {
    const [isChartDataPending, setIsChartDataPending] = useState(true);
    const [coinChartData, setCoinChartData] = useState({ prices: [] });
    const { currencyData } = useCoinsContext()

    useEffect(() => {

        http.get(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currencyData.currency}&days=10&interval=daily`)
            .then(setCoinChartData)
            .finally(() => setIsChartDataPending(false))

    }, [currencyData])

    return {
        coinChartData, isChartDataPending
    }
}