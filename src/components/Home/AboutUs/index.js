import React from 'react';
import './style.css';
import aboutIEEEImage from '../../../Assets/aboutieee.png';

function AboutUsComponent() {
    return (
        <div className="about_us" id="about">
            <div className="header_aboutUs text-dark-emphasis ">
                <h1>About IEEE</h1>
            </div>
            <div className="body_aboutUs">
                <img src="https://i.postimg.cc/jSZQj1y9/Image-4-1.png" alt="image not found" />
                <p className='text-dark-emphasis'>
IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.<br></br> 
IEEE's roots go back to 1884 when electricity began to become a major influence in society. There was one major established electrical industry, the telegraph, which since the 1840s had come to connect the world with a data communications system faster than the speed of transportation.
IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The organization is chartered under this name and it is the full legal name.
                </p>
            </div>
            <h1>Regions of IEEE</h1>
            <div class="card-row"> 
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold" ,fontSize:'14px' }}>Northeast US</div>
                <div class="card1" style= {{fontWeight: "bold",fontSize:'14px'}}>Eastern US</div>
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold",fontSize:'14px'}}>Southwest US</div>
                <div class="card1" style= {{fontWeight: "bold",padding: "10px",fontSize:'14px'}}>Southern US</div>
                <div class="card1" style= {{fontWeight: "bold",fontSize:'14px'}}>Central US</div>
                <div class="card1" style= {{fontWeight: "bold",fontSize:'14px'}}>Western US</div>
                <div class="card1" style= {{fontWeight: "bold",fontSize:'14px'}}>Canada</div>
                <div class="card1" style= {{ padding: "20px", fontWeight: "bold",fontSize:'14px'}}>Latin America</div>
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold",fontSize:'14px'}}>Africa, Europe, MiddleEast</div>
                <div class="card10" style= {{padding: "20px" , fontWeight: "bold",fontSize:'14px'}}>Asia and Pacific</div>
            </div>
            <h1>Asia and Pacific</h1>
            <h4 className='body_asiaregion'>
The Asia Region of IEEE encompasses a diverse landscape of technological innovation and collaboration, serving as a hub for knowledge exchange and professional growth. Within this region, the Indian subcontinent stands out for its significant contributions to technology and innovation, hosting a vibrant engineering community engaged in cutting-edge research and development. Within India, the IEEE Delhi Section plays a crucial role in fostering collaboration and excellence, organizing various technical events and initiatives to drive innovation and societal impact in Delhi and its surrounding areas</h4>
            <br></br>
            <h1>India Council and Delhi Section</h1>
            <br></br>
            <div className="body_aboutUsclg">
                <p className='text-dark-emphasis'>
                The IEEE India Council is a central hub for managing and promoting IEEE's activities across India, enhancing collaboration among professionals in technology and engineering. It acts as the coordinating body among various IEEE sections and chapters, playing a critical role in hosting numerous major events including technical conferences, workshops, and seminars that are crucial for the professional development and networking of members. The council emphasizes educational outreach and student engagement, supporting Student Branches at many universities and colleges to foster technical activities, competitions, and publications that contribute to both academic and professional growth.

                <span style={{ color: "#019EC3" }}>
  <br /><br /><br />Delhi Section
</span>
, part of IEEE India Council and Asia-Pacific Region 10, was formed on May 13, 1976. With 3,680 members, it promotes tech education and research through 100+ Student Branches in institutions like Delhi Technological University, IIT Delhi.

These branches host activities fostering innovation and professional growth, supported by over 100 branches in institutions such as DTU, IIT Delhi, NSIT, MAIT, and others. They nurture a strong tech community, offering leadership experience and global competition participation.
                </p>
            </div>
            <h1>IEEE MSIT</h1>
            <br></br>
            <div className="body_aboutUsclg">
                <img src={aboutIEEEImage} style={{height: '75vh'}} alt="image not found" />
            </div>
            <div style={{padding: '1rem', fontSize: '20px',
lineHeight: '30px',fontWeight: 'bolder',color: 'white'}}>
            <p className='text-dark-emphasis' style={{ lineHeight:'35px'}}>
                <b style={{color:"#019EC3" }}>Maharaja Surajmal Institute of Technology (MSIT) </b> located in New Delhi, is an active participant in the IEEE Delhi Section. As one of the prominent educational institutions under this section, MSIT houses a vibrant IEEE Student Branch that plays a critical role in enhancing the technical and professional development of its students.

                </p>

    <p className='text-dark-emphasis' style={{lineHeight:'35px'}}>The IEEE MSIT Branch of Delhi region organizes various technical workshops, seminars, and guest lectures throughout the academic year. These activities are designed to provide students with exposure to the latest technological advancements and industry practices. By participating in these events, students not only gain knowledge but also develop essential skills such as teamwork and leadership. Through collaborative efforts and various initiatives, IEEE Delhi Section fosters innovation and academic excellence, providing platforms for knowledge exchange and skill development across its member institutions. As part of the IEEE community in Delhi, MSIT students engage in collaborative projects, research endeavors, and industry interactions,
                contributing to the advancement of technology and engineering in the region.
</p>
</div>

            <div className='footer_aboutUs'>
              <img src="https://i.postimg.cc/2SWpn4SC/1-CS-1.png" alt="image not found" style={{height: "150px"}}/>
              <img src="https://i.postimg.cc/nLZDJGsz/3-RAS-1.png" alt="image not found" style={{height: "150px"}} />
              <img src="https://i.postimg.cc/HnfrPwDT/4-WIE-1.png" alt="image not found" />
            </div>
        </div>
    );
}

export default AboutUsComponent;

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNcjhCkoTsYhlhL3M6NGf7pxxjSOrp0Hgrc_sQbyyVA&s