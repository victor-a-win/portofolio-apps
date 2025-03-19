'use client'
import { useRouter } from "next/navigation";

export default function Cta() {
    const router = useRouter()
    
    return (
        <div className="CTA">
            <div className="view-portofolio">
                <button onClick={() => router.push("my-portfolio")}
                    type="submit">
                    <div>
                        View Portofolio
                    </div>
                </button>
            </div>
            <br />
            <div className="contact-me">
                <button 
                    type="submit" 
                    onClick={() => router.push("contact-me")}>
                    Contact Me
                </button>
            </div>
        </div>
    );
}