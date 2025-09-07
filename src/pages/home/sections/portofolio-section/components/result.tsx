export default function Result() {
    return (
        <div className="Result">
            <div>
            <br />
            <a className="no-underline hover:underline text-orange-700 text-base sm:text-xl"
                >Result
            </a>
            </div>
            <div className="sm:text-lg/loose"> 
                The project was completed on time, 
                <a className="no-underline hover:underline text-orange-700 pl-2">
                    leading to a 35% increase in online sales within the first three months.
                </a> User feedback highlighted the site's speed and ease of use, 
                and the client reported a substantial reduction in manual inventory management tasks.
            </div>
            <br />
            <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="online-sales.webp" alt="increase in online sales" />
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="user-feedback.webp" alt="user-feedback"/>
                </div>
                <div>
                    <img className="w-[100px] h-[65px] sm:w-[320px] sm:h-[200px] rounded-lg" src="E-commerce.webp" alt="efficent inventory task" />
                </div>
            </div>
        </div>
    );
}