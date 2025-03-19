import ClientTestimoni from "./components/client-testimoni";
import PhotoNameClient from "./components/photo-name-client";

import "./testimonials.style.css"

export default function TestiMonialsSection() {
    return (
        <div className="Testimonials-Section">
            <h1>Testimonials</h1>
            <br />
            <div className="flex flex-row text-justify text-[12.5px] text-white">
                <div className="basis-[80vw] sm:basis-[140vw]" >
                    <ClientTestimoni />
                </div>
                <div className="basis-[60vw] mr-2 sm:basis-[50vw] sm:mr-40 sm:mb-10">
                    <PhotoNameClient />
                </div>
            </div>
        </div>
    );
}