import ClientTestimoni from "./components/client-testimoni";
import PhotoNameClient from "./components/photo-name-client";

export default function TestiMonialsSection() {
    return (
        <div className="Testimonials Section">
            <h1>Testimonials</h1>
            <br />
            <ClientTestimoni />
            <PhotoNameClient />
            <br />
        </div>
    );
}