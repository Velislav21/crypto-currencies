import { useContext } from "react";
import { CoinsContext } from "../context/CoinsContext";

export default function useCoinsContext() {

    const coinsContext = useContext(CoinsContext);

    return coinsContext;
}