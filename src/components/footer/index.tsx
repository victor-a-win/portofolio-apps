import "./footer.styles.css"

import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid"

export default function Footer() {
    return (
        <div className="Footer-Styles flex flex-col bg-black">
            <div className="justify-items-center">
                <ChevronDoubleUpIcon className="size-11 text-sky-500 md:size-12" />
            </div>
            <div className=
                "ml-auto mr-auto text-2xl text-orange-400 text-center font-bold"
                > BACK TO TOP
            </div>
            <div className="bg-black text-sm text-white text-center text-[16px]">
                © 2025 ViTech Studio. All rights reserved.
            </div>
        </div>
    )
}