import type { Metadata } from 'next';
import Link from 'next/link';
import { InstallCommand } from '@/components/install-command';
import { ErdPromo } from '@/components/erd-promo';

// Ported from the "Devid Landing Page" design canvas. The canvas is the design reference; this file is the source.
const CLI_COMMAND = 'curl -fsSL https://github.com/hadziqmtqn/devid-binaries/releases/download/devid-latest/install.sh | sh';
const GUI_COMMAND = `${CLI_COMMAND} -s -- --gui`;

export const metadata: Metadata = {
  title: { absolute: 'Devid: local PHP and Node.js development for Intel Macs' },
  description:
    'Every project gets its own https:// address. Laravel on PHP 8.3 to 8.5, Node.js and Vite through your own dev server, with no Homebrew, Docker or VM. Open source under the AGPL-3.0.',
  openGraph: {
    title: 'Devid: local PHP and Node.js development for Intel Macs',
    url: '/',
    siteName: 'Devid',
    type: 'website',
    images: { url: '/og/home.png', width: 1200, height: 630, alt: 'Devid: every project gets its own https:// address' },
  },
};

export default function HomePage() {
  return (
    <div style={{ containerType: "inline-size", containerName: "dv", background: "#FBFAFD", color: "#15142B", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "clamp(16px, 1.2cqi, 17px)", lineHeight: "1.6" }}>
    
    <header style={{ background: "#16151F", color: "#F4F4FA" }}>
    <nav aria-label="Main" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 32px" }}>
    <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#F4F4FA" }}>
    <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#2A2936"></rect><path d="M37 46 V37 A13 13 0 0 1 63 37 V46" fill="none" style={{ stroke: "var(--dv-accent)" }} strokeWidth="8" strokeLinecap="round"></path><rect x="25" y="44" width="50" height="36" rx="9" fill="#F4F4FA"></rect><path d="M37 55 L45 62 L37 69" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M51 69 H62" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round"></path></svg>
    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.04em" }}>devid</span>
    </a>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", marginLeft: "auto", alignItems: "center", fontSize: "15px" }}>
    <div className="dv-navlinks" style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", alignItems: "center" }}>
    <a href="#why" style={{ color: "#C9C7D6", textDecoration: "none", padding: "10px 0" }}>Why Devid</a>
    <a href="#features" style={{ color: "#C9C7D6", textDecoration: "none", padding: "10px 0" }}>Features</a>
    <a href="#requirements" style={{ color: "#C9C7D6", textDecoration: "none", padding: "10px 0" }}>Requirements</a>
    <Link href="/docs" style={{ color: "#C9C7D6", textDecoration: "none", padding: "10px 0" }}>Docs</Link>
    </div>
    <a href="#install" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "10px", background: "var(--dv-accent)", color: "#16151F", fontWeight: "600", textDecoration: "none" }}>Install</a>
    </div>
    </nav>
    
    <section id="top" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(32px, 4.4cqi, 64px) 24px clamp(48px, 5.6cqi, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "48px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "14px", color: "var(--dv-accent)", border: "1px solid #3A3948", borderRadius: "999px", padding: "6px 14px" }}>Open source · for Intel Macs</span>
    <h1 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(38px, 4.5cqi, 64px)", lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.03em" }}>Every project gets its own <span style={{ color: "var(--dv-accent)" }}>https://</span> address.</h1>
    <p style={{ margin: "0", fontSize: "clamp(17px, 1.4cqi, 20px)", color: "#C9C7D6", maxWidth: "32em" }}>Local development for Laravel, PHP and Node.js on Intel Macs. Each folder runs at <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "#F4F4FA" }}>&lt;name&gt;.test</span> with trusted HTTPS. No Homebrew, Docker or VM.</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
    <a href="#install" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "12px", background: "var(--dv-accent)", color: "#16151F", fontWeight: "600", textDecoration: "none" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14"></path></svg>
    Install for Mac</a>
    <a href="https://github.com/hadziqmtqn/devid" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "12px", border: "1px solid #4A4858", color: "#F4F4FA", fontWeight: "500", textDecoration: "none" }}>Source on GitHub</a>
    </div>
    </div>
    
    <div style={{ background: "#0E0D15", border: "1px solid #2E2D3A", borderRadius: "16px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 16px", background: "#1E1D29", borderBottom: "1px solid #2E2D3A" }}>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#FF5F57" }}></span>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#FEBC2E" }}></span>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#28C840" }}></span>
    </div>
    <pre style={{ margin: "0", padding: "clamp(18px, 1.7cqi, 24px)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "clamp(13px, 1.05cqi, 15px)", lineHeight: "1.75", color: "#E4E3EE", whiteSpace: "pre", overflowX: "auto" }}><span style={{ color: "var(--dv-accent)" }}>❯</span> devid park ~/Projects{'\n'}<span style={{ color: "#A9A7BA" }}>  # every subfolder becomes &lt;folder&gt;.test</span>{'\n'}{'\n'}<span style={{ color: "var(--dv-accent)" }}>❯</span> devid cmd add app dev -- npm run dev{'\n'}<span style={{ color: "#A9A7BA" }}>  # Devid starts and stops your dev server</span>{'\n'}{'\n'}<span style={{ color: "var(--dv-accent)" }}>❯</span> devid sites{'\n'}  https://shop.test   Laravel   PHP 8.4{'\n'}  https://app.test    Vite      proxy :5173</pre>
    </div>
    </section>
    </header>
    
    <section id="why" style={{ background: "#E3F6EC" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 5.6cqi, 80px) 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "760px" }}>
    <h2 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.3cqi, 48px)", lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.03em" }}>Homebrew left Intel Macs behind. Devid didn’t.</h2>
    <p style={{ margin: "0", fontSize: "clamp(17px, 1.35cqi, 19px)", color: "#2F4A3C" }}>Homebrew moved Intel Macs to Tier 3: no more prebuilt packages, so Valet’s PHP and nginx build from source. Devid ships them prebuilt, without a package manager.</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
    <article style={{ background: "#FFFFFF", border: "1px solid #C4E8D4", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", fontWeight: "600" }}>No Homebrew</h3>
    <p style={{ margin: "0", color: "#4A4860" }}>PHP, nginx and Caddy come from Devid’s releases, sha256-checked.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #C4E8D4", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", fontWeight: "600" }}>No Docker, no VM</h3>
    <p style={{ margin: "0", color: "#4A4860" }}>Native processes. At idle, Devid with nginx and two PHP versions uses about 30 MB.</p>
    </article>
    <article style={{ background: "#16151F", color: "#F4F4FA", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", fontWeight: "600" }}>Made for Intel Macs</h3>
    <p style={{ margin: "0", color: "#C9C7D6" }}>macOS 12 or newer (tested on 14), x86_64. Planned: tests on macOS 15 and later, Apple silicon, Linux and Windows.</p>
    </article>
    </div>
    </div>
    </section>
    
    <section id="features" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 5.6cqi, 80px) 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
    <h2 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.1cqi, 44px)", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.02em" }}>What you get</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Automatic HTTPS</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>A local CA limited to .test. No extra step.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>PHP 8.3, 8.4, 8.5</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Side by side, pinned per site. Xdebug and pcov included.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Node.js, Vite, Next.js</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Detected per folder and proxied to your dev server, hot reload included. Node is yours, e.g. from nvm.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Extensions, prebuilt</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>imagick, mongodb, swoole and more. Nothing to compile.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>nginx, Caddy or Apache</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>nginx by default. Switch with one command.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Dev servers, started for you</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Save <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px" }}>npm run dev</span> or a queue worker per site, then start and stop it from Devid.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Park or link</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>A whole folder of projects, or just one. Laravel, WordPress or Vite: each is detected and served to match.</p>
    </article>
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "16px", padding: "clamp(20px, 1.8cqi, 26px)", display: "flex", flexDirection: "column", gap: "8px" }}>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>CLI, TUI, menu-bar app</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Same actions everywhere. <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px" }}>devid doctor</span> finds problems and says how to fix them.</p>
    </article>
    </div>
    
    <div style={{ background: "#FFFFFF", border: "1px solid #D9D6E3", borderRadius: "14px", overflow: "hidden", boxShadow: "0 20px 50px rgba(21,20,43,0.12)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F4F3F8", borderBottom: "1px solid #E4E2EC" }}>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#FF5F57" }}></span>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#FEBC2E" }}></span>
    <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "6px", background: "#28C840" }}></span>
    <span style={{ margin: "0 auto", fontSize: "13px", fontWeight: "600", color: "#3F3D52" }}>Devid</span>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="dv-sidebar" style={{ flex: "1 1 180px", maxWidth: "100%", background: "#F7F6FA", borderRight: "1px solid #E4E2EC", padding: "16px 12px", display: "flex", flexDirection: "column", gap: "2px", fontSize: "14px" }}>
    <span style={{ padding: "8px 12px", borderRadius: "8px", background: "#E4E2EC", fontWeight: "600" }}>Sites</span>
    <span style={{ padding: "8px 12px", color: "#3F3D52" }}>PHP</span>
    <span style={{ padding: "8px 12px", color: "#3F3D52" }}>Server</span>
    <span style={{ padding: "8px 12px", color: "#3F3D52" }}>Logs</span>
    <span style={{ padding: "8px 12px", color: "#3F3D52" }}>Settings</span>
    </div>
    <div style={{ flex: "999 1 520px", minWidth: "0", padding: "clamp(16px, 1.8cqi, 24px)", display: "flex", flexDirection: "column", gap: "14px" }}>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "20px", fontWeight: "600" }}>Sites</span>
    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#1D7A4C", background: "#E3F6EC", borderRadius: "999px", padding: "4px 10px" }}><span aria-hidden="true" style={{ width: "7px", height: "7px", borderRadius: "4px", background: "#1D9A5C" }}></span>Running</span>
    </div>
    <div style={{ border: "1px solid #E4E2EC", borderRadius: "10px", overflowX: "auto" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", minWidth: "460px" }}>
    <thead>
    <tr style={{ background: "#F7F6FA", color: "#5A5870", textAlign: "left" }}>
    <th style={{ padding: "10px 14px", fontWeight: "500" }}>Site</th>
    <th style={{ padding: "10px 14px", fontWeight: "500" }}>Served as</th>
    <th style={{ padding: "10px 14px", fontWeight: "500" }}>Folder</th>
    </tr>
    </thead>
    <tbody>
    <tr style={{ borderTop: "1px solid #E4E2EC" }}>
    <td style={{ padding: "11px 14px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>shop.test</td>
    <td style={{ padding: "11px 14px" }}>PHP 8.4 <span style={{ color: "#5A5870" }}>· Laravel</span></td>
    <td style={{ padding: "11px 14px", color: "#5A5870" }}>~/Projects/shop</td>
    </tr>
    <tr style={{ borderTop: "1px solid #E4E2EC" }}>
    <td style={{ padding: "11px 14px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>blog.test</td>
    <td style={{ padding: "11px 14px" }}>PHP 8.5 <span style={{ color: "#5A5870" }}>· WordPress</span></td>
    <td style={{ padding: "11px 14px", color: "#5A5870" }}>~/Projects/blog</td>
    </tr>
    <tr style={{ borderTop: "1px solid #E4E2EC" }}>
    <td style={{ padding: "11px 14px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>app.test</td>
    <td style={{ padding: "11px 14px" }}>Proxy :5173 <span style={{ color: "#5A5870" }}>· Vite</span></td>
    <td style={{ padding: "11px 14px", color: "#5A5870" }}>~/Projects/app</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section id="requirements" style={{ background: "#EEEDF4" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 5.6cqi, 80px) 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "32px 48px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <h2 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.1cqi, 44px)", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.02em" }}>Requirements</h2>
    <p style={{ margin: "0", color: "#5A5870" }}>Everything lives in <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px" }}>~/.devid</span>. <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px" }}>devid uninstall</span> undoes setup.</p>
    </div>
    <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 5fr)", columnGap: "16px", borderTop: "1px solid #D9D6E3" }}>
    <dt style={{ padding: "12px 0", borderBottom: "1px solid #D9D6E3", color: "#5A5870" }}>System</dt>
    <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #D9D6E3" }}>macOS 12+ on an Intel Mac (tested on 14)</dd>
    <dt style={{ padding: "12px 0", borderBottom: "1px solid #D9D6E3", color: "#5A5870" }}>Setup</dt>
    <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #D9D6E3" }}>Admin password, once: .test DNS, Devid’s CA and ports 80/443</dd>
    <dt style={{ padding: "12px 0", borderBottom: "1px solid #D9D6E3", color: "#5A5870" }}>Ports</dt>
    <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #D9D6E3" }}>80 and 443 free (stop Valet first)</dd>
    <dt style={{ padding: "12px 0", borderBottom: "1px solid #D9D6E3", color: "#5A5870" }}>Not included</dt>
    <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #D9D6E3" }}>Databases (use e.g. DBngin), and Node.js: Devid uses yours</dd>
    </dl>
    </div>
    </section>
    
    <section id="install" style={{ background: "#16151F", color: "#F4F4FA" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 5.6cqi, 80px) 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
    <h2 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.3cqi, 48px)", lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.03em" }}>Install in one command.</h2>
    <div style={{ width: "100%", maxWidth: "920px", display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <span style={{ fontSize: "15px", fontWeight: "500", color: "#C9C7D6" }}>With the desktop app</span>
    <InstallCommand command={GUI_COMMAND} copyLabel="Copy the install command with the desktop app" />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <span style={{ fontSize: "15px", fontWeight: "500", color: "#C9C7D6" }}>CLI and TUI only</span>
    <InstallCommand command={CLI_COMMAND} copyLabel="Copy the install command without the app" />
    </div>
    </div>
    <p style={{ margin: "0", maxWidth: "720px", fontSize: "15px", color: "#A9A7BA" }}>An open-source personal project, provided as is. Builds are ad-hoc signed and not notarized; the command installs them without a Gatekeeper prompt. Setup asks for your password once for .test DNS, Devid’s CA and ports 80/443, and <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "#E4E3EE" }}>devid uninstall</span> undoes it.</p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
    <a href="https://github.com/hadziqmtqn/devid-binaries/releases" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "12px", background: "var(--dv-accent)", color: "#16151F", fontWeight: "600", textDecoration: "none" }}>Releases on GitHub</a>
    <Link href="/docs" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "12px", border: "1px solid #4A4858", color: "#F4F4FA", fontWeight: "500", textDecoration: "none" }}>Read the guide</Link>
    </div>
    <ErdPromo placement="landing" />
    </div>
    <footer style={{ borderTop: "1px solid #2E2D3A" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", flexWrap: "wrap", gap: "12px 28px", alignItems: "center", fontSize: "14px", color: "#A9A7BA" }}>
    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: "600", color: "#F4F4FA", fontSize: "18px", letterSpacing: "-0.03em" }}>devid</span>
    <span>© 2026 Devid by <a href="https://bekenweb.com" style={{ color: "#C9C7D6" }}>Bekenweb</a> · open source under the <a href="https://github.com/hadziqmtqn/devid/blob/main/LICENSE" style={{ color: "#C9C7D6" }}>AGPL-3.0</a>, provided as is</span>
    <Link href="/docs" style={{ color: "#C9C7D6", marginLeft: "auto" }}>Docs</Link>
    <a href="https://github.com/hadziqmtqn/devid" style={{ color: "#C9C7D6" }}>Source</a>
    <a href="https://github.com/hadziqmtqn/devid-binaries/releases" style={{ color: "#C9C7D6" }}>Releases</a>
    <a href="https://github.com/hadziqmtqn/devid-binaries/issues" style={{ color: "#C9C7D6" }}>Issues</a>
    </div>
    </footer>
    </section>
    
    </div>
  );
}
