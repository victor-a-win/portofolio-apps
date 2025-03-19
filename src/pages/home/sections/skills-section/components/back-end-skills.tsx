export default function BackEndSkills() {
    return(
        <div className="Back-End Skills">
            <div className="flex justify-evenly sm:flex sm:justify-center">
                <div className="Box-Skill1 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pl-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="next.svg" alt="NextJS-Logo" />
                   <div className="pl-3 text-[8px]  sm:text-[14px] sm:pl-8 font-bold">Next-JS</div>
                </div>

                <div className="Box-Skill2 border-2 border-orange-500 w-[70px] h-[74px] mt-6 p-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="NodeJS_logo.png" alt="NodeJS-Logo" />
                    <div className="pl-3 text-[8px] sm:text-[14px] sm:pl-8 font-bold">Node JS</div>
                </div>

                <div className="Box-Skill3 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pr-2 rounded-xl shadow-md motion-reduce:animate-bounce
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <span>
                        <span className="absolute inline-flex h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] right-0 animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="Express-JS_logo.png" alt="Express-Logo" />
                    </span>
                    <div className="pl-2 text-[8px] sm:text-[14px] sm:pl-9 font-bold">Express</div>
                </div>
                
                <div className="Box-Skill4 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pr-2 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                        <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="mysql.png" alt="MySQL-Logo" />
                    <div className="pl-3 text-[8px]  sm:text-[14px] sm:pl-9 font-bold">MySQL</div>
                </div>
            </div>
        </div>
    );
}