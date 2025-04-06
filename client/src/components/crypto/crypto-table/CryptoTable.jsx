import CryptoTableItem from "../crypto-table-item/CryptoTableItem"
import useCoinsContext from "../../../hooks/useCoinsContext"

import styles from "../../crypto/CryptoTableStyles.module.css"

export default function CryptoTable() {

    const { coins, isPending } = useCoinsContext();
    console.log(coins, isPending)
    return <div className={styles["table"]}>
        <div className={styles["table-row"]}>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p>24H Change</p>
            <p className={styles["m-cap"]}>Market Cap</p>
        </div>
        <CryptoTableItem />
    </div>
}