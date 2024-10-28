import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url, end_point } from '../api/api_Url';



const Registration = () => {
  let api = base_url + end_point.user;
  const navigate = useNavigate();
  // find existing user
  const [users, setUsers] = useState(null);
  // for form state
  let [inputState, setState] = useState({
    fname: "", lname: "", mail: "", userName: "", password: "",
  })
  // for form validation
  let [errors, setErors] = useState({
    fname: "", lname: "", mail: "", userName: "", password: "",
  })

  const getUsers = async () => {
    const res_data = await axios.get("http://localhost:1000/users");
    const info = await res_data.data
    console.log("Await data", res_data.data);
    setUsers(info);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const changeHandler = (event) => {
    let { name, value } = event.target;
    let errMsg = { ...errors };

    switch (name) {
      case "fname":
        if (value.length < 1) errMsg.fname = "Required field";
        else errMsg.fname = "";
        break;
      case "lname":
        if (value.length < 1) errMsg.lname = "Required field";
        else errMsg.lname = "";
        break;
      case "userName":
        if (value.length < 1) errMsg.userName = "Required field";
        else errMsg.userName = "";
        break;
      case "mail":
        if (value.length < 1) errMsg.mail = "Required field";
        else errMsg.mail = "";
        break;
      case "password":
        if (value.length < 1) errMsg.pwd = "Required field";
        else if (value.length < 8) errMsg.password = "minimum 8 char";
        else errMsg.password = "Successfull";
        break;


      default:
        console.log("Not Applicable");
        break;
    }
    setState({
      ...inputState,
      [name]: value
    })
    // console.log("validation,errMsg",errMsg)
    setErors({ ...errors, ...errMsg })
  }
  console.log("Validation eror", errors);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Received Data", inputState);
    const user = users.find(
      (val) => val.mail === inputState.mail
    );

    if (user) {
      alert("Email already in used");
    } else {


      let formValue = {
        fname: inputState.fname,
        lname: inputState.lname,
        mail: inputState.mail,
        userName: inputState.userName,
        password: inputState.password
      }

      axios.post(api, formValue)
        .then(res => {
          console.log("axois Response", res)
          alert("Registration done")
          navigate("/login")

        })
        .catch(err => console.log("Axios Eror", err))
    }

    // axios.post(api, inputState)
    //     .then((res) => {
    //         console.log("Data Sent:", res.data)
    //     })
    //     .catch((err) => {
    //         console.log("Eror to sent data:", err);
    //     })
    // axios.put(api,inputState)    
    // .then((res)=>{
    //     alert('Data Update Successfully');
    //     console.log("Updated Response",res.data)
    //     navigate("/show");
    // })
    // .catch((err)=>{
    //     alert("Updation Failed");
    //     console.log("Update Eror:",err)
    // })




  }

  return (
    <div style={{backgroundImage: `url('https://img.freepik.com/free-photo/blur-pool-hotel-resort_74190-5769.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',}}>
      <Container>
        <h1 style={{ color: '#373b3e', fontSize: '60px', textAlign: 'center', marginTop: '5px', fontFamily: '-webkit-body',textDecoration:'underline'}}>Register yourself.</h1>
        <Form onSubmit={handleSubmit} style={{
                        width: '18rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        padding: '30px',
                        borderRadius: '15px',
                        height: '580px',
                        width: "1300px",
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First name" name='fname' onChange={changeHandler} required />
            {errors && errors?.fname.length > 0 ? <p className='text-danger text-end'>{errors.fname}</p> : ""}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name='lname' onChange={changeHandler} required />
            {errors && errors?.lname.length > 0 ? <p className='text-danger text-end'>{errors.lname}</p> : ""}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name='userName' onChange={changeHandler} required />
            {errors && errors?.userName.length > 0 ? <p className='text-danger text-end'>{errors.userName}</p> : ""}

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address </Form.Label>
            <Form.Control type="mail" placeholder="Enter email address" name='mail' onChange={changeHandler} required />
            {errors && errors?.mail.length > 0 ? <p className='text-danger text-end'>{errors.mail}</p> : ""}

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={changeHandler} required />
            {errors && errors?.password.length > 0 ? <p className='text-danger text-end'>{errors.password}</p> : ""}

          </Form.Group>

          <Button variant="success" type="submit" style={{width:"50%", padding: '10px 20px', marginLeft:'270px', fontSize: '18px', color: '#fff', background: 'yellowgreen', border: 'none', borderRadius: '25px', boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.4)', cursor: 'pointer'}}>
            Submit
          </Button>

        </Form>
      </Container>

    </div>
  )
}

export default Registration






//problem: 1 length eror, 2 email in use eror.