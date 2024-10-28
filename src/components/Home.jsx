import React from 'react'
import { Accordion, Button, Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}


{/* Bootstrap Carousal */}

      {/* <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../asset/1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to iCoder</h2>
              <p>Technology, News and Trends.</p>
              <button class="btn btn-danger">Technology</button>
              <button class="btn btn-primary">Web Development</button>
              <button class="btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../asset/2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to Coding Dunia</h2>
              <p>Technology, News and Trends.</p>
              <button class="btn btn-danger">Technology</button>
              <button class="btn btn-primary">Web Development</button>
              <button class="btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../asset/3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to Web Development Duniya</h2>
              <p>Technology, News and Trends.</p>
              <button class="btn btn-danger">Technology</button>
              <button class="btn btn-primary">Web Development</button>
              <button class="btn btn-success">Tech Fun</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div> */}

{/* ReactBootstarp Carousal */}
{/* <button variant="outline-secondary" size="sm" active>Book Now</button> */}

<Carousel>
<Carousel.Item>
       
        <img
          className="d-block w-100"
          src="../../asset/carousal2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 style={{fontWeight: 'bolder', fontSize:'50px', fontFamily: 'ui-monospace', color: 'yellow', }}>Luxurious Rooms</h1>
          <p style={{fontFamily: 'Papyrus', color:'white', textDecoration:'underline'}}>Deluxe Rooms Starting     @ ₹6999 /-</p>
          <Link to={'/booking'}>
          <button variant="outline-secondary" size="sm" active style={{ fontFamily: 'cursive', fontSize:'44px', fontWeight: 'bold', backdropFilter: 'blur(1px)', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'cyan'}}>Book Now</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <img
          className="d-block w-100"
          src="../../asset/carousal1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{fontWeight: 'bolder', fontSize:'50px', fontFamily: 'ui-monospace', color: 'palegoldenrod'}}>Luxurious Rooms</h1>
          <p style={{fontFamily: 'Papyrus', color:'white', textDecoration:'underline'}}>Deluxe Rooms Starting     @ ₹6999 /-</p>
          <Link to={'/booking'}>
          <button variant="outline-secondary" size="sm" active style={{ fontFamily: 'cursive', fontSize:'44px', fontWeight: 'bold', backdropFilter: 'blur(1px)', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'cyan'}}>Book Now</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="../../asset/carousal3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 style={{fontWeight: 'bolder', fontSize:'50px', fontFamily: 'ui-monospace', color: 'yellowgreen'}}>Luxurious Rooms</h1>
          <p style={{fontFamily: 'Papyrus', color:'white', textDecoration:'underline'}}>Deluxe Rooms Starting     @ ₹6999 /-</p>
          <Link to={'/booking'}>
          <button variant="outline-secondary" size="sm" active style={{ fontFamily: 'cursive', fontSize:'44px', fontWeight: 'bold', backdropFilter: 'blur(1px)', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'cyan'}}>Book Now</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* card section */}

      <div class="container my-4">
        <div class="row mb-2">
          <div class="col-md-6">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Fooding</strong>
                <h3 class="mb-0">Fine Dining Experience</h3>
                <div class="mb-1 text-muted">Nov 24</div>
                <p class="card-text mb-auto">Delight your taste buds with a culinary journey in our in-house restaurant, where our chefs prepare gourmet dishes using the freshest local ingredients. From traditional flavors to international cuisine, our diverse menu offers something for every palate. Whether it's a romantic dinner or a casual meal, our dining spaces provide a welcoming ambiance, making every meal an unforgettable experience.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img" width="300" height="450" src="../../asset/cd1.jpg" alt="" />

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Relaxing</strong>
                <h3 class="mb-0">Relaxing Spa Treatments</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">Indulge in a serene escape at our luxury spa, where skilled therapists offer a variety of treatments designed to rejuvenate the body and mind. From soothing massages to invigorating facials and body scrubs, our therapies combine traditional techniques with modern wellness practices. Perfect for unwinding after a long day or simply treating yourself to a peaceful retreat, our spa is a haven of tranquility.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img" width="300" height="450" src="../../asset/cd2.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="container my-4">
        <div class="row mb-2">
          <div class="col-md-6">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Entertentment</strong>
                <h3 class="mb-0">Event and Conference Facilities</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">Whether you're planning a wedding, corporate event, or special celebration, our hotel offers fully equipped venues tailored to meet your needs.Our team works closely with you to ensure every detail is perfect. From state-of-the-art audiovisual equipment to custom catering options, we provide all the resources to make your event a success.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img" width="300" height="450" src="../../asset/cd3.jpg" alt="" />

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Workout</strong>
                <h3 class="mb-0">Exclusive Pool and Fitness Center</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">Stay active or unwind at our state-of-the-art fitness center, fully equipped with the latest machines for cardio and strength training. After your workout, relax by our stunning pool, where you can enjoy a refreshing swim or simply lounge in the sun. Our pool area also offers private cabanas and a poolside bar, making it the perfect place to relax and recharge.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img" width="300" height="450" src="../../asset/cd4.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>


      <h1 style={{ color: '#373b3e', fontSize: '60px', textAlign: 'center', marginTop: '50px', fontFamily: '-webkit-body',textDecoration:'underline'}}>Featured Rooms</h1> 

    {/* cards */}
<Container>
  <CardGroup >
      <Card border='warning'>
        <Card.Img variant="top" width="500" height="200" src="../../asset/card1.jpg" />
        <Card.Body>
          <Card.Title>Towers Exclusive</Card.Title>
          <Card.Text>
          Complimentary Luxury Hours from 6pm-8pm|Wetland or City view|55 inches Smart TV|iPad interface to control in-room features|Work Station|24hrs Laundry service
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><b>27.41 Sq Mt</b></ListGroup.Item>
        <ListGroup.Item><b>Inclusive of WiFi</b></ListGroup.Item>
        <ListGroup.Item><b>Up to 3 guests</b></ListGroup.Item>
        <ListGroup.Item><b >King</b></ListGroup.Item>
        <ListGroup.Item><i>Iron & Iron Board,Yoga Mat</i></ListGroup.Item>
        <ListGroup.Item><b>₹: 7,200</b> &nbsp;<i>  Per Night</i>&nbsp;<p>   Excluding taxes and fees</p></ListGroup.Item>
      </ListGroup>
      <Link to={'/booking'}> 
      <Button variant="primary" size='sm'style={{width:"100%"}}>Online Booking </Button></Link>
        <Card.Footer>
          <small className="text-muted" >Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card border='danger'>
        <Card.Img variant="top" width="500" height="200" src="../../asset/card2.jpg" />
        <Card.Body>
          <Card.Title>Service Apartment</Card.Title>
          <Card.Text>
          Complimentary Luxury Hours from 6pm-8pm|Kitchenette|Separate Living Area|Separate Smart TVs in each room|Powder Room|Walk In Closet|24hrs Laundry service
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><b>25.91 Sq Mt</b></ListGroup.Item>
        <ListGroup.Item><b>Inclusive of WiFi</b></ListGroup.Item>
        <ListGroup.Item><b>Up to 2 guests</b></ListGroup.Item>
        <ListGroup.Item><b >Queen</b></ListGroup.Item>
        <ListGroup.Item><i>Iron & Iron Board,Yoga Mat</i></ListGroup.Item>
        <ListGroup.Item><b>₹: 6,700</b> &nbsp;<i>  Per Night</i>&nbsp;<p>   Excluding taxes and fees</p></ListGroup.Item>
      </ListGroup>
      <Link to={'/booking'}> <Button variant="primary" size='sm'style={{width:"100%"}}>Online Booking </Button></Link>
        <Card.Footer>
          <small className="text-muted text-end" >Unavailable</small>
        </Card.Footer>
      </Card>
      <Card border='success'>
        <Card.Img variant="top" width="500" height="200" src=" ../../asset/card3.jpg" />
        <Card.Body>
          <Card.Title>Luxury Suite</Card.Title>
          <Card.Text>
          Complimentary Luxury Hours from 6pm-8pm|Personal Butler|City View|Separate Living Room|iPad interface to control in-room features|Complimentary In- Room Breakfast|24hrs Laundry service
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><b>32.79 Sq Mt</b></ListGroup.Item>
        <ListGroup.Item><b>Inclusive of WiFi</b></ListGroup.Item>
        <ListGroup.Item><b>Up to 4 guests</b></ListGroup.Item>
        <ListGroup.Item><b >King</b></ListGroup.Item>
        <ListGroup.Item><i>Iron & Iron Board,Yoga Mat</i></ListGroup.Item>
        <ListGroup.Item><b>₹: 9,800</b> &nbsp;<i>  Per Night</i>&nbsp;<p>   Excluding taxes and fees</p></ListGroup.Item>
      </ListGroup>
      <Link to={'/booking'}> <Button variant="primary" size='sm' style={{width:"100%"}}>Online Booking </Button></Link>
        <Card.Footer>
          <small className="text-muted">Last updated 2 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</Container>
    


{/* <Row>
  <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  </Col>
</Row> */}
    

{/* dropdown section */}
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cancellation Policy</Accordion.Header>
        <Accordion.Body>
        Free cancellation up to 48 hours before the booking date. 50% charge within 48 hours of arrival.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>FAQs</Accordion.Header>
        <Accordion.Body>
        Q: Do you offer airport transfers? <br />
          A: Yes, we offer complimentary airport transfers for all our guests. <br /><br />
          Q: Is breakfast included? <br />
          A: Yes, a continental breakfast is included in all room bookings.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

export default Home
