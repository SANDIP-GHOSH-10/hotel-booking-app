// import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
// import '../css/Register.css'
const Register = () => {

    // const [users, setUsers] = useState(null);

    // let [inputState, setState] = useState({
    //     fname: "", email: "", mob: "", pwd: "", cnfPwd: "", address: ""
    // })
    // let [errors, setErors] = useState({
    //     fname: "", email: "", mob: "", pwd: "", cnfPwd: "", address: ""
    // })


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Received Data", inputState);
    //     // let formValue = {
    //     //     fname: inputState.fname,
    //     //     email: inputState.email,
    //     //     mob: inputState.mob,
    //     //     pwd: inputState.pwd,
    //     //     cnfPwd: inputState.cnfPwd,
    //     //     address: inputState.address,
    //     // }


    //     const changeHandler = (event) => {
    //         let { name, value } = event.target;


    //         let errMsg = {};

    //         switch (name) {
    //             case "fname":
    //                 if (value.length < 1) errMsg.fname = "Required field";
    //                 else errMsg.fname = "";
    //                 break;
    //             case "email":
    //                 if (value.length < 1) errMsg.email = "Required field";
    //                 else errMsg.email = "";
    //                 break;
    //             case "mob":
    //                 if (value.length < 1) errMsg.mob = "Required field";
    //                 else errMsg.mob = "";
    //                 break;
    //             case "pwd":
    //                 if (value.length < 1) errMsg.pwd = "Required field";
    //                 else errMsg.pwd = "";
    //                 break;
    //             case "cnfPwd":
    //                 if (value.length < 1) errMsg.cnfPwd = "Required field";
    //                 else if (value.length < 8) errMsg.cnfPwd = "minimum 8 char";
    //                 else errMsg.cnfPwd = "Successfull";
    //                 break;
    //             case "address":
    //                 if (value.length < 1) errMsg.address = "Required field";
    //                 else if (value.length < 12) errMsg.address = "minimum 12 char";
    //                 else errMsg.address = "Successfull";
    //                 break;


    //             default:
    //                 console.log("Not Applicable");
    //                 break;
    //         }
    //         setState({
    //             ...inputState,
    //             [name]: value
    //         })
    //         setErors({ ...errors, ...errMsg })
    //     }

        return (
            <div>
            <h1>Reg</h1>
                <Form
                    // onSubmit={handleSubmit}
                >
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        {/* fullname */}
                        <label htmlFor="fname"><b>Full Name</b></label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="fname"
                            id="fname"
                            // onChange={changeHandler}
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            // onChange={changeHandler}
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="mob"><b>Mobile</b></label>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile"
                            name="mob"
                            id="mob"
                            // onChange={changeHandler}
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="psd"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psd"
                            id="psd"
                            // onChange={changeHandler}
                            //   value={password}
                            //   onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="cnfPwd"><b>Repeat Password</b></label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="cnfPwd"
                            id="cnfPwd"
                            // onChange={changeHandler}
                            //   value={repeatPassword}
                            //   onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="address"><b>Address</b></label>
                        <input
                            type="textarea"
                            placeholder="Enter Your Address"
                            name="address"
                            id="address"
                            // onChange={changeHandler}
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <hr />

                        <p>
                            By creating an account you agree to our 
                            {/* <a href="#" style={{ textDecoration: 'none' }}>
                                Terms & Privacy
                            </a> */}
                            .
                        </p>
                        <button type="submit" className="registerbtn">Register</button>
                    </div>

                    <div className="container signin">
                        <p>
                            Already have an account?{' '}
                            <Link to={"/login"}>
                                Sign in
                            </Link>

                            .
                        </p>
                    </div>
                </Form>
            </div>
        )
    }
// }
export default Register
