import { Link } from "react-router"

import styles from "../../crypto/CryptoTableStyles.module.css"

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
    return <Link to="#" className={styles["table-row"]}>
        <p>1</p>
        <div>
            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
            <p>Bitcoin - btc</p>
        </div>
        <p>$ 82,000</p>
        <p className={styles["price-movement-percentage"]}>-0.69</p>
        <p className={styles["m-cap"]}>$ 1,600,000,000</p>
    </Link >
}