import Navigation from "../layout/Navigation";
import Composition from "./Composition";
import Header from "./Header";
import Featrues from "./Features";
import Projects from "./Projects";
import Footer from "../layout/Footer";

const Main = () => {
  const hideNav = () => {
    const naviToggle: any = document.getElementById("navi-toggle");

    setTimeout(() => {
      naviToggle.checked = false;
    }, 500);
  };

  return (
    <main>
      <Navigation hideNav={hideNav} />
      <Header />
      <Composition />
      <Featrues />
      <Projects />
      <Footer />
    </main>
  );
};

export default Main;
