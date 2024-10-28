import React from 'react'

const ContactUs = () => {
  return (
    <div style={{backgroundImage: `url('https://www.shutterstock.com/image-photo/abstract-blur-defocused-hotel-lobby-260nw-1457326388.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',}}>
     <div class="container my-4 ">
        <h1 style={{ color: '#373b3e', fontSize: '60px', textAlign: 'center', marginTop: '50px', fontFamily: '-webkit-body',textDecoration:'underline'}}>Contact Us</h1> 

        <form style={{
                        width: '18rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        padding: '30px',
                        borderRadius: '15px',
                        height: '650px',
                        width: "1300px",
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
              <label for="exampleFormControlInput2">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
              <label for="exampleFormControlInput3">Mobile No:</label>
              <input type="tel" class="form-control" id="exampleFormControlInput3" placeholder="+91 8888888888"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select your Query</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Booking Related</option>
                <option>house keeping</option>
                <option>Food Order</option>
                <option>Others</option>
              </select>
            </div>
            &nbsp;
            <div class="form-check">
                
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                    <p>Are You a member ?</p>
                </label>
              </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Elaborate Your Concern</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            &nbsp;
            <br/>
            <button type="button" class="btn btn-primary btn-lg">Submit</button>
          </form>
    </div>
    </div>
  )
}

export default ContactUs
