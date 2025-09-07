interface PhotoNameClientProps {
  image: string;
}

export default function PhotoNameClient({ image }: PhotoNameClientProps) {
  return (
    <div className="Clients-Avatar relative group">
      <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
        <img 
          className="w-80 h-80 object-cover" 
          src={image} 
          alt="Client portrait" 
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
      <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10 blur-md"></div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-80 group-hover:animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-60 group-hover:animate-pulse"></div>
    </div>
  );
}