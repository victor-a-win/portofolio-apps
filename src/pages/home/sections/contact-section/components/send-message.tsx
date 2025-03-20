export default function SendMessage() {
    return (
        <div className="Chat-on-WhatsApp fixed bottom-[110px] right-0">
            <a className="animate-pulse"
                title="Chat on WhatsApp"
                href=
                    "https://wa.me/6285711423395?text=Hi%2C%0D%0AI+would+like+to+know+more+about+your+portfolio.%0D%0APlease+contact+me%21"
                    target="_blank"
                >
                <img className="p-[5px]" 
                    src="WhatsAppButtonWhiteSmall.svg" alt="Chat on WhatsApp"/>
            </a>
        </div>
    );
}