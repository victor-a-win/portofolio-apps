export default function ContactForm() {
    return (
        <div>
            <div className="Header-Contact-Form">Send Me A Message</div>
            <div className="Contact-Form caret-pink-600">
                <form>
                    <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-3 p-1 w-[270px] text-[16px]
                                    sm:w-[550px] sm:text-[18px]"
                    >
                        <label>Your name *: </label>
                        <textarea 
                            className="field-sizing-fixed w-64 sm:w-[540px] ..."  rows={1} placeholder="Enter your name">
                        </textarea>
                    </div>
                    
                    <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-3 p-1 w-[270px] text-[16px] 
                                    sm:w-[550px] sm:text-[18px]"
                    > 
                        <label>Your email *: </label>
                        <textarea 
                            className="field-sizing-fixed w-64 sm:w-[540px] ..." rows={1} placeholder="Enter your email">
                        </textarea>
                    </div>

                    <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-0 p-1 w-[270px] text-[16px] 
                                    sm:w-[550px] sm:text-[18px]"
                    > 
                        <label>Your message *: </label>
                        <textarea 
                            className="field-sizing-fixed w-64 sm:w-[540px] ..." rows={3} placeholder="Enter your needs">
                        </textarea>
                    </div>
                </form>
            <br />
            </div>
            
            <div className="Send-Email-Button">
                 <button className="cursor-pointer">Send Message</button>
            </div>
            <div className="relative ml-36 bottom-6 pl-1 animate-bounce cursor-wait"> 
                <img src="send-mail.webp" alt="send message logo" />
            </div>
        </div>
    );
}