import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import DateSelected from "./components/dateSelected/DateSelected";
import Cards from "./components/cards/Cards";

function App() {
    return (
        <div className="App">
            <Header />
            <DateSelected />
            <Cards />
        </div>
    );
}

export default App;
