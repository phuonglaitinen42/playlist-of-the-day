import React from "react";
import Username from "../Components/Username/Username";

const WelcomePage = () => {
    return (
        <div>
            <div className="App-header">
                <h2>Find what playlist fits your feeling</h2>
            </div>
            <Username />
        </div>
    );
};

export default WelcomePage;