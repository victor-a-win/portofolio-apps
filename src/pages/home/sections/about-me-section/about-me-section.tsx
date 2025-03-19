import BriefBio from "./components/brief-bio";
import CoreSkills from "./components/core-skills";
import KeyValue from "./components/key-value";

import "./about.style.css"

export default function AboutMeSection() {
    return (
        <div className="About-Me-Section">
            <h1>About</h1>
            <div 
                className="text-justify text-[14.5px] pl-9 pr-8 pb-2 indent-5 border-x-4 border-orange-400
                            sm:text-[18px] sm:pl-15 sm:pr-[210px] sm:pt-0 sm:pb-7 sm:indent-8"
                >
                <BriefBio />
                <CoreSkills />
                <KeyValue />
            </div>
        </div>
    );
}