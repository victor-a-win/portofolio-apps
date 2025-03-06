import Action from "./components/action";
import Result from "./components/result";
import Situation from "./components/situation";
import Task from "./components/task";

export default function PortfolioSection() {
    return (
        <div className="Portofolio Section">
            <h1>Portfolio</h1>
            <br />
            <Situation />
            <Task />
            <Action />
            <Result />
            <br />
        </div>
    );
}