export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyle = "px-8 py-4 font-serif tracking-widest transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-3 uppercase text-xs font-bold";
  const variants = {
    primary: "bg-[#C5A059] text-black hover:bg-white",
    outline: "border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black",
    dark: "bg-white text-black hover:bg-[#C5A059]"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
