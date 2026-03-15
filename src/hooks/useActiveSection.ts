import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the entry that corresponds to a section currently intersecting most
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is at least 30% visible, it becomes active
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null, // use the document's viewport as the container
      rootMargin: "-100px 0px -40% 0px", // Account for header and trigger active state fairly early
      threshold: [0, 0.3, 0.5, 1], // Trigger at different visibility levels
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const obs = observers.get(id);
          if (obs) obs.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
};
