import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import events from "../../../Constants/events"
import { Link } from "react-router-dom";

function EventsComponent() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="eventsList" id="event">
            <h1>Events</h1>
            <Carousel responsive={responsive}>
            {
  events.map((event) => (
    <div className="eventCarouselImage" key={event.id}>
      <Link
        to={`/events/${event.id}`}
        state={{
          desc: event.desc,
          date: event.date,
          image: event.image
        }}
      >
        <img style={{ cursor: "pointer","transform":"translateX(30px)" }} src={event.coverImage} alt={event.name} />
        <label className="eventCarouselText">View More</label>
      </Link>
    </div>
  ))
}
            </Carousel>;
        </div>
    );
}
export default EventsComponent;