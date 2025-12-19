import Image from "next/image"; 

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-48 h-48 rounded-2xl border-2 border-cyber-blue shadow-glow overflow-hidden relative">
  <Image 
    src="/me-1.jpeg" 
    alt="Joseph Ducharme"
    fill // This makes it fill the 48x48 container
    className="object-cover" // This ensures your face isn't stretched
    priority // Tells Next.js to load this immediately (LCP)
  />
</div>
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white mb-2">Joseph Ducharme</h1>
          <p className="text-xl text-cyber-blue font-medium mb-4">
            IT Support Engineer | Cybersecurity Specialist
          </p>
          <p className="max-w-xl text-slate-400 leading-relaxed">
            Specializing in identity management and endpoint protection at 
            <strong> Ducommun AeroStructures</strong>. Managing CMMC compliance 
            and MFA deployments for 200+ endpoints.
          </p>
        </div>
      </section>

      {/* QUICK STATS / LAB SECTION */}
      <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-card-bg rounded-xl border border-slate-800 hover:border-cyber-blue/40 transition-colors">
          <h3 className="text-white font-bold mb-2">Identity & Access</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Expertise in YubiKeys, Taglio Smart Cards, and Active Directory GPO management.
          </p>
        </div>

        <div className="p-6 bg-card-bg rounded-xl border border-slate-800 hover:border-cyber-blue/40 transition-colors">
          <h3 className="text-white font-bold mb-2">Home Lab Node</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Proxmox VE 8.x | RTX A2000 | DeepSeek-R1 Local AI
          </p>
        </div>
      </section>
    </main>
  );
}