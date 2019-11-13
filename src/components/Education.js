import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import moment from "moment";
import profile from "../profile.json";

class Education extends React.Component {
  render() {
    const itemStyles1 = { flex: "1" };

    return (
      <Container>
        <Row>
          <Col>
            {profile.studies.map(function(study, i) {
              return (
                <div data-aos="fade-up" data-aos-offset="250" key={i}>
                  <Media key={i}>
                    <Media left top href={study.url}>
                      <Media object src={study.logo} alt={study.institute} />
                    </Media>
                    <Media body>
                      <Media heading>
                        <a href={study.url}>{study.institute}</a>
                      </Media>
                      {[
                        {
                          key: "Title",
                          value: study.title
                        },
                        {
                          key: "Graduation Year",
                          value: study.graduationYear
                        },
                        {
                          key: "Duration",
                          value: study.durationInYears + " year(s)"
                        }
                      ].map(function(object, i) {
                        return (
                          <div>
                            <Row>
                              <Col className="formLabel">{object.key}:</Col>
                            </Row>
                            <Row>
                              <Col>{object.value}</Col>
                            </Row>
                          </div>
                        );
                      })}
                    </Media>
                  </Media>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            {profile.certifications.map(function(certification, i) {
              const verification = certification.verificationLink ? (
                <Row>
                  <Col>
                    <a
                      className="certificateLink"
                      href={certification.verificationLink}
                    >
                      See certificate
                    </a>
                  </Col>
                </Row>
              ) : (
                ""
              );
              return (
                <div data-aos="fade-up" data-aos-offset="100" key={i}>
                  <Media key={i}>
                    <Media left top href={certification.url}>
                      <Media
                        object
                        src={certification.logo}
                        alt={certification.title}
                      />
                    </Media>
                    <Media body>
                      <Media heading>
                        <a href={certification.url}>{certification.title}</a>
                      </Media>
                      <Row>
                        <Col>
                          {moment(certification.issueDate).format("MMM YYYY")} -{" "}
                          {certification.expiryDate
                            ? moment(certification.expiryDate).format(
                                "MMM YYYY"
                              )
                            : "Present"}
                        </Col>
                      </Row>
                      <Row>
                        <Col>{certification.issuer}</Col>
                      </Row>
                      {verification}
                    </Media>
                  </Media>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
