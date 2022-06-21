import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import CertificateList from "./components/certificateList/CertificateList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <CertificateList/>
      <Contact/>
    </div>
  )
};

export default App;