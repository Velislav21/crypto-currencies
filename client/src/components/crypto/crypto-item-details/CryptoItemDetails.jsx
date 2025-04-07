import { useParams } from "react-router"
import { useGetCoinChartData, useGetCoinDetails } from "../../../hooks/cryptoAPI"
import { formatNumber } from "../../../utils/formatNumber";
import Spinner from "../../spinner/Spinner";

import styles from "./CryptoItemDetails.module.css"
import CryptoChart from "../crypto-chart/CryptoChart";

export default function CryptoItemDetails() {

    const { coinId } = useParams()
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
                            <li>$ {formatNumber(coinDetails.market_data.current_price.usd)}</li>
                            {/* switch currency */}
                        </ul>
                        <ul>
                            <li>Market Cap</li>
                            <li>$ {formatNumber(coinDetails.market_data.market_cap.usd)}</li>
                        </ul>
                        <ul>
                            <li>24H Hour High</li>
                            <li>$ {formatNumber(coinDetails.market_data.high_24h.usd)}</li>
                        </ul>
                        <ul>
                            <li>24H Hour Low</li>
                            <li>$ {formatNumber(coinDetails.market_data.low_24h.usd)}</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}