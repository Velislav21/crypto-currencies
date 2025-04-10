import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import CryptoItemDetails from "./components/crypto/crypto-item-details/CryptoItemDetails"
import About from "./components/about/About"

import { CoinsContextProvider } from "./context/CoinsContext"
import { Route, Routes } from "react-router"

function App() {
	return (
		<CoinsContextProvider>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:coinId" element={<CryptoItemDetails />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>

			<Footer />
		</CoinsContextProvider>
	)
}

export default App
