import AboutMeComponent from "./components/sections/AboutMeComponent";
import ContactComponent from "./components/sections/ContactComponent";
import ExperienceComponent from "./components/sections/ExperienceComponent";
import EducationComponent from "./components/sections/EducationComponent";
import FooterComponent from "./components/sections/FooterComponent";
import HeaderComponent from "./components/sections/HeaderComponent";
import ProjectsComponent from "./components/sections/ProjectsComponent";
import SkillsComponent from "./components/sections/SkillsComponent";
import MediumArticlesComponent from "./components/sections/MediumArticlesComponent";

import { useTheme } from "./hooks/useTheme";

const App = () => {
  useTheme(); // Initialize theme on app load

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-gradient-hero">
      <HeaderComponent />
      <div className="snap-start scroll-mt-20"><AboutMeComponent /></div>
      <div className="snap-start scroll-mt-20"><SkillsComponent /></div>
      <div className="snap-start scroll-mt-20"><ProjectsComponent /></div>
      <div className="snap-start scroll-mt-20"><ExperienceComponent /></div>
      <div className="snap-start scroll-mt-20"><EducationComponent /></div>
      <div className="snap-start scroll-mt-20"><MediumArticlesComponent /></div>
      <div className="snap-start scroll-mt-20"><ContactComponent /></div>
      <div className="snap-start"><FooterComponent /></div>
    </div>
  );
};

export default App;
