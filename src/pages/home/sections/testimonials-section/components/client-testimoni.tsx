interface ClientTestimoniProps {
  text: string;
  name: string;
  position: string;
}

export default function ClientTestimoni({ text, name, position }: ClientTestimoniProps) {
  return (
    <div className="Client-Testimonials">
      <div className="text-lg leading-relaxed italic mb-8">
        <span className="text-orange-400 font-bold text-xl">"</span>
        {text}
        <span className="text-orange-400 font-bold text-xl">"</span>
      </div>
      
      <div className="Client-Name border-l-4 border-orange-500 pl-4">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-orange-400">{position}</div>
      </div>
    </div>
  );
}