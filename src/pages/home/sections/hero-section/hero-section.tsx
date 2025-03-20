import DeveloperName from "./components/developer-name";
import JobName from "./components/job";
import Avatar from "./components/avatar";
import BriefIntro from "./components/brief-intro";
import Cta from "./components/cta";

import "./hero.style.css"

export default function HeroSection() {
    return (
        <div className="bg-gray-800">
            <div 
                className="text-orange-400 text-[25px] font-bold pl-1 pt-5 sm:text-[55px] sm:pl-5 sm:pt-8"
                > <DeveloperName />
            </div>

            <div
                className="text-blue-50 text-[17px] font-bold pl-8 pt-1 sm:text-[35px] sm:pl-10 sm:pt-0"
                > <JobName />
            </div>

            <div 
                className="absolute pt-[180px] inset-y-0 right-5
                            sm:pl-[12px] sm:right-20 sm:top-28
                            lg:pt-[105px] lg:right-11"
                > <Avatar />
            </div>

            <div
                className="relative text-white text-[15px] text-justify pl-4 pr-5 pt-[180px] 
                            sm:text-[22px] sm:pl-[35px] sm:text-left sm:pt-10 sm:pr-[340px] 
                            lg:pr-[630px] lg:text-[25px]"
                > <BriefIntro />
            </div>

            <div
                className="text-center text-yellow-400 text-[12.5px] 
                            sm:text-[20px] sm:pl-4 sm:pt-2"
            > <Cta />
            </div>
            <br />
        </div>
    );
}