import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";

const HeaderComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Track which section is currently active
  const activeSection = useActiveSection(["about", "skills", "projects", "experience", "contact"]);

  // Helper for mobile link styling
  const getMobileLinkClass = (section: string) => {
    return `py-2 px-4 rounded-lg transition-colors font-medium flex-1 ${
      activeSection === section 
        ? "bg-[var(--primary-start)] text-white"
        : "text-[var(--text-secondary)] hover:bg-[var(--bg-hero)] dark:hover:bg-[var(--bg-dark)]/50"
    }`;
  };

  return (
    <BrowserRouter>
      <div className="navbar glass border-none fixed z-50 top-0 left-0 right-0 px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-start">
          <a className="text-2xl md:text-3xl font-black gradient-text cursor-pointer">
            SBA
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden xl:flex">
          <div className="flex flex-row gap-2">
            <HashLink smooth to="#about" className={`nav-link ${activeSection === "about" ? "text-[var(--text-primary)] after:w-[80%]" : ""}`}>
              About Me
            </HashLink>
            <HashLink smooth to="#skills" className={`nav-link ${activeSection === "skills" ? "text-[var(--text-primary)] after:w-[80%]" : ""}`}>
              Skills
            </HashLink>
            <HashLink smooth to="#projects" className={`nav-link ${activeSection === "projects" ? "text-[var(--text-primary)] after:w-[80%]" : ""}`}>
              Projects
            </HashLink>
            <HashLink smooth to="#experience" className={`nav-link ${activeSection === "experience" ? "text-[var(--text-primary)] after:w-[80%]" : ""}`}>
              Experience
            </HashLink>
            <HashLink smooth to="#contact" className={`nav-link ${activeSection === "contact" ? "text-[var(--text-primary)] after:w-[80%]" : ""}`}>
              Contact
            </HashLink>
          </div>
        </div>

        {/* Resume Button & Theme Toggle - Desktop */}
        <div className="navbar-end hidden xl:flex gap-4">
          <button 
            onClick={toggleTheme} 
            className="btn btn-ghost btn-circle glass-card hover:bg-white/20 dark:hover:bg-[var(--bg-dark)]/50"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          
          <a
            className="btn-modern flex items-center gap-2 glow-hover"
            href="/doc/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end xl:hidden gap-2">
          {/* Theme Toggle (Mobile) */}
          <button 
            onClick={toggleTheme} 
            className="btn btn-ghost btn-circle glass-card"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost glass-card rounded-xl px-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content glass-card rounded-2xl z-50 mt-4 w-56 p-4 shadow-xl"
            >
              <li className="flex mb-1"><HashLink to="#about" className={getMobileLinkClass("about")}>About</HashLink></li>
              <li className="flex mb-1"><HashLink to="#skills" className={getMobileLinkClass("skills")}>Skills</HashLink></li>
              <li className="flex mb-1"><HashLink to="#projects" className={getMobileLinkClass("projects")}>Projects</HashLink></li>
              <li className="flex mb-1"><HashLink to="#experience" className={getMobileLinkClass("experience")}>Experience</HashLink></li>
              <li className="flex mb-1"><HashLink to="#contact" className={getMobileLinkClass("contact")}>Contact</HashLink></li>
              <div className="border-t border-[var(--glass-border)] mt-2 pt-2">
                <a
                  href="/doc/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern w-full flex items-center justify-center gap-2 mt-2"
                >
                  <span>View Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HeaderComponent;
