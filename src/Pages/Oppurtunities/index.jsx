import React from 'react';
import './style.css';

const Opportunities = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="container-title">OPPORTUNITIES</h2>
        <p className="cont">
          IEEE is a large organization. Many opportunities for students exist that are not directly sponsored by Student Activities. To ensure that the brightest and most capable young minds have the resources they need to pursue a technologically-oriented education, we have collected information about grants, scholarships, and other opportunities for students for you to search here.
        </p>
      </div>

      <div className="section">
        <h2 className="container-title">CONTESTS FOR STUDENTS</h2>
        <p className="cont">
          The IEEE offers many opportunities for students to win contests for outstanding performance in a variety of areas. Students, here you will be able to search for opportunities to receive recognition and prizes for your innovative thinking and hard work. Sponsors, here you can have the opportunity to recognize some of the best and brightest young engineering minds while taking the opportunity to reinforce your organization’s dedication to the support of the next generation of IEEE leaders.
        </p>
      </div>

      <div className="section">
        <h2 className="container-title">SAC AWARDS PROGRAMS</h2>
        <p className="cont">
          Student branches are crucial to the growth and development of IEEE Student members. Student branches create a local network of students and give students the opportunity to meet and learn from fellow students, as well as faculty members and professionals in the field. Student branches offer numerous educational, technical, and professional advantages to IEEE Student members through special projects, activities, meetings, tours, and field trips. However, these activities and advantages aren’t done without the effort, labor, and diligence of volunteers. IEEE has created several Student Branch Awards to recognize and reward the efforts of these tireless individuals and teams.
        </p>
      </div>
      <h2 className="container-title">IEEE MSIT AWARDS</h2>
        <h3 className="subheading" style={{textAlign:'center'}}>Recognizing Excellence in IEEE MSIT</h3>

      <div className="gradient-cards">
        <div className="card bg-green-box">
          <p className="card-title">1. Larry K. Wilson Regional Student Activities Award</p>
          <p className="card-description">
          The purpose of this award is to recognize, annually, in each Region of the IEEE, the Student member most responsible for an extraordinary accomplishment associated with Student Activities. This award highlights the dedication and leadership qualities of outstanding students who contribute significantly to the success of student activities.</p>
        </div>

        <div className="card bg-orange-box">
          <p className="card-title">2. IEEE Regional Exemplary Student Branch Award</p>
          <p className="card-description">
          The purpose of this award is to provide public recognition of exemplary IEEE Student Branch operations. Awards will be presented to those Student Branches that are found to be operated in a manner consistent with the goals of IEEE. This award encourages excellence in organizing branch activities and fostering a supportive environment for student members.
</p>
        </div>

        <div className="card bg-blue-box">
          <p className="card-title">3. The Darrel Chong Student Activity Award</p>
          <p className="card-description">
          The purpose of this recognition system serves to change the mindset of our student groups, from being number-driven to becoming value-driven and to acknowledge exemplary student activities around the world. The goal is to improve the quality of activities and to foster knowledge sharing among students.
          </p>
        </div>

        <div className="card bg-purple-box">
          <p className="card-title">4. IEEE Outstanding Branch Counselor & Branch Chapter Advisor Award</p>
          <p className="card-description">
          Aware of the unusual and dedicated efforts of Student Branch Counselors and Branch Chapter Advisors, the Regional and Technical Activities Boards sponsor a cash award to each of the approximately 20 outstanding Counselors and Advisors around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
