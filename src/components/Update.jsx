import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { base_url, end_point } from '../api/api_Url';
const Update = () => {
    let { productId } = useParams();
    let navigate = useNavigate();
    let api = base_url + end_point.booking + `/${productId}`
    let [inputState, setState] = useState(null)
    useEffect(()=>{
     getData();
    },[])
    const getData=()=>{
        axios.get(api)
        .then((res)=>{
             console.log(res.data)
             setState(res.data)
        })
        .catch()
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Received Data", inputState);
        let formValue = {
            RoomType: inputState.RoomType,
            arrival: inputState.arrival,
            departure: inputState.departure,
            travel: inputState.travel,
            NoOfGuest: inputState.NoOfGuest,
            GuestName: inputState.GuestName,
            Aadhar: inputState.Aadhar,
            address: inputState.address
        }
        axios.put(api, formValue)
            .then(res => {
                alert('Update Successfully');
                console.log("axois Response", res);
                navigate('/showbooking');
                
            })
            .catch((err) => {
                alert("Updation Failed");
                console.log("Update Eror:", err)
            })
    }
    const changeHandler = (event) => {
        let { name, value } = event.target;

        setState({
            ...inputState,
            [name]: value
        })
    }

    if(inputState===null)
    {
        return
    }
    return (
        <div style={{backgroundImage: `url('https://img.freepik.com/free-photo/lobby-with-bokeh-effect_1203-623.jpg?semt=ais_hybrid')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',}}>
        <h1 style={{ color: '#373b3e', fontSize: '40px', textAlign: 'center', marginTop: '5px', fontFamily: '-webkit-body', textDecoration: 'underline' }}>Reservation Requests</h1>

        <Container style={{
                    width: '18rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '30px',
                    borderRadius: '15px',
                    height: '750px',
                    width: "1300px",
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="RoomType">
                    <Form.Select aria-label="Select the Item Colour" name='RoomType' value={inputState.Roomtype} onChange={changeHandler}>
                        <option>Select your room type</option>
                        <option value="Towers Exclusive">Towers Exclusive</option>
                        <option value="Service Apartment">Service Apartment</option>
                        <option value="Luxury Suite">Luxury Suite</option>
                    </Form.Select>
                    {/* <Form.Control type="text" placeholder="Colour" name='color' onChange={changeHandler} required /> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label>Arrival:</label>
                    <input
                        type="date"
                        name="arrival"
                        value={inputState.arrival}
                        onChange={changeHandler} required
                    />
                    <label>Departure:</label>
                    <input
                        type="date"
                        name="departure"
                        value={inputState.departure} 
                        onChange={changeHandler} required
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label >Purpose of travel:</label>

                    <Form.Check
                        type="radio"
                        name="travel"
                        // value="BUSINESS"
                        label='BUSINESS'
                        value={inputState.travel}
                        //checked={formData.gender === 'male'}
                        onChange={changeHandler}

                    />
                    {/* <Form.Check.Label>BUSINESS</Form.Check.Label> */}

                    <Form.Check
                        type="radio"
                        name="travel"
                        value={inputState.travel}
                        label='LEISURE'
                        //checked={formData.gender === 'male'}
                        onChange={changeHandler}

                    />
                    {/* <Form.Check.Label>LEISURE</Form.Check.Label> */}
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="No of Guests" name='NoOfGuest'  value={inputState.NoOfGuest} onChange={changeHandler} required />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Guest Name" name='GuestName' value={inputState.GuestName} onChange={changeHandler} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Aadhar Card Nummber" name='Aadhar' value={inputState.Aadhar}  onChange={changeHandler} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Guest Address" name='address' value={inputState.address}  onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit" style={{width:"50%", padding: '10px 20px', marginLeft:'270px', fontSize: '18px', color: '#fff', background: 'yellowgreen', border: 'none', borderRadius: '25px', boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.4)', cursor: 'pointer'}} >
                    Update Booking Details
                </Button>
            </Form>
        </Container>

    </div>
    )
}

export default Update
