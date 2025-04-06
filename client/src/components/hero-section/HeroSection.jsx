import styles from "./HeroSection.module.css"

export default function HeroSection() {
    return (
        <>
            <div className={styles["hero-section"]}>
                <h1>Cryptocurrencies List</h1>
                <p>Welcome to the largest crypto marketplace</p>
                <form>
                    <input
                        type="text"
                        placeholder="Search crypto"
                    />
                    <button>Search</button>
                </form>
            </div>
        </>
    )
}