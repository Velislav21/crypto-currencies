import { Link } from "react-router"
import styles from "./About.module.css";

export default function About() {

    return (

        <div className={styles["about"]}>
            <p>The application uses the <Link to="https://www.coingecko.com/en/api">CoinGecko API.</Link>
                Since the application is using the free demo API key there are some limitations.
                To make sure the app doesn't run out of requests.
                When searching for a coin the app won't send a request but rather check if the string
                matches anything stored in the context API.
            </p>
        </div>

    )

}