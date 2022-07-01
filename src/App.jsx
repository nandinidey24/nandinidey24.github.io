import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import CertificateList from "./components/certificateList/CertificateList";
import InternshipList from "./components/internshipList/InternshipList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white"
      }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <CertificateList/>
      <InternshipList/>
      <Contact/>
    </div>
  );
};

export default App;