import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";

export default function DinerDashboard() {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get(`/trucks`)
            .then((res) => {
                setTrucks(res.data);
                console.log("trucks", res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <button>
                <Link to="/addtruck">Add Truck</Link>
            </button>
            <h2>Trucks</h2>
            <div>
                {trucks.map((item) => {
                    return (
                        <div>
                            <h3>{item.truck_name}</h3>
                            <p>Description: {item.truck_description}</p>
                            <p>Cuisine type: {item.cuisine}</p>
                            <p>Open Time: {item.open_time}</p>
                            <p>Close Time: {item.close_time}</p>
                            <p># of Ratings: {item.number_of_ratings}</p>
                            <p>Average Ratings: {item.truck_avg_rating}</p>
                            <p>Truck ID: {item.truck_id}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
