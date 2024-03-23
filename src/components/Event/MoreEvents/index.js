import React from "react";
import "./style.css";
import events from "../../../Constants/events";
import { Link } from "react-router-dom";

const MoreEventsComponent = () => {
  events.slice(0, 2);
  return (
    <div>
      {" "}
      <div className="container4">
        <div className="title2">
          <h1>Events you may also like</h1>
        </div>
        <div className="cards">
          <div className="cont">
            {events.map((event) => (
              <div className="card" onClick={()=>{window.scrollTo(0,0)}}>
                <div className="img">
                  <Link
                    to={`/events/${event.id}`}
                    state={{
                      desc: event.desc,
                      date: event.date,
                      image: event.image,
                    }}
                  >
                    <img src={event.coverImage} />
                  </Link>
                </div>
                <div className="top-text">
                     <div className="name">
                        <center><h5>{event.name}</h5></center>
                     </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreEventsComponent;
