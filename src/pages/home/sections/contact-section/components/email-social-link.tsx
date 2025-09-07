import { InboxArrowDownIcon } from "@heroicons/react/16/solid";

export default function EmailSocialLink() {
    return (
        <div className="Email-Social-Links">
            <div className="flex flex-col-reverse">
                <div>
                    <a
                        href="mailto:victoradiwinata@gmail.com"
                    >
                    <div className="mt-1 mb-2">
                        <InboxArrowDownIcon className="size-11 text-blue-500 md:size-12" />
                    </div>
                    </a>
                </div>

                <div className="w-[35px] h-[35px] mb-2 mt-3 ml-1
                                sm:w-[40px] sm:h-[40px]"
                    > <a 
                        title="Linkedln Profile"
                        href=
                            "https://www.linkedin.com/in/victor-adi-winata-5009ba297"
                            target="_blank"
                        >
                        <img src="linkedin.webp" alt="LinkedIn Logo" />
                    </a>
                </div>

                <div className="w-[35px] h-[35px] mt-2 ml-1
                                sm:w-[40px] sm:h-[40px]"
                > <a 
                        title="GitHub Profile"
                        href=
                            "https://github.com/victor-a-win"
                            target="_blank"
                        >
                        <img src="github-logo.webp" alt="GitHub Logo" />
                    </a>
                </div>
            </div>
        </div>
        );
}