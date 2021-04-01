import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Utils/UserContext.js";
import styled from "styled-components";

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
                <StyledH1>Add Truck</StyledH1>
                <FormDiv>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>
                                <StyledH2>Truck Name</StyledH2>
                                <input
                                    type="text"
                                    name="truck_name"
                                    onChange={onChange}
                                    value={truck_name}
                                    placeholder="Truck Name"
                                />
                            </label>
                            <label>
                                <StyledH2>Truck Description</StyledH2>
                                <input
                                    type="text"
                                    name="truck_description"
                                    onChange={onChange}
                                    value={truck_description}
                                    placeholder="Truck Description"
                                />
                            </label>
                            <label>
                                <StyledH2>Open Time</StyledH2>
                                <input
                                    type="time"
                                    name="open_time"
                                    onChange={onChange}
                                    value={open_time}
                                    placeholder="Open Time"
                                />
                            </label>
                            <label>
                                <StyledH2>Close Time</StyledH2>
                                <input
                                    type="time"
                                    name="close_time"
                                    onChange={onChange}
                                    value={close_time}
                                    placeholder="Close Time"
                                />
                            </label>
                            <label>
                                <StyledH2>Cuisine</StyledH2>
                                <input
                                    type="text"
                                    name="cuisine"
                                    onChange={onChange}
                                    value={cuisine}
                                    placeholder="Cuisine"
                                />
                            </label>
                            <label>
                                <StyledH2>User ID</StyledH2>
                                <input
                                    type="number"
                                    name="user_id"
                                    onChange={onChange}
                                    value={user_id}
                                    placeholder="User Id"
                                />
                            </label>
                        </div>
                        <StyledButton type="submit">Submit</StyledButton>
                    </form>
                </FormDiv>
            </div>
        </div>
    );
}


const StyledButton = styled.button`
    background-color: rgba(9, 113, 121, 1);
    width: 100%;
    margin-top: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 15px 75px 15px 75px;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
    }
`;

const StyledH1 = styled.h1`
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 3px;
    color: #b7b6c2;
    opacity: 0.4;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const StyledH2 = styled.h1`
    font-weight: 600;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 3px;
    color: #4d4f51;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const FormDiv = styled.div`
    background-color: rgba(82, 45, 128, 0.08);
    width: 30%;
    border-radius: 8px;
    margin: auto;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    border: 1px solid black;

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid black;
    }

    h2 {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
    }
    p {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        color: red;
    }
`;