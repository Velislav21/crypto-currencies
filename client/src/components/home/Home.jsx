import CryptoTable from "../crypto/crypto-table/CryptoTable";
import HeroSection from "../hero-section/HeroSection";
import useCoinsContext from "../../hooks/useCoinsContext";
import { useEffect, useState } from "react";

export default function Home() {

    const { coins, isPending } = useCoinsContext();

    const [coinsToBeDisplayed, setCoinsToBeDisplayed] = useState([]);
    const [inputValue, setInputValue] = useState("")

    useEffect(() => setCoinsToBeDisplayed(coins), [coins])

    function submitSearchHandler(e) {
        e.preventDefault();

        const searchedCoins = coins.filter((coin) => {
            return coin.name.toLowerCase().includes(inputValue.toLowerCase());
        });

        setCoinsToBeDisplayed(searchedCoins);
    }

    function changeInputHandler(e) {
        const inputValue = e.target.value;

        setInputValue(inputValue)
        if (inputValue === "") {
            setCoinsToBeDisplayed(coins);
        }
    }

    return (
        <>
            <HeroSection
                submitSearchHandler={submitSearchHandler}
                changeInputHandler={changeInputHandler} />

            <CryptoTable
                coins={coinsToBeDisplayed}
                isPending={isPending}
            />
        </>
    )
}