export default function DevOpsTools() {
    return (
        <div className="DevOps & Tools">
            <div className="flex justify-center sm:flex sm:justify-center">
                <div className="Box-Skill1 border-2 border-orange-500 w-[70px] h-[74px] mt-6 mr-1 pl-1 pt-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-2 sm:mt-2" src="Git.png" alt="Git-Source-Ctrl-Logo" />
                    <div className="pl-1 text-[8px] sm:text-[14px] sm:pl-6 font-bold">Git-src-Ctrl</div>
                </div>

                <div className="Box-Skill2 border-2 border-orange-500 w-[70px] h-[74px] mt-6 mr-1 p-1 rounded-xl shadow-md motion-reduce:animate-bounce
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                     <span>
                        <span className="sticky inline-flex h-[10px] w-[10px] left-[50px] sm:h-[16px] sm:w-[16px] animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <img className="size-14 -mt-6 sm:size-28 sm:ml-2 sm:mt-2" src="docker_logo.png" alt="Docker-Logo" />
                    </span>
                    <div className="pl-3 text-[8px] sm:text-[14px] sm:pl-9 font-bold">Docker</div>
                </div>

                <div className="Box-Skill3 border-2 border-orange-500 w-[70px] h-[74px] mt-6 pr-2 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-1 sm:mt-2" src="postman.svg" alt="Postman-Logo" />
                    <div className="pl-2 text-[8px] sm:text-[14px] sm:pl-8 font-bold">Postman</div>
                </div>
            </div>
            <div className="flex justify-center sm:flex sm:justify-center">
                <div className="Box-Skill4 border-2 border-orange-500 w-[70px] h-[74px] mt-6 mr-2 pr-2 pt-1 rounded-xl shadow-md
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                    <img className="size-14 sm:size-28 sm:ml-1 sm:mt-2" src="aws-icon.svg" alt="AWS_Logo" />
                    <div className="pl-0 text-[8px] sm:text-[14px] sm:pl-5 font-bold">AWS Server</div>
                </div>

                <div className="Box-Skill5 border-2 border-orange-500 w-[70px] h-[74px] mt-6 mr-1 p-1 rounded-xl shadow-md motion-reduce:animate-bounce
                                sm:w-[140px] sm:h-[144px] sm:mr-5 sm:mt-10"
                >
                     <span>
                        <span className="sticky inline-flex h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] left-[50px] animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <img className="size-14 -mt-6 sm:size-28 sm:ml-2" src="vercel.svg" alt="Vercel-Logo" />
                    </span>
                    <div className="pl-3 text-[8px] sm:text-[14px] sm:pl-10 font-bold">Vercel</div>
                </div>
            </div>
        </div>
    );
}