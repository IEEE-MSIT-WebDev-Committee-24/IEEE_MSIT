import Head from "../../components/Event/Head";
import ContactUs from "../../components/Event/Contact";
import Description from "../../components/Event/Description";
import Location from "../../components/Event/Location";
import MoreEvents from "../../components/Event/MoreEvents";
import "./style.css";
import { useLocation,useParams } from "react-router-dom";
import { useEffect } from "react";
import Events from "../../Constants/events"


const EventsPage = () => {
    const location = useLocation();
    const {id}=useParams();
    const eventData = Events.find(event => event.id.toString() === id);
    console.log(eventData)
  const { desc, date, image } = location.state || eventData;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
            <Head image={image}/>
            <div className="container2">
                <div className="description"><Description  description={desc} eventDate={date}/></div>
                <div className="location"><Location /></div>
            </div>
            <ContactUs />
            <MoreEvents />
        </>
    );
};
export default EventsPage;

