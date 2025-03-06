import HeroSection from "./sections/hero-section/hero-section";
import AboutMeSection from "./sections/about-me-section/about-me-section";
import SkillsSection from "./sections/skills-section/skill-section";
import PortfolioSection from "./sections/portofolio-section/portofolio-section";
import ExperienceSection from "./sections/experience-section/experience-section";
import TestiMonialsSection from "./sections/testimonials-section/testimonials-section";
import ContactSection from "./sections/contact-section/contact-section";

import "./home.style.css"

export default function HomeView() {
    return (
        <div className="personal-website">
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <PortfolioSection />
            <ExperienceSection />
            <TestiMonialsSection />
            <ContactSection/>
        </div>
    );
}