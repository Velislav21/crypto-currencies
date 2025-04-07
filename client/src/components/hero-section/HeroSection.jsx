import styles from "./HeroSection.module.css"

export default function HeroSection({ submitSearchHandler, changeInputHandler }) {
    return (
        <>
            <div className={styles["hero-section"]}>
                <h1>Cryptocurrencies List</h1>
                <p>Welcome to the largest crypto marketplace</p>
                <form onSubmit={submitSearchHandler}>
                    <input
                        required
                        type="text"
                        placeholder="Search crypto"
                        onChange={changeInputHandler}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}