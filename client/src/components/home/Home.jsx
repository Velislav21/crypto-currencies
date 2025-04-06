import CryptoTable from "../crypto/crypto-table/CryptoTable";
import HeroSection from "../hero-section/HeroSection";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <HeroSection />
            <CryptoTable />
        </>
    )
}