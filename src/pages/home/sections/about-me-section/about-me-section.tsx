import BriefBio from "./components/brief-bio";
import CoreSkills from "./components/core-skills";
import KeyValue from "./components/key-value";

export default function AboutMeSection() {
    return (
        <div className="About Me Section">
            <h1>About</h1>
            <br />
            <BriefBio />
            <CoreSkills />
            <KeyValue />
            <br />
        </div>
    );
}