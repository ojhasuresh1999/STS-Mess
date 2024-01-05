import React from "react";
import Navbar from "./Navbar";

const Members = () => {
  const teamMembers = [
    // {
    //   name: "Suresh Ojha",
    //   role: "Head of SEO",
    //   imageSrc:
    //     "https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg",
    // },
  ];

  for (let i = 0; i < 8; i++) {
    teamMembers.push({
      name: `Member ${i + 1}`,
      role: "Head of SEO",
      imageSrc:
        "https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg",
    });
  }

  return (
    <>
      <Navbar />
      <br />
      <h1 id="pageTitle">Members</h1>
      <br />
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2
                className="section-title"
                style={{ fontFamily: "cursive", fontWeight: "bolder" }}
              >
                The Team Behind Pacifico
              </h2>
            </div>
            {teamMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src={member.imageSrc}
                    className="team-img"
                    alt={`pic-${index}`}
                  />
                  <h3>{member.name.toLowerCase()}</h3>
                  <div className="team-info">
                    <p>{member.role}</p>
                  </div>
                  <p>
                    {member.name} is our co-founder and has developed search
                    strategies for a variety of clients from international
                    brands to medium-sized businesses for over five years.
                  </p>
                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=8389098579"
                        className="whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="instagram"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com"
                        className="mail"
                        target="_blank"
                      >
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
