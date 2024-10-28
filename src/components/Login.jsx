import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);

  let [inputState, setState] = useState({
      mail: "", password: "",
  })
  let [errors, setErors] = useState({
      mail: "", password: "",
  })


  const changeHandler = (event) => {
    let { name, value } = event.target;

    let errMsg = {};

    switch (name) {

        case "mail":
            if (value.length < 1) errMsg.mail = "Required field";
            else errMsg.mail = "";
            break;

        case "password":
            if (value.length < 1) errMsg.password = "Required field";
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
    setErors({ ...errors, ...errMsg })
    console.log("Validation eror", inputState.erors);
}
useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  const data = await axios.get("http://localhost:1000/users");
  console.log(data.data);
  setUsers(data.data);
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Received Data", inputState);


  const user = users.find(
    (val) => val.mail === inputState.mail && val.password === inputState.password
  );


if (user) {
    alert("Login successful!");
    setErors({ mail: "", password: "" });
  } else {
    // setErors({ mail: "Invalid User Name", password: "Invalid mail or password." });
    alert("Invalid mail or password");
  }

  navigate('/booking');
}
  return (
    <section style={{backgroundImage: `url('https://wallpapers.com/images/hd/hotel-background-2qosz2h6xb1xpnka.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',}}>

    <div className="main">
    <h1 style={{ color: '#4CAF50', fontSize: '40px', textAlign: 'center', marginTop: '5px', fontFamily: '-webkit-body', textDecoration: 'underline' }}>Ghosh Hotel and Banquet</h1>
    <h3>Enter your login credentials</h3>

    <Form 
    onSubmit={handleSubmit}
    >
      <label htmlFor="first">Email:</label>
      <input
        type="text"
        id="first"
        name="mail"
        placeholder="Enter your Email"
        onChange={changeHandler}
        // value={mail}
        // onChange={(e) => setmail(e.target.value)}

        required
      />
        {errors && errors?.mail.length > 0 ? <p className='text-danger text-end'>{errors.mail}</p> : ""}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your Password"
        onChange={changeHandler}
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}

        required
      />
        {errors && errors?.password.length > 0 ? <p className='text-danger text-end'>{errors.password}</p> : ""}

      <div className="wrap">
        <button type="submit">Submit</button>
      </div>
    </Form>

    <p>
      Not registered?{' '}
      {/* <a href="#" style={{ textDecoration: 'none' }}> */}
      <Link to={"/registration"} style={{ textDecoration: 'none' }}>
        Create an account
      </Link>
      {/* </a> */}
    </p>
  </div>
     
    </section>
  )
}

export default Login
