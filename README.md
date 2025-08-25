# Cryptoworld

## Crypto Price Tracker App

Application built with React and leveraging modern web technologies to visualize real-time and historical crypto prices.

Welcome to the **Crypto Price Tracker** project repository! This  application is built with **React JS**, utilizing **Redux Toolkit**, **AntDesign**, **ChartJS**, and ** API** to display current and historical price data for various cryptocurrencies.

Check out [Live site](https://fraanfx-cryptoworld.netlify.app/).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Crypto Price Tracker DApp** provides users with real-time cryptocurrency prices and interactive historical charts. It ensures a seamless experience with a clean UI and dynamic data fetched from Rapid API.

## Features

- Real-time price updates for multiple cryptocurrencies.
- Interactive historical price charts.
- Clean and responsive UI with AntDesign components.
- State management using Redux Toolkit for efficient data handling.
- Integration with Rapid API for live and historical data.

## Getting Started

Follow these steps to set up the project locally and start tracking crypto prices in real-time.

### Prerequisites

1. **Node.js**: Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).
2. **Rapid API Key**: Create an account at [Rapid API](https://rapidapi.com/) and obtain your API key for crypto price data.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fraanfx/cryptoworld.git
    ```

2. Navigate to the project frontend directory:

    ```bash
    cd cryptoworld
    ```

3. Install required npm packages:

    ```bash
    npm install
    ```

4. Add your Rapid API key in the project’s environment variables:

    ```bash
    echo "REACT_APP_RAPID_API_KEY=your_api_key_here" > .env
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to access the DApp.

3. Browse current prices, select cryptocurrencies, and view historical price charts.

## Technologies

- **React.js**: Builds the dynamic user interface.
- **Redux Toolkit**: Manages application state and asynchronous data calls.
- **AntDesign**: Provides UI components for a professional and responsive look.
- **Chart.js**: Renders interactive and customizable price charts.
- **Rapid API**: Source for real-time and historical crypto price data.

## Frontend

The frontend is designed with a focus on usability and real-time responsiveness:

- **React.js** with functional components and hooks.
- **AntDesign** for pre-styled components and design consistency.
- **Chart.js** for dynamic historical data visualization.
- **Redux Toolkit** for handling API calls, caching, and state.


---

Thank you for checking out the **Cryptoworld** project! For questions or suggestions, feel free to reach out or open an issue on GitHub. 🚀

