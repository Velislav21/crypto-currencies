import { Link } from "react-router"

import styles from "./Header.module.css"


export default function Header() {
    return (
        <header className={styles["header"]}>
            <Link to="/" className={styles["site-title"]}>Cryptocurrencies</Link>
            <ul className={styles["links-container"]}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="#">Unknown</Link></li>
            </ul>
            <div className={styles["select-menu-container"]}>
                <select name="currency-menu">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="bgn">BGN</option>
                </select>
            </div>
        </header>
    )
}