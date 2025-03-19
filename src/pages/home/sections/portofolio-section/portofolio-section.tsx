import Action from "./components/action";
import Result from "./components/result";
import Situation from "./components/situation";
import Task from "./components/task";

import "./portofolio.style.css" 

export default function PortfolioSection() {
    return (
        <div className="Portfolio-Section">
            <div className="Header-Portfolio">
                <h1>Portfolio</h1>
            </div>
            <div className="text-justify text-[14.5px] pl-9 pr-8 pb-2 indent-5
                            sm:text-[18px] sm:pl-15 sm:pr-[210px] sm:pt-0 sm:pb-7 sm:indent-8">
                <Situation />
                <Task />
                <Action />
                <Result />
            </div>
        </div>
    )
}