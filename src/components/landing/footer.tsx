import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest full-width py-24 px-6 md:px-12 border-t border-outline-variant w-full max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <div className="w-full lg:w-1/3">
          <Link href="/" className="text-2xl font-black text-primary mb-6 block font-display hover:text-primary-fixed transition-colors">ZERO PMO</Link>
          <p className="text-secondary-fixed-dim font-body text-lg max-w-sm">
            The definitive architectural standard for executive real estate asset management.
          </p>
        </div>
        
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-white font-label uppercase tracking-widest text-xs mb-2">Platform</span>
            <Link href="/platform" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">System Overview</Link>
            <Link href="/how-it-works" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">How It Works</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-label uppercase tracking-widest text-xs mb-2">Solutions</span>
            <Link href="/solutions/developers" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">For Developers</Link>
            <Link href="/solutions/pmo" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">For PMO</Link>
            <Link href="/solutions/asset-managers" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">For Asset Managers</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-label uppercase tracking-widest text-xs mb-2">Resources</span>
            <Link href="/case-studies" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">Case Studies</Link>
            <Link href="/insights" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">Insights</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-label uppercase tracking-widest text-xs mb-2">Company</span>
            <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">About ZERO</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/50 gap-6">
        <p className="text-secondary-fixed-dim font-label text-[10px] uppercase tracking-widest">© 2026 ZERO ARCHITECTURAL MONOLITH. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest" href="#">Privacy Protocol</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest" href="#">Terms of Authority</Link>
        </div>
      </div>
    </footer>
  );
}
