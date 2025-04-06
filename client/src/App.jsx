import Header from "./components/header/Header"
import Home from "./components/home/Home"

import { CoinsContextProvider } from "./context/CoinsContext"

function App() {
	return (
		<CoinsContextProvider>
			<Header />
			<Home />
		</CoinsContextProvider>
	)
}

export default App
