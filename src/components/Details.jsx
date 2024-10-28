import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import { base_url, end_point } from '../api/api_Url';
const Details = () => {
    let { itemId } = useParams();
    let api = base_url + end_point.booking + `/${itemId}`;
    console.log("api", api)
    let [state, setState] = useState([])

    const getProducts = () => {
        axios.get(api)
            .then(res => {
                console.log(res)
                setState(res.data)
            })
            .catch(err => console.log("eror", err))
    }

    useEffect(() => {
        getProducts()
    }, [setState])
    return (
        <div style={{ backgroundImage: `url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', }}>
            <div>
                <Container >

                    <h1 style={{ color: '#373b3e', fontSize: '60px', textAlign: 'center', marginTop: '10px', fontFamily: '-webkit-body', textDecoration: 'underline' }}>Booking Details </h1>
                    <br />
                    <Card style={{
                        width: '18rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        padding: '2px',
                        borderRadius: '15px',
                        height: '300px',
                        width: "500px",
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Card.Body>
                            <Card.Title>Name of the Guest : {state.GuestName}</Card.Title>
                            <Card.Title>No of guest: {state.NoOfGuest}</Card.Title>
                            <Card.Title>Check in Date : {state.arrival}</Card.Title>
                            <Card.Title>Check Out Date : {state.departure}</Card.Title>
                            <Card.Title>Room Type : {state.RoomType}</Card.Title>
                            <Card.Title>Purpose Of Travel : {state.travel}</Card.Title>
                            <Card.Title>Aadhar Number : {state.Aadhar}</Card.Title>
                            <Card.Title>Address : {state.address}</Card.Title>


                        </Card.Body>
                    </Card>
                    <Link to={'/'}>
                        <Button style={{ width: "50%", padding: '10px 20px', marginLeft: '120px', marginTop: '30px', fontSize: '18px', color: '#fff', background: 'yellowgreen', border: 'none', borderRadius: '25px', boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.4)', cursor: 'pointer' }}>
                            Go to Home
                        </Button>
                    </Link>

                </Container>




            </div>
        </div>
    )
}

export default Details
