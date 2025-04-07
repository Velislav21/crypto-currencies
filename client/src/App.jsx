import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import CryptoItemDetails from "./components/crypto/crypto-item-details/CryptoItemDetails"
import { Route, Routes } from "react-router"

import { CoinsContextProvider } from "./context/CoinsContext"

function App() {
	return (
		<CoinsContextProvider>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:coinId" element={<CryptoItemDetails />} />

			</Routes>

			<Footer />
		</CoinsContextProvider>
	)
}

export default App
