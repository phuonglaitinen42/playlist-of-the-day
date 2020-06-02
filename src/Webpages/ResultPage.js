import React, { useState, useEffect } from "react";
import axios from 'axios';
import NameCard from "../Components/NameCard/NameCard";


const ResultPage = () => {
    const [users, setUserName] = useState([]);
    

    useEffect(() => {
        axios
            .get('http://localhost.3001/usernames/')
            .then((response) => {
                setUserName(response.data);
                console.log(response.data);
            });
    }, []);

    const nameList = users.map((user) => {
        return (
            <NameCard
                key={user._id}
                username={user.username}
            />
        );
    });

    return (
        <div>
            {nameList}
        </div>

    );
};

export default ResultPage;