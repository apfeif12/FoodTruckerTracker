import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Utils/UserContext.js";

export default function AddTruck() {
    const [truck, setTruck] = useState({});
    const { push } = useHistory();
    const { user } = useContext(UserContext);

    const onChange = (e) => {
        setTruck({
            ...truck,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/trucks`, truck)
            .then((req) => {
                console.log(req);
            })
            .catch((err) => console.log(err))
            .then(() => {
                push(`/dashboard`);
            });
    };

    console.log(truck);

    const {
        truck_name,
        truck_description,
        open_time,
        close_time,
        cuisine,
        user_id,
    } = truck;

    return (
        <div>
            <div>
                <h1>Add Truck</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>
                                <h2>Truck Name</h2>
                                <input
                                    type="text"
                                    name="truck_name"
                                    onChange={onChange}
                                    value={truck_name}
                                    placeholder="Truck Name"
                                />
                            </label>
                            <label>
                                <h2>Truck Description</h2>
                                <input
                                    type="text"
                                    name="truck_description"
                                    onChange={onChange}
                                    value={truck_description}
                                    placeholder="Truck Description"
                                />
                            </label>
                            <label>
                                <h2>Open Time</h2>
                                <input
                                    type="time"
                                    name="open_time"
                                    onChange={onChange}
                                    value={open_time}
                                    placeholder="Open Time"
                                />
                            </label>
                            <label>
                                <h2>Close Time</h2>
                                <input
                                    type="time"
                                    name="close_time"
                                    onChange={onChange}
                                    value={close_time}
                                    placeholder="Close Time"
                                />
                            </label>
                            <label>
                                <h2>Cuisine</h2>
                                <input
                                    type="text"
                                    name="cuisine"
                                    onChange={onChange}
                                    value={cuisine}
                                    placeholder="Cuisine"
                                />
                            </label>
                            <label>
                                <h2>User ID</h2>
                                <input
                                    type="number"
                                    name="user_id"
                                    onChange={onChange}
                                    value={user_id}
                                    placeholder="User Id"
                                />
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
