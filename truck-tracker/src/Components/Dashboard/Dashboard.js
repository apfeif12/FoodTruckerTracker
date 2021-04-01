import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import styled from "styled-components";

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
        <FormDiv>
            <StyledH1>Dashboard</StyledH1>
            <StyledButton>
                <Link to="/addtruck">Add Truck</Link>
            </StyledButton>
            <StyledH2>Trucks</StyledH2>
            <div>
                {trucks.map((item) => {
                    return (
                        <div>
                            <StyledH3>{item.truck_name}</StyledH3>
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
        </FormDiv>
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
    text-align: center;

    &:hover {
        opacity: 0.7;
    }
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
        color: black;
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

const StyledH3 = styled.h1`
    font-weight: 600;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 3px;
    color: #4d4f51;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    text-decoration: underline;
`;
