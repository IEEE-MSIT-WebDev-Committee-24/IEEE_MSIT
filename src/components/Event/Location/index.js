import React from 'react'
import './style.css';

const LocationComponent = () => {
  return (
    <div><div class="right-side">
      <div class="location">
        <h1>Event Location</h1>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.302800484222!2d77.08987957562309!3d28.620685575671207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1685263199643!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="cllg-name">
        <h2>Maharaja Surajmal Institute Of Technology</h2>
      </div>
      <div class="address">
        <p>MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY, Janakpuri, Delhi, 110058</p>
      </div>
    </div></div>
  )
}

export default LocationComponent