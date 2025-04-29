# Cryptocurrencies Catalog App

A modern React application to browse and visualize cryptocurrency data, powered by the [CoinGecko API](https://www.coingecko.com/en/api).  
State management is handled with React Context API and custom hooks. Interactive charts are rendered using [react-google-charts](https://react-google-charts.com/).  
The application have mobile styles currently only for 360x800 dimensions. <br>
The application is hosted on [Render](https://crypto-currencies-dtbl.onrender.com/).

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)
![Context API](https://img.shields.io/badge/Context%20API-20232A?logo=react&logoColor=61DAFB&style=flat-square)
![Custom Hooks](https://img.shields.io/badge/Custom%20Hooks-61DAFB?logo=react&logoColor=black&style=flat-square)
![react-google-charts](https://img.shields.io/badge/react--google--charts-4285F4?logo=googlecharts&logoColor=white&style=flat-square)
![CoinGecko API](https://img.shields.io/badge/CoinGecko%20API-4caf50?logo=coingecko&logoColor=white&style=flat-square)
![Render](https://img.shields.io/badge/Hosted%20on-Render-46e3b7?logo=render&logoColor=white&style=flat-square)

---

## ✨ Features

- Browse a catalog of cryptocurrencies with real-time data
- Search coins by name
- View detailed information and price charts for each coin
- Charts powered by Google Charts
- Responsive and modern UI
- State management with Context API and custom hooks

---

## 🛠️ Getting Started

## Running the Application

**Prerequisites:**  
- [Node.js](https://nodejs.org/) and npm installed

### Steps

1. Open your terminal.
2. Navigate to the `client` folder:
    ```sh
    cd client
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```
    The app should now be running at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Troubleshooting

- If you get an error about missing dependencies, make sure you ran `npm install` in the correct folder.
- If the port is already in use, stop other running servers or change the port in your config.
