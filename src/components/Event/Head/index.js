import './style.css';
import head from "../../../Assets/head.jpeg"

function AboutEventsComponent({image}) {
  return (
    <div class="container1" >
      <img class="background-img" src={image} alt="" />
      {/* <div class="title">
        <h1>Host - <span id="speaker">Rajneesh Kumar</span></h1>
        <h1 id="profile">SWE-II at Google</h1>
        <div class="certificate">
          <i class="fa-solid fa-medal fa-2xl" style={{ color: "#d07016" }}></i>
          <h3 id="text">Free Certificates To All Attendees</h3>
        </div>
        <a href="#"><button id="registerbtn">Register Now</button></a>
      </div> */}
    </div>
  );
}
export default AboutEventsComponent;