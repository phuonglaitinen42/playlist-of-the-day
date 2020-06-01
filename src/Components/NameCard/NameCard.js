import React, { useState, useEffect } from "react";
import axios from 'axios'

const NameCard = () => {
    const [dailyUser, setName] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/usernames/' )
            .then((response) => {
                setName(response.data);
            });
    }, []);

    return (
        <div>
            {dailyUser.map(user => (
                <div key={user._id}>
                    {user.username}, {" "}
                </div>
            ))}
        </div>
    );
};

export default NameCard;