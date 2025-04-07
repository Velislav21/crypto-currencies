import { useState, useEffect } from "react";

import { BASE_URL } from "../constants/constants";
import http from "../utils/http";

export function useGetCoinDetails(coinId) {

    const [coinDetails, setCoinDetails] = useState({});
    const [isDetailsDataPending, setIsPending] = useState(true);

    useEffect(() => {

        http.get(`${BASE_URL}/coins/${coinId}`)
            .then(setCoinDetails)
            .finally(() => setIsPending(false));
    }, [])


    return {
        coinDetails, isDetailsDataPending
    }
}

export function useGetCoinChartData(coinId) {
    const [isChartDataPending, setIsChartDataPending] = useState(true);
    const [coinChartData, setCoinChartData] = useState({ prices: [] });

    useEffect(() => {

        http.get(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=daily`)
            .then(setCoinChartData)
            .finally(() => setIsChartDataPending(false))

    }, [])

    return {
        coinChartData, isChartDataPending
    }
}