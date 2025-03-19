'use client'
import "./navbar.styles.css"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export default function NavBar() {
    const router = useRouter()

    return(
        <div className="NavBar-Styles">
            <div className="Developer-Logo">
                <button onClick={() => router.push("/")}>
                    <img src="Developer_Logo2.png" alt="Developer Logo" />
                </button>
            </div>
            <div className="About-Nav">
                <button onClick={() => router.push("about-me")}
                >    About
                </button>
            </div>
            <div className="Portfolio-Nav">
                <button onClick={() => router.push("my-portfolio")}
                    >Portfolio
                </button>
            </div>
            <div className="Contact-Nav">
                <button onClick={() => router.push("contact-me")}
                    >Contact
                </button>
            </div>
            <form className="Search-Box">
                <div className="flex flex-col border border-black rounded-[8px] p-1 w-[170px]" >
                    <input type ="text" placeholder="Search"  />
                </div>
            </form>
            <button className="Search-Button-Icon">
                <MagnifyingGlassCircleIcon className="size-7 text-blue-500" />
            </button>
        </div>
    )
}