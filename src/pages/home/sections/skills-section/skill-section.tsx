import BackEndSkills from "./components/back-end-skills";
import DevOpsTools from "./components/devops-tools";
import FrontEndSkills from "./components/front-end-skills";

export default function SkillsSection() {
    return (
        <div className="Skill Section">
            <h1>My Skills</h1>
            <br />
            <FrontEndSkills />
            <BackEndSkills/>
            <DevOpsTools />
            <br />
        </div>
    );
}