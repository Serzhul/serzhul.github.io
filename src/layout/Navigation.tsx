const Navigation = () => {
    return (
        <div className="navigation">
            <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
            />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#about-me" className="navigation__link">
                            01 About Me
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#career" className="navigation__link">
                            02 Career
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            03 My Projects
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            04 Stories
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            href="mailto:abelseo917@gmail.com"
                            className="navigation__link"
                        >
                            05 Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
