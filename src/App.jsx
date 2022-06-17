import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import CertificateList from "./components/certificateList/CertificateList";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <CertificateList/>
    </div>
  )
};

export default App;