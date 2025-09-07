export default function BackEndSkills() {
    return(
        <div className="Back-End Skills">
            <div className="flex justify-evenly sm:flex sm:justify-center">
                <div className="Box-Skill1 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pl-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="next.svg" alt="NextJS-Logo" />
                   <div className="text-center text-[8px] sm:text-[14px] font-bold">Next-JS</div>
                </div>

                <div className="Box-Skill2 border-2 border-orange-500 w-[70px] h-[74px] mt-6 p-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="nodejs-logo.svg" alt="NodeJS-Logo" />
                    <div className="text-center text-[8px] sm:text-[14px] font-bold">Node JS</div>
                </div>

                <div className="Box-Skill3 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pr-2 rounded-xl shadow-md motion-reduce:animate-bounce
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >   <span>
                        <span 
                            className="sticky inline-flex h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] right-0 animate-ping rounded-full bg-orange-400 opacity-75">
                        </span>
                        <img className="size-14 -mt-6 sm:size-28 sm:ml-2" src="express-svgrepo-com.svg" alt="Express-Logo" />
                    </span>
                    <div className="text-center text-[8px] sm:text-[14px] sm:mt-1 font-bold">Express</div>
                </div>
                
                <div className="Box-Skill4 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pr-2 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                        <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="mysql-logo.svg" alt="MySQL-Logo" />
                    <div className="text-center text-[8px] sm:text-[14px] font-bold">MySQL</div>
                </div>
            </div>
        </div>
    );
}