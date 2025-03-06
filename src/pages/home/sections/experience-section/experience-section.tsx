import JobTitleCorp from "./components/jobtitle-corp";
import Responsibilities from "./components/responsibilities";
import TimeLine from "./components/time-line";

export default function ExperienceSection() {
    return (
        <div className="Experience Section">
            <h1>Experience</h1>
            <br />
            <JobTitleCorp />
            <TimeLine />
            <Responsibilities />
            <br />
        </div>
    );
}