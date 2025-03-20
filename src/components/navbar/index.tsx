'use client'
import "./navbar.styles.css"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import SideBar from "../sidebar"

export default function NavBar() {
    const router = useRouter()

    return(
        <div className="NavBar-Styles bg-[url('/Navigation_Background.png')] flex-col bg">
            <div className="flex flex-row justify-between">
                <div className="mr-24 -mt-1">
                    <SideBar />
                </div>             
                <div className="size-12 sm:size-24 mt-3 mr-2">
                    <button onClick={() => router.push("/")}>
                        <img className="rounded-lg" src="Developer_Logo2.png" alt="Developer Logo" />
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-center ml-7 sm:mr-72">
                <form>
                    <div >
                        <textarea className="field-sizing-fixed w-25 sm:w-[300px] ... rounded-lg sm:ml-72 caret-pink-600" 
                                            rows={1} placeholder="Search">
                        </textarea>
                    </div>
                </form>
                <button className="relative pb-2 right-0 cursor-wait">
                    <MagnifyingGlassCircleIcon className="size-7 sm:size-10 text-blue-500" />
                </button>
            </div>

            <div className="flex flex-row justify-center gap-8 sm:gap-20 text-orange-400 mt-1 mb-2 sm:text-2xl/loose">
                <div className="">
                    <button onClick={() => router.push("./about-me")}
                        >About
                    </button>
                    </div>
                <div>
                    <button onClick={() => router.push("./my-portfolio")}
                        >Portfolio
                    </button>
                </div>
                <div>
                    <button onClick={() => router.push("./contact-me")}
                        >Contact
                    </button>
                </div>
            </div>
        </div>
    )
}