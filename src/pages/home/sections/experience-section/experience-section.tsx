import Jobdesk from "./components/responsibilities";
import TimeLine from "./components/time-line";

import "./experience.style.css"

export default function ExperienceSection() {
    return (
        <div className="Experience-Section">
            <h1>Experience</h1>
            <br />
            <div className="flex flex-row text-justify text-[14.5px]">
                <div className="basis-[1/3]">
                    <TimeLine />
                </div>
                <div className="basis-[2/3]">
                    <Jobdesk />
                </div>
            </div>
            <br />
        </div>
    );
}