import React from "react";
import "./about.css";
import Photo from "../../assets/my Photo.jpg"; // Adjust the path as necessary

export default function About() {
  return (
    <div className="about-container">
      <div className="about-container-left">
        <img src={Photo} alt="my Photo" />
      </div>

      <div className="about-container-right">
        <div className="about-name">
          <p>Darshani Pathiranage</p>
        </div>
        <div className="about-description">
          <p>
            Hi! I’m Darshani Pathiranage, a final-year undergraduate at the Sri
            Lanka Institute of Information Technology (SLIIT), specializing in
            Information Technology. I'm someone who’s genuinely curious about
            how things work and always eager to find better, smarter ways to
            solve problems. Throughout my academic journey, I’ve gained hands-on experience and
            practical knowledge in areas like full-stack development,
            object-oriented programming, cloud technologies, and IT
            infrastructure. These projects have helped me build a strong
            foundation, not just technically, but also in working effectively
            with others and adapting to challenges. Right now, I’m looking for an internship where I can put my skills
            into action, keep learning, and contribute to real-world projects.
            If you're looking for someone who’s motivated, collaborative, and
            ready to grow with your team, I’d love to connect.
          </p>
          
        </div>
        <div className="about-education-container">
          <p className="about-education-title">Education</p>
          <p className="about-education-content">
            (Bsc.(Hons) in Information Technology - Specialization in
            Information Technology) <br />
            Sri Lanka Institute of Information Technology (SLIIT)
            <br />
            Current Undergraduate Student (2021 - present)
          </p>
        </div>
        <div className="empty-line"></div>
        <div className="empty-line"></div>
      </div>
    </div>
  );
}
