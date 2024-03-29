const Header = () => {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Abel Seo</span>
                    <span className="heading-primary--sub">
                        the front-end Developer
                    </span>
                </h1>

                <a href="#about-me" className="btn btn--white btn--animated">
                    About me
                </a>
            </div>
        </header>
    );
};

export default Header;
