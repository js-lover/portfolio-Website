import AboutMeComponent from "./components/sections/AboutMeComponent";
import ContactComponent from "./components/sections/ContactComponent";
import ExperienceComponent from "./components/sections/ExperienceComponent";
import EducationComponent from "./components/sections/EducationComponent";
import FooterComponent from "./components/sections/FooterComponent";
import HeaderComponent from "./components/sections/HeaderComponent";
import ProjectsComponent from "./components/sections/ProjectsComponent";
import SkillsComponent from "./components/sections/SkillsComponent";
import MediumArticlesComponent from "./components/sections/MediumArticlesComponent";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-gradient-hero">
      <HeaderComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ExperienceComponent />
      <EducationComponent />
      <MediumArticlesComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
