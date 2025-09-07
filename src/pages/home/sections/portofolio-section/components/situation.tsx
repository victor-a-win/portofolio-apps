export default function Situation() {
    return (
        <div className="Situation">
            <div>
            <br />
            <a className="no-underline hover:underline text-orange-700 text-base sm:text-xl"
                >Situation
            </a>
            </div>

            <div className="sm:text-lg/loose"> 
                XYZ Retail, an established retail company, sought to expand into 
                e-commerce to reach a wider audience and streamline its sales processes. 
                <a className="no-underline hover:underline text-orange-700 pl-2"
                > They needed a scalable, user-friendly platform </a> 
                to support both desktop and mobile users with features like product browsing, 
                user reviews, secure checkout, and real-time inventory updates
            </div>
            <br />
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="Retail_Company.webp" alt="Retail Company Img"/>
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="E-commerce.webp" alt="E-commerce Img" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="Mobile-Apps.webp" alt="Mobile-Apps Img" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="Browsing.webp" alt="Browsing Img"/>
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="Real_time_inventory.webp" alt="Real_time_inventory Img Img"/>
                </div>
            </div>
        </div>
    );
}