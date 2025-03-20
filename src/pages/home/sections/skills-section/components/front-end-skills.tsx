export default function FrontEndSkills() {
    return (
            <div className="flex justify-evenly sm:flex sm:justify-center">
                <div className="Box-Skill1 border-2 border-orange-500 w-[70px] h-[74px] pl-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5">
                    <img className="size-14 mt-1 sm:size-28 sm:ml-2 sm:mt-2" src="CSS3_and_HTML5_logos.svg" alt="HTML-CSS-Logo" />
                    <div className="pl-1 text-[8px] sm:text-[14px] sm:pl-6 font-bold">HTML-CSS</div>
                </div>

                <div className="Box-Skill2 border-2 border-orange-500 w-[70px] h-[74px] p-1 ml-1 rounded-xl shadow-md animate-bounce
                                sm:w-[140px] sm:h-[144px] sm:mr-5"
                >
                    <img className="size-14 mt-1 sm:size-28 sm:ml-2 sm:mt-2" src="typescript.png" alt="TS-Logo" />
                    <div className="pl-1 text-[8px] sm:text-[14px] sm:pl-6 font-bold">Typescript</div>
                </div>

                <div className="Box-Skill3 border-2 border-orange-500 w-[70px] h-[74px] ml-[8px] pr-2 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5"
                >
                    <img className="size-14 sm:size-28 sm:ml-1 sm:mt-1" src="Flutter-Icon.svg" alt="Flutter-Logo" />
                    <div className="pl-3 text-[8px] sm:text-[14px] font-bold sm:pl-5 sm:mt-0">Flutter</div>
                </div>
                
                <div className="Box-Skill4 border-2 border-orange-500 w-[70px] h-[74px] ml-1 pr-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5"
                >
                    <span>
                        <span className="sticky inline-flex h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] sm:mr-72
                                        animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <img className="size-14 -mt-6 sm:size-28 sm:ml-1 " src="React-icon.svg" alt="ReactJS-Logo" />
                    </span>
                    <div className="pl-2 text-[8px] sm:text-[14px] font-bold sm:pl-8">ReactJs</div>
                </div>
            </div>
    );
}