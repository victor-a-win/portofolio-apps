import ContactForm from "./components/contact-form";
import EmailSocialLink from "./components/email-social-link";
import SendMessage from "./components/send-message";

export default function ContactSection() {
    return (
        <div className="Contact Section">
            <h1>Contact Me</h1>
            <br />
            <ContactForm />
            <EmailSocialLink />
            <SendMessage />
            <br />
        </div>
    );
}