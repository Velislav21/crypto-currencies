import { Link } from "react-router"

import styles from "./Header.module.css"
import useCoinsContext from "../../hooks/useCoinsContext"


export default function Header() {

    const { setCurrencyData } = useCoinsContext();

    function setCurrencyDataHandler(event) {
        switch (event.target.value) {
            case "eur":
                setCurrencyData({ currency: "eur", currencySymbol: "€" });
                break;
            case "usd":
                setCurrencyData({ currency: "usd", currencySymbol: "$" });
                break;
            case "gbp":
                setCurrencyData({ currency: "gbp", currencySymbol: "£" });
                break;
        }
    }

    return (
        <header className={styles["header"]}>
            <Link to="/" className={styles["site-title"]}>Cryptocurrencies</Link>
            <ul className={styles["links-container"]}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className={styles["select-menu-container"]}>
                <select name="currency-menu" onChange={setCurrencyDataHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>
        </header>
    )
}