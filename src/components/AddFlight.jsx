import axios from 'axios'
import React, { useState } from 'react'

const AddFlight = () => {

    const [input, changeInput] = useState(


        {

            flight_number: "",
             airline: "",
              origin: "",
              destination: "",
               departure_date:"",
               departure_time:"",
               arrival_time:"",
               fare:"",
               total_seats:"",
               available_seats:"",
               status:""

        }



    )
    const inputHandeler=(event)=>
    {

        changeInput({...input,[event.target.name]: event.target.value})

    }

    const readValue =()=>
    {


        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-flight",input).then(

            (response) =>{

                console.log(response.data)
                alert("Flight added suceessfully")
            }
        ).catch((error) => {
    console.log(error.response);
    console.log(error.response?.data);
    console.log(error.response?.status);
    alert("Failed to add Flight");
});


    }
  return (
    <div>

        <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Fligt Number</label>
                            <input type="text" className="form-control" name="flight_number" value={input.flight_number} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Airline</label>
                            <input type="text" className="form-control" name="airline" value={input.airline} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Origin</label><br></br>
                            <input type="text" className="form-control" name="origin" value={input.origin} onChange={inputHandeler} />
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Destination</label>
                            <input type="text" className="form-control"name="destination" value={input.destination} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Departure Date</label>
                            <input type="date" className="form-control" name="departure_date" value={input.departure_date} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Departure Time</label>
                            <input type="time" className="form-control" name="departure_time" value={input.departure_time} onChange={inputHandeler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Arrival Time</label>
                            <input type="time" className="form-control " name="arrival_time" value={input.arrival_time} onChange={inputHandeler}/>
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Fare</label>
                            <input type="number" className="form-control" name="fare" value={input.fare} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Total Seats</label>
                            <input type="number" className="form-control" name="total_seats" value={input.total_seats} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Available Seats</label>
                            <input type="number" className="form-control" name="available_seats" value={input.available_seats} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Status</label>
                            <select className="form-control" name="status" value={input.status} onChange={inputHandeler}>
                                <option value="Scheduled">Scheduled</option>
                                <option value="On time">On time</option>
                                <option value="Deleyed">Deleyed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>


                       


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>


    </div>
  )
}

export default AddFlight