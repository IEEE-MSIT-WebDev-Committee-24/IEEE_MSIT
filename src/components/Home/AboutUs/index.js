import React from 'react';
import './style.css';

function AboutUsComponent() {
    return (
        <div className="about_us" id="about">
            <div className="header_aboutUs text-dark-emphasis">
                <h1>About Us</h1>
            </div>
            <div className="body_aboutUs">
                <img src="https://i.postimg.cc/jSZQj1y9/Image-4-1.png" alt="image not found" />
                <p className='text-dark-emphasis'>
                    Since its inception in 2009, it has played a forward role in providing its members a platform to interact, collaborate and work towards building a technically sound ecosystem. IEEE MSIT WIE, PES, RAS, CS chapters have worked in cohesion to explore and bring forth various engineering avenues and opportunities such as hackathons, seminars, hands-on workshops, industrial visits, women empowerment seminars, technical project exhibitions, STEP programs, and a lot more.
                    <br /><br />
                    The latest IEEE MSIT advent is its AWP-PCB lab which is a project-centric lab aiming at finding hardware solutions to real-world glitches faced by the institution as a whole.
                    <br /><br />
                    With its wide reach, IEEE MSIT serves as an ideal platform for the students to network, co-learn, and develop.
                </p>
            </div>
            <div className="footer_aboutUs">
                <img src="https://i.postimg.cc/2SWpn4SC/1-CS-1.png" alt="image not found" />
                <img src="https://i.postimg.cc/sxZFKS4P/2-PES-1.png" alt="image not found" />
                <img src="https://i.postimg.cc/nLZDJGsz/3-RAS-1.png" alt="image not found" />
                <img src="https://i.postimg.cc/HnfrPwDT/4-WIE-1.png" alt="image not found" />
            </div>
        </div>
    );
}

export default AboutUsComponent;
