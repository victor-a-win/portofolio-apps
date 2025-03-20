export default function Action() {
    return (
        <div className="Action">
            <div>
            <br />
            <a className="no-underline hover:underline text-orange-600 pl-0 text-base sm:text-xl"
                >Action
            </a>
            </div>

            <div className="sm:text-lg/loose"> 
                Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. 
                On the back end, I developed RESTful APIs with Node.js and MongoDB for data management. 
                Additionally, I integrated the platform with AWS to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. 
                I worked closely with designers and QA to address usability and accessibility standards.
            </div>
            <br />
            <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="UI-UX-Design.jpg" alt="UI-UX-Design Img" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="API_database.jpg" alt="API database Img"/>
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="working_group.jpg" alt="Working Group Img" />
                </div>
            </div>
        </div>
    );
}