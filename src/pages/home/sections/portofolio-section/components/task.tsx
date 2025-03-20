export default function Task() {
    return (
        <div className="Task">
            <div>
            <br />
            <a className="no-underline hover:underline text-orange-600 pl-0 text-base sm:text-xl"
                >Task</a>    
            </div>
                    
            <div className="sm:text-lg/loose"> 
                I was responsible for building the front-end and back-end components of the platform, 
                ensuring seamless integration with the clients inventory and payment systems. 
                <a className="no-underline hover:underline text-orange-500 pl-2">
                    The project goal was to create an efficient, high-performing application
                </a> with a smooth user experience.
            </div>
            <br />
            <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
                <div>
                    <img className="sw-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="front-end.jpg" alt="Front-End-Activites" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="front-end2.jpg" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="back-end.jpg" />
                </div>
            </div>
        </div>
    );
}