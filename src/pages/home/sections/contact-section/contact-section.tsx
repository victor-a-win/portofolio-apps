import ContactForm from "./components/contact-form";
import EmailSocialLink from "./components/email-social-link";
import SendMessage from "./components/send-message";

import "./contact-section.style.css"

export default function ContactSection() {
    return (
        <div className="Contact-Section dark:text-gray-900">
            <h1>Contact Me</h1>
            <div className="font-serif text-[15px] pb-2 sm:text-[18px] sm:pb-5">
                I'm currently available for full-time, part-time, and freelance work
            </div>
            <div className="text-gray-700 text-[20px] font-bold md:text-[18px]">
                <ContactForm />
            </div>
            <EmailSocialLink />
            <SendMessage />
        </div>
    );
}