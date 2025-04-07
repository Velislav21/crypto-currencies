import { Link } from "react-router"

import styles from "../../crypto/CryptoTableStyles.module.css"

import { formatNumber } from "../../../utils/formatNumber"
import useCoinsContext from "../../../hooks/useCoinsContext"

export default function CryptoTableItem({
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    market_cap_change_percentage_24h,
}) {

    const { currencyData } = useCoinsContext();

    const marketCapChangeStyles =
        market_cap_change_percentage_24h > 0 ? styles["price-movement-percentage-positive"]
            : styles["price-movement-percentage-negative"]

    return (
        <Link to={`/details/${id}`} className={styles["table-row"]}>
            <p>{market_cap_rank}</p>
            <div>
                <img src={image} alt="" />
                <p>{name} - {symbol}</p>
            </div>
            <p className={styles["price"]}>{currencyData.currencySymbol}{formatNumber(current_price)}</p>

            <p className={marketCapChangeStyles}>{market_cap_change_percentage_24h.toFixed(2)}%</p>

            <p className={styles["m-cap"]}>{currencyData.currencySymbol}{formatNumber(market_cap)}</p>
        </Link >
    )
}