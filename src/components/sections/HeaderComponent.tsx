import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <BrowserRouter>
      <div className="navbar glass fixed z-50 top-0 left-0 right-0 px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-start">
          <a className="text-2xl md:text-3xl font-black gradient-text cursor-pointer">
            SBA
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden xl:flex">
          <div className="flex flex-row gap-2">
            <HashLink smooth to="#about" className="nav-link">
              About Me
            </HashLink>
            <HashLink smooth to="#skills" className="nav-link">
              Skills
            </HashLink>
            <HashLink smooth to="#projects" className="nav-link">
              Projects
            </HashLink>
            <HashLink smooth to="#experience" className="nav-link">
              Experience
            </HashLink>
            <HashLink smooth to="#contact" className="nav-link">
              Contact
            </HashLink>
          </div>
        </div>

        {/* Resume Button - Desktop */}
        <div className="navbar-end hidden xl:flex ">
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
        <div className="navbar-end xl:hidden">
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
              <HashLink to="#about" className="py-2 px-4 hover:bg-sky-50 rounded-lg transition-colors">
                <li className="font-medium text-slate-700">About</li>
              </HashLink>
              <HashLink to="#skills" className="py-2 px-4 hover:bg-sky-50 rounded-lg transition-colors">
                <li className="font-medium text-slate-700">Skills</li>
              </HashLink>
              <HashLink to="#projects" className="py-2 px-4 hover:bg-sky-50 rounded-lg transition-colors">
                <li className="font-medium text-slate-700">Projects</li>
              </HashLink>
              <HashLink to="#experience" className="py-2 px-4 hover:bg-sky-50 rounded-lg transition-colors">
                <li className="font-medium text-slate-700">Experience</li>
              </HashLink>
              <HashLink to="#contact" className="py-2 px-4 hover:bg-sky-50 rounded-lg transition-colors">
                <li className="font-medium text-slate-700">Contact</li>
              </HashLink>
              <div className="border-t border-slate-200 mt-2 pt-2">
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
