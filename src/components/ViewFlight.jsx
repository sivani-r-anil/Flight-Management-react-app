import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewFlight = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/flights").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            <NavigationBar/>
            <h2 style={{ color: "#1565C0", textAlign: "center", fontFamily: "Montserrat" }}>
                ✈️ View Flights</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Flight No</th>
                        <th scope="col">Airline</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Date</th>
                        <th scope="col">Departure</th>
                        <th scope="col">Arrival</th>
                        <th scope="col">Fare</th>
                        <th scope="col">Availabele Seats</th>
                        <th scope="col">Status</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.flight_number}</td>
                                    <td>{data.airline}</td>
                                    <td>{data.origin}</td>
                                    <td>{data.destination}</td>
                                    <td>{data.departure_date}</td>
                                    <td>{data.departure_time}</td>
                                    <td>{data.arrival_time}</td>
                                    <td>{data.fare}</td>
                                    <td>{data.available_seats}</td>
                                    <td>{data.status}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>

        </div>
    )
}

export default ViewFlight