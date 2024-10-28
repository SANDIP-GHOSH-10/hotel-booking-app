import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { base_url, end_point } from '../api/api_Url';


const ShowBooking = () => {
    let api = base_url + end_point.booking;

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

const deletItem = (id)=>{
    console.log("id of the delet product",id);
    axios.delete(`${api}/${id}`)
    .then(res=>{
        console.log("Axios res for delete",res)
        alert("Data Delet Successfully")
        getProducts(); //for instant delete from the server and database
    })
    .catch(err=>{
        console.log("Axios eror to delet data",err)
    })
}

    return (
        <div>
            <Container>
                  <h1 style={{ color: '#373b3e', fontSize: '60px', textAlign: 'center', marginTop: '50px', fontFamily: '-webkit-body',textDecoration:'underline'}}>Show Booking</h1> 


                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Guest Name</th>
                            <th>Room Type</th>
                            <th>Number of Guests</th>
                            <th>Purpose of Travel</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.GuestName}</td>
                                    <td>{item.RoomType}</td>
                                    <td>{item.NoOfGuest}</td>
                                    <td>{item.travel}</td>
                                    <td>{item.arrival}</td>
                                    <td>{item.departure}</td>
                                    <td><Link to={`details/${item.id}`}>
                                        <Button variant="light" size='sm'>Details</Button>
                                    </Link>
                                    &nbsp; <Button variant='danger' size='sm' onClick={()=>{deletItem(item.id)}}>Delete</Button>
                                    &nbsp; 
                                    <Link to={`edit/${item.id}`}>
                                    <Button variant='success' size='sm' >Update</Button>
                                    </Link>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </Container>




        </div>
    )
}

export default ShowBooking

