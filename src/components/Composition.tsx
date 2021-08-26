import img1 from '../css/img/nat-1.jpg';
import img1_large from '../css/img/nat-1-large.jpg';

const Composition = () => {
    return (
        <section className="section-about" id="about-me">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    What kind of Developer am I?
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Love challenges, Love motivation.
                    </h3>
                    <p className="paragraph">
                        I've been thought normal life is suit for me as I didn't
                        know I love facing with challenges. But I finally
                        realized that
                    </p>
                    <p className="paragraph">
                        "The moments of thinking to solving problems give me
                        chances growing me up."
                    </p>
                    <p className="paragraph">
                        "The moments of solving problems give me the motivation
                        to find new Challenges."
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live adventures like you never have before
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eveniet suscipit eaque ipsam dolor, magni
                        provident itaque reprehenderit
                    </p>

                    <a href="#" className="btn-text">
                        Learn more &rarr;
                    </a>
                </div>

                <img src="/details/img/myImage.png" />
                <div className="col-1-of-2">
                    <div className="composition">
                        <img
                            srcSet={`${img1} 300w, ${img1_large} 1000w`}
                            sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
                            alt="Photo 1"
                            className="composition__photo composition__photo--p1"
                            src="img-nat-1-large.jpg"
                        />

                        <img
                            srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
                            alt="Photo 2"
                            className="composition__photo composition__photo--p2"
                            src="img-nat-2-large.jpg"
                        />

                        <img
                            srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 28vw, 300px"
                            alt="Photo 3"
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
