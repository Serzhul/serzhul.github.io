const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                {/* <picture className="footer__logo">
                    <source
                        srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-1x.png 2x"
                        media="(max-width: 37.5em)"
                    />
                    <img
                        srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
                        alt="Full logo"
                        src="img/logo-green-2x.png"
                    />
                </picture> */}
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a
                                    href="mailto:abelseo917@gmail.com"
                                    className="footer__link"
                                >
                                    Contact me
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Careers
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Privacy policy
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by{' '}
                        <a
                            href="https://github.com/serzhul"
                            className="footer__link"
                        >
                            Abel Seo
                        </a>
                        . Copyright &copy; by &nbsp;
                        <a
                            href="https://twitter.com/jonasschmedtman"
                            className="footer__link"
                        >
                            Jonas Schmedtmann
                        </a>
                        . This webpage is based on Jonas Schmedtmann CSS and
                        Sass Lecture.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
