import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import events from "../../../Constants/events";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function EventsComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="eventsList" id="event">
      <h1>Events</h1>
      <Carousel responsive={responsive}>
        {events.map((event) => (
          <div className="eventCarouselImage" key={event.id}>
            <Link
              to={`/events/${event.id}`}
              state={{
                desc: event.desc,
                date: event.date,
                image: event.image,
              }}
            >
              <Card className="border-0" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Card.Title>
                    <span>Name:</span>
                    {event.name}
                  </Card.Title>
                  <Card.Text>Designation: {event.designation}</Card.Text>
                  <Card.Text>Date: {event.date}</Card.Text>

                  <Button variant="primary">View More</Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
}
export default EventsComponent;
