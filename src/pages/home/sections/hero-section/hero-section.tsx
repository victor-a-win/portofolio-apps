import DeveloperName from "./components/developer-name";
import JobName from "./components/job";
import Avatar from "./components/avatar";
import BriefIntro from "./components/brief-intro";
import Cta from "./components/cta";

export default function HeroSection() {
    return (
        <div className="Hero Section">
            <DeveloperName />
            <JobName />
            <Avatar />
            <BriefIntro />
            <Cta />
            <br />
        </div>
    );
}