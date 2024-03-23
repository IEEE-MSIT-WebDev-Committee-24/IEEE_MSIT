import './style.css';

function DescriptionComponent({ description, eventDate }) {
   return (
      <div className="left-side">
         <div className="c2-head">
            <h1>Description</h1>
         </div>
         <div className="desc">
            <p>{description}</p>
         </div>
         <div className="date">
            <p><b>Date - {eventDate}</b></p>
            <br/>
            
         </div>
      </div>
   );
}

export default DescriptionComponent;
