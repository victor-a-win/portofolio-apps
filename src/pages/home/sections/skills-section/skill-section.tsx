import BackEndSkills from "./components/back-end-skills";
import DevOpsTools from "./components/devops-tools";
import FrontEndSkills from "./components/front-end-skills";

import "./skills.style.css"

export default function SkillsSection() {
    return (
        <div className="Skill-Section">
            <h1>My Skills</h1>
            <br />
            <div className="flex flex-col">
                    <FrontEndSkills />
                    <BackEndSkills/>
                    <DevOpsTools />
            </div>
            <br />
        </div>
    );
}