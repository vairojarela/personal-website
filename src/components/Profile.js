import React from "react";
import { Container } from "reactstrap";
import classnames from "classnames";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Education";
import profile from "../profile.json";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const mainStyles = {
      display: "flex",
      alignItems: "center",
      height: "100vh"
    };
    const itemStyles2 = { flex: "2" };
    const itemStyles1 = { flex: "1" };
    const spacedContainer = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <>
        <section id="intro" style={mainStyles}>
          <div id="name" data-aos="fade-in" style={itemStyles2}>
            <h1>
              JAIRO<br></br>VARELA
            </h1>
          </div>
          <article className="arrow-down" style={itemStyles1}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </article>
          <div
            data-aos="fade-in"
            data-aos-delay="1000"
            data-aos-duration="500"
            style={itemStyles2}
          >
            <h1>
              SOFTWARE<br></br>dEVeLOPER
            </h1>
          </div>
        </section>

        <section className="skills">
          <div data-aos="fade-up" data-aos-offset="400" style={itemStyles1}>
            <h1>{profile.skillsTitle}</h1>
          </div>

          <section id="skills" style={{ margin: "5%" }} data-aos-offset="400">
            <div style={itemStyles1}>
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                style={itemStyles1}
              >
                <h3>{profile.skills[1]}</h3>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                style={itemStyles1}
              >
                <h3>{profile.skills[2]}</h3>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                style={itemStyles1}
              >
                <h3>{profile.skills[3]}</h3>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                style={itemStyles1}
              >
                <h3>{profile.skills[4]}</h3>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="400"
                style={itemStyles1}
              >
                <h3>{profile.skills[5]}</h3>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-offset="400" style={itemStyles1}>
              <p className="lead">{profile.summary}</p>
            </div>
            <div data-aos="fade-left" data-aos-offset="400" style={itemStyles1}>
              <p className="lead">{profile.passion}</p>
            </div>
          </section>
        </section>
        <div
          className="likes"
          data-aos="fade-in"
          data-aos-offset="400"
          style={itemStyles1}
        >
          <p className="lead">
            <center>
              I also love skating, soccer and penguins <br></br>
              <span>🛹⚽🐧</span>
            </center>
          </p>
        </div>
        <Container>
          <section>
            <div data-aos="fade-in" data-aos-offset="400" style={itemStyles1}>
              <h1>EXPERIENCE</h1>
            </div>
            <Experience />
          </section>
        </Container>
        <section>
          <div data-aos="fade-in" data-aos-offset="250" style={itemStyles1}>
            <h1>EduCATION</h1>
          </div>
          <div style={itemStyles1}>
            <Education />
          </div>
        </section>
        {/*  <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1"></TabPane>
            <TabPane tabId="2"></TabPane>
            <TabPane tabId="3"></TabPane>
          </TabContent> */}
      </>
    );
  }
}

export default Profile;
