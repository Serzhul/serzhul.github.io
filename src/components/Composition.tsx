import img1 from "../css/img/solving_problems.jpeg";
import img1_large from "../css/img/solving_problems.jpeg";
import img2 from "../css/img/communication.jpeg";
import img2_large from "../css/img/communication.jpeg";
import img3 from "../css/img/inspiration.jpeg";
import img3_large from "../css/img/inspiration.jpeg";

const Composition = () => {
  return (
    <section className="section-about" id="about-me">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">What kind of Developer am I?</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Love challenges
          </h3>
          <p className="paragraph">
            "The moments of thinking to solving problems give me chances growing
            me up."
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Love motivation
          </h3>
          <p className="paragraph">
            "The moments of solving problems give me the motivation to find new
            challenges."
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Love communication
          </h3>
          <p className="paragraph">
            "I enjoy the moment share the visions with people who are willing to
            share theirs."
          </p>

          <a href="https://serzhul.io/about/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${img1} 300w, ${img1_large} 1000w`}
              sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
              alt="Solving Problems"
              className="composition__photo composition__photo--p1"
              src="img-nat-1-large.jpg"
            />

            <img
              srcSet={`${img2} 300w, ${img2_large} 1000w`}
              sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
              alt="Communication"
              className="composition__photo composition__photo--p2"
              src="img-nat-2-large.jpg"
            />

            <img
              srcSet={`${img3} 300w, ${img3_large} 1000w`}
              sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
              alt="Inspiration"
              className="composition__photo composition__photo--p3"
              src="img-nat-3-large.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Composition;
