import { useParams } from "react-router"

import { useGetCoinChartData, useGetCoinDetails } from "../../../hooks/cryptoAPI"
import { formatNumber } from "../../../utils/formatNumber";

import styles from "./CryptoItemDetails.module.css"

import Spinner from "../../spinner/Spinner";
import CryptoChart from "../crypto-chart/CryptoChart";
import useCoinsContext from "../../../hooks/useCoinsContext";

export default function CryptoItemDetails() {

    const { coinId } = useParams()
    const { currencyData } = useCoinsContext();
    const { coinDetails, isDetailsDataPending } = useGetCoinDetails(coinId);
    const { coinChartData, isChartDataPending } = useGetCoinChartData(coinId)
    return (
        <>
            {isDetailsDataPending || isChartDataPending ? <Spinner />
                :
                <div className={styles["details-container"]}>
                    <div className={styles["coin-name"]}>
                        <img src={coinDetails.image.large} alt="" />
                        <p>{coinDetails.name} ({coinDetails.symbol.toUpperCase()})</p>
                    </div>
                    <div className={styles["chart-container"]}>
                        <CryptoChart
                            coinChartData={coinChartData}
                        />
                    </div>
                    <div className={styles["coin-details"]}>
                        <ul>
                            <li>Crypto Market Rank</li>
                            <li>{coinDetails.market_cap_rank}</li>
                        </ul>
                        <ul>
                            <li>Current Price</li>
                            <li>{currencyData.currencySymbol} {formatNumber(coinDetails.market_data.current_price[currencyData.currency])}</li>
                            {/* switch currency */}
                        </ul>
                        <ul>
                            <li>Market Cap</li>
                            <li>{currencyData.currencySymbol} {formatNumber(coinDetails.market_data.market_cap[currencyData.currency])}</li>
                        </ul>
                        <ul>
                            <li>24H Hour High</li>
                            <li>{currencyData.currencySymbol} {formatNumber(coinDetails.market_data.high_24h[currencyData.currency])}</li>
                        </ul>
                        <ul>
                            <li>24H Hour Low</li>
                            <li>{currencyData.currencySymbol} {formatNumber(coinDetails.market_data.low_24h[currencyData.currency])}</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}