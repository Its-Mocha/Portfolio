import Image from "next/image";
import { Shield, Server, Cpu, ExternalLink, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-slate-300 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 rounded-2xl border-2 border-cyber-blue shadow-glow overflow-hidden group">
            <Image
             src="/me-1.jpeg" 
            alt="Joseph Ducharme"
            width={192}   // This matches w-48 (48 * 4)
            height={192}  // This matches h-48
            quality={100} // Force Next.js to use maximum quality
            priority      // Ensure it's not "lazy loaded"
            className="rounded-2xl border-2 border-cyber-blue shadow-glow object-cover -translate-y-4"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2">
              Joseph Ducharme
            </h1>
            <p className="text-xl text-cyber-blue font-medium mb-4">
              Proxmox Enthusiast | AI Developer | Home Lab Wizard
            </p>
            <div className="h-px w-full bg-slate-800 my-6" />
            <p className="text-lg leading-relaxed">
              Currently running <span className="text-white font-semibold">DeepSeek-R1</span> on an 
              <span className="text-cyber-blue"> RTX A2000</span> Proxmox node.
            </p>
          </div>
        </header>

        {/* SYSTEM SPECS BOX (DASHBOARD STYLE) */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 text-white font-bold uppercase tracking-wider text-sm">
            <Cpu className="w-4 h-4 text-cyber-blue" />
            System Specs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between p-2 border-b border-slate-800">
              <span className="text-slate-500">Host</span>
              <span className="text-slate-200">Proxmox VE 8.x</span>
            </div>
            <div className="flex justify-between p-2 border-b border-slate-800">
              <span className="text-slate-500">GPU</span>
              <span className="text-slate-200">RTX A2000 (6GB GDDR6)</span>
            </div>
            <div className="flex justify-between p-2 border-b border-slate-800">
              <span className="text-slate-500">AI Engine</span>
              <span className="text-slate-200">Ollama / DeepSeek-R1</span>
            </div>
            <div className="flex justify-between p-2 border-b border-slate-800">
              <span className="text-slate-500">Storage</span>
              <span className="text-slate-200">ZFS Mirrored SSDs</span>
            </div>
          </div>
        </section>

        {/* BUTTON GROUP */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="https://ai.mochajoe.dev" className="flex items-center gap-2 px-6 py-3 bg-cyber-blue text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all active:scale-95">
            <Cpu className="w-5 h-5" /> Launch AI
          </a>
          <a href="https://github.com/its-mocha" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-cyber-blue hover:text-white rounded-lg transition-all">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a href="https://linkedin.com/in/itsmocha" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-cyber-blue hover:text-white rounded-lg transition-all">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        {/* ABOUT ME SECTION */}
        <section className="space-y-4 text-gray-400 leading-relaxed">
         <p>
          I am an <strong className="text-white">IT Technician</strong> at <strong className="text-cyber-blue">Ducommun AeroStructures</strong> armed with a B.S. in Computer Science. 
          Currently, I specialize in <strong className="text-white">Identity Management</strong> and security compliance. 
          I play a key role in hardening our infrastructure by driving CMMC standards and deploying Multi-Factor Authentication (MFA) across the organization.
        </p>
        
        <p>
          Beyond security, I bring hands-on operational experience managing <strong>200+ endpoints</strong>. 
          From leading large-scale <strong className="text-white">Windows 11 migrations</strong> to administering Active Directory environments, I bridge the gap between complex backend systems and end-user needs. 
          I pride myself on a <strong className="text-cyber-blue">"Do whatever it takes"</strong> attitude, combining deep diagnostic skills with the ability to communicate technical solutions clearly.
        </p>
        </section>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-cyber-blue/50 transition-colors">
            <h4 className="flex items-center gap-2 text-white font-bold mb-4">
              <Shield className="w-5 h-5 text-cyber-blue" /> Cybersecurity
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• CrowdStrike & Tanium EDR</li>
              <li>• MFA (YubiKey/Smart Cards)</li>
              <li>• Active Directory & GPO</li>
            </ul>
          </div>

          <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-cyber-blue/50 transition-colors">
            <h4 className="flex items-center gap-2 text-white font-bold mb-4">
              <Server className="w-5 h-5 text-cyber-blue" /> Home Lab
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Proxmox VE 8.x Cluster</li>
              <li>• ZFS Mirrored Storage</li>
              <li>• Ollama / DeepSeek-R1 Local AI</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION & CERTS */}
        <footer className="pt-8 border-t border-slate-800 text-sm">
          <h3 className="text-white font-bold mb-4">Education & Certifications</h3>
          <p><strong>B.S. in Computer Science</strong> - SNHU</p>
          <p className="text-cyber-blue"><strong>CompTIA Security+</strong> (In Progress - 2026)</p>
          <p>Google Networking Fundamentals</p>
        </footer>
      </div>
    </main>
  );
}