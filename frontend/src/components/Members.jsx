import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Members = () => {
  const [data, setData] = useState([]);
  const teamMembers = [];

  useEffect(() => {
    fetch("/api/member", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("data========>", res);
        setData(res);
      });
  }, []);

  for (let i = 0; i < data.length; i++) {
    teamMembers.push({
      name: data[i].name,
      role: data[i].position,
      imageSrc: data[i].image,
      shortDescription: data[i].shortDescription,
      email: data[i].email,
      whatsApp: data[i].whatsAppNumber,
      instagram: data[i].instagramId,
      facebook: data[i].facebookId,
      linkedIn: data[i].linkedInId,
    });
  }

  // for (let i = 0; i < 8; i++) {
  //   teamMembers.push({
  //     name: `Member ${i + 1}`,
  //     role: "Head of SEO",
  //     imageSrc:
  //       "https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg",
  //     shortDescription:
  //   });
  // }

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
                  <p>{member.shortDescription}</p>
                  <ul className="team-icon">
                    <li>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${member.whatsApp}`}
                        className="whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.instagram}
                        className="instagram"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.facebook}
                        className="facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.linkedIn}
                        className="linkedin"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${member.email}`}
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
