export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-8 md:px-16 py-8 flex flex-col md:flex-row justify-center items-center gap-4 bg-surface">
      <p
        className="font-mono text-xs text-slate-500 tracking-wider"
        
      >
        © {new Date().getFullYear()} Subhro Chatterjee — All rights reserved.
      </p>
     
    </footer>
  );
}
