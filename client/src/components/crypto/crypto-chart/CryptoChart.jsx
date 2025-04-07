import { useEffect, useState } from "react"
import { Chart } from "react-google-charts"

export default function CryptoChart({ coinChartData }) {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];

        if (coinChartData.prices) {
            coinChartData.prices.map((item) => {
                const [date, price] = item;
                dataCopy.push([`${new Date(date).toLocaleDateString().slice(0, -5)}`, price])
            })
            setData(dataCopy);
        }

    }, [coinChartData])
    return (
        <Chart
            chartType="LineChart"
            data={data}
            height="100%"
            legendToggle
        />
    )
}