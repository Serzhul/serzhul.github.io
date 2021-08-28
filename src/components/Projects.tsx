const Projects = () => {
  return (
    <section className="section-projects" id="project">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">My Projects</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Vanilla Javascript
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>9 toy web projects</li>
                  <li>Forkify Project</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__project-box">
                  <p className="card__project-explanation">
                    Just used HTML,CSS,JS
                  </p>
                  <p className="card__project-explanation">to improve skills</p>
                  {/* <p className="card__price-value">$297</p> */}
                </div>
                <a
                  href="https://adhesive-ice-cb5.notion.site/Vanilla-JS-5c63bc307eac4080af5a05645346a54d"
                  className="btn btn--white"
                >
                  Check now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  React.JS
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Food Order App</li>
                  <li>Auth App</li>
                  <li>Find NPM package</li>
                  <li>React Meetup</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__project-box">
                  <p className="card__project-explanation">
                    ReactJS, Redux, NextJS, Typescript
                  </p>
                  {/* <p className="card__price-value">$497</p> */}
                </div>
                <a
                  href="https://adhesive-ice-cb5.notion.site/React-JS-0abd4c426f7f46bfa6ec2390a26b7233"
                  className="btn btn--white"
                >
                  Check now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  Blog
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Computer Scienece</li>
                  <li>Career</li>
                  <li>DS & Algorithm</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__project-box">
                  <p className="card__project-explanation">Built with Gatsby</p>
                  <p className="card__project-explanation">
                    Records I've studied
                  </p>
                  {/* <p className="card__price-value">$792</p> */}
                </div>
                <a href="https://serzhul.io" className="btn btn--white">
                  Check now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">
          Check All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
