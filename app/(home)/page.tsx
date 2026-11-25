import type { Metadata } from 'next';
import Link from 'next/link';
import { InstallTabs } from '@/components/install-tabs';
import { ErdPromo } from '@/components/erd-promo';
import { LandingNav } from '@/components/landing-nav';
import { LandingFooter } from '@/components/landing-footer';
import { latest, next } from '@/lib/roadmap';
import { siteUrl } from '@/lib/shared';

// Ported from the "Devid Landing Page" design canvas. The canvas is the design reference; this file is the source.
// The install commands are in components/install-tabs.tsx.

const DESCRIPTION =
  'Every project gets its own https:// address. Laravel on PHP 8.3 to 8.6, Node.js and Vite through your own dev server, with no Homebrew, Docker or VM. Open source under the AGPL-3.0.';

export const metadata: Metadata = {
  title: { absolute: 'Devid: local PHP and Node.js development for Macs and Linux' },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Devid: local PHP and Node.js development for Macs and Linux',
    url: '/',
    siteName: 'Devid',
    type: 'website',
    images: { url: '/og/home.png', width: 1200, height: 630, alt: 'Devid: every project gets its own https:// address' },
  },
};

// Search engines read what the app is from this (schema.org SoftwareApplication).
const JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Devid',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS 12 or later; Ubuntu 24.04 or later and Arch Linux (x86_64)',
  description: DESCRIPTION,
  url: siteUrl,
  downloadUrl: 'https://github.com/hadziqmtqn/devid-binaries/releases/latest',
  license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Bekenweb', url: 'https://bekenweb.com' },
}).replace(/</g, '\\u003c');

export default function HomePage() {
  return (
    <div style={{ containerType: "inline-size", containerName: "dv", background: "#FBFAFD", color: "#15142B", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "clamp(16px, 1.2cqi, 17px)", lineHeight: "1.6" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
    
    <header style={{ background: "#16151F", color: "#F4F4FA" }}>
    <LandingNav />
    
    <section id="top" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(32px, 4.4cqi, 64px) 24px clamp(48px, 5.6cqi, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "48px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "14px", color: "var(--dv-accent)", border: "1px solid #3A3948", borderRadius: "999px", padding: "6px 14px" }}>No Homebrew? No problem.</span>
    <h1 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(38px, 4.5cqi, 64px)", lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.03em" }}>Every project gets its own <span style={{ color: "var(--dv-accent)" }}>https://</span> address.</h1>
    <p style={{ margin: "0", fontSize: "clamp(17px, 1.4cqi, 20px)", color: "#C9C7D6", maxWidth: "32em" }}>Local development for Laravel, PHP and Node.js on Intel and Apple silicon Macs, and on Ubuntu and Arch Linux. Each folder runs at <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "#F4F4FA" }}>&lt;name&gt;.test</span> with trusted HTTPS. No Homebrew, Docker or VM.</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
    <a href="#install" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "12px", background: "var(--dv-accent)", color: "#16151F", fontWeight: "600", textDecoration: "none" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14"></path></svg>
    Install Devid</a>
    <a href="https://github.com/hadziqmtqn/devid" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 26px", borderRadius: "12px", border: "1px solid #4A4858", color: "#F4F4FA", fontWeight: "500", textDecoration: "none" }}>Source on GitHub</a>
    </div>
    <p style={{ margin: "0", fontSize: "14px", color: "#A9A7BA" }}>Open source on GitHub: <a href="https://github.com/hadziqmtqn/devid" style={{ color: "#E4E3EE" }}>devid</a> holds the source (AGPL-3.0), <a href="https://github.com/hadziqmtqn/devid-binaries" style={{ color: "#E4E3EE" }}>devid-binaries</a> the builds and releases.</p>
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
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", fontWeight: "600" }}>Macs and Linux</h3>
    <p style={{ margin: "0", color: "#C9C7D6" }}>Tested by hand on an M1 with macOS 26, on Intel with macOS 14 Sonoma, and on Ubuntu 24.04, Arch Linux and CachyOS. On Linux, the CLI and the TUI. Next: macOS 15 up to the latest macOS on Intel, as far as GitHub’s runners allow, then Windows.</p>
    </article>
    </div>
    </div>
    </section>
    
    <section id="features" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 5.6cqi, 80px) 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "760px" }}>
    <h2 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.1cqi, 44px)", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.02em" }}>What you get</h2>
    <p style={{ margin: "0", color: "#5A5870", fontSize: "clamp(17px, 1.35cqi, 19px)" }}>Sites, runtimes and the tools around them, in one install.</p>
    </div>
    
    <div className="dv-grid3 dv-feat" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
    
    <article className="dv-span2 dv-split" style={{ gridColumn: "span 2", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "28px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Sites</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "26px", lineHeight: "1.2", fontWeight: "600" }}>Park a folder. Every project gets a URL.</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Park ~/Projects or link one folder. Laravel, WordPress or Vite is detected and served to match, over HTTPS from a local CA limited to .test.</p>
    </div>
    <div className="dv-urls" style={{ background: "#F7F6FA", border: "1px solid #E4E2EC", borderRadius: "14px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <div className="dv-urlrow" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", flexWrap: "wrap", rowGap: "2px" }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D7A4C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>https://shop.test</span>
    <span className="dv-urlmeta" style={{ marginLeft: "auto", color: "#5A5870" }}>Laravel · PHP 8.4</span>
    </div>
    <div className="dv-urlrow" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", flexWrap: "wrap", rowGap: "2px" }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D7A4C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>https://blog.test</span>
    <span className="dv-urlmeta" style={{ marginLeft: "auto", color: "#5A5870" }}>WordPress · PHP 8.5</span>
    </div>
    <div className="dv-urlrow" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", flexWrap: "wrap", rowGap: "2px" }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D7A4C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>https://app.test</span>
    <span className="dv-urlmeta" style={{ marginLeft: "auto", color: "#5A5870" }}>Vite · proxy :5173</span>
    </div>
    </div>
    </article>
    
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>PHP</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", lineHeight: "1.25", fontWeight: "600" }}>8.3 to 8.6, side by side</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "10px", background: "#16151F", color: "#F4F4FA" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: "700" }}>8.5</span><span style={{ marginLeft: "auto", color: "#C9C7D6" }}>default</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "10px", background: "#F4F3F8" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: "700" }}>8.4</span><span style={{ marginLeft: "auto", color: "#5A5870" }}>shop.test</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "10px", background: "#F4F3F8" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: "700" }}>8.3</span><span style={{ marginLeft: "auto", color: "#5A5870" }}>legacy.test</span></div>
    </div>
    <p style={{ margin: "0", color: "#5A5870" }}>Pin a version per site. Xdebug and pcov included, off by default.</p>
    </article>
    
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Node.js</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", lineHeight: "1.25", fontWeight: "600" }}>Vite and Next.js, proxied</h3>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px" }}>
    <span style={{ padding: "6px 10px", borderRadius: "8px", background: "#F4F3F8" }}>app.test</span>
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="#5A5870" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 7h19M14 1l6 6-6 6"></path></svg>
    <span style={{ padding: "6px 10px", borderRadius: "8px", background: "#F4F3F8" }}>localhost:5173</span>
    </div>
    <p style={{ margin: "0", color: "#5A5870" }}>Detected per folder and proxied to your dev server, hot reload included. Node is yours, e.g. from nvm.</p>
    </article>
    
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Processes</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", lineHeight: "1.25", fontWeight: "600" }}>Dev servers, started for you</h3>
    <div style={{ background: "#16151F", color: "#E4E3EE", borderRadius: "10px", padding: "10px 14px", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", display: "flex", flexDirection: "column", gap: "4px" }}>
    <div style={{ display: "flex", gap: "10px" }}><span>app</span><span style={{ color: "#A9A7BA" }}>npm run dev</span><span style={{ marginLeft: "auto", color: "var(--dv-accent)" }}>running</span></div>
    <div style={{ display: "flex", gap: "10px" }}><span>shop</span><span style={{ color: "#A9A7BA" }}>queue worker</span><span style={{ marginLeft: "auto", color: "var(--dv-accent)" }}>running</span></div>
    </div>
    <p style={{ margin: "0", color: "#5A5870" }}>Save a command per site once, then start and stop it from Devid, or let a site’s first visit start it.</p>
    </article>
    
    <article style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Extensions</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", lineHeight: "1.25", fontWeight: "600" }}>Prebuilt, nothing to compile</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px" }}>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>apcu</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>igbinary</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>imagick</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>ldap</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>memcached</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>mongodb</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>msgpack</span>
    <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D9D6E3" }}>swoole</span>
    </div>
    <p style={{ margin: "0", color: "#5A5870" }}>intl, gd, redis and PDO are built in. Add these from Devid’s catalog.</p>
    </article>
    
    <article className="dv-ws" style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Web server</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "22px", lineHeight: "1.25", fontWeight: "600" }}>nginx, Caddy or Apache</h3>
    <div className="dv-wsctl" aria-hidden="true" style={{ display: "flex", gap: "4px", padding: "4px", borderRadius: "12px", background: "#F4F3F8", fontSize: "14px", fontWeight: "500" }}>
    <span style={{ flex: "1 1 0", textAlign: "center", padding: "8px 0", borderRadius: "9px", background: "#16151F", color: "#F4F4FA" }}>nginx</span>
    <span style={{ flex: "1 1 0", textAlign: "center", padding: "8px 0", color: "#3F3D52" }}>Caddy</span>
    <span style={{ flex: "1 1 0", textAlign: "center", padding: "8px 0", color: "#3F3D52" }}>Apache</span>
    </div>
    <p style={{ margin: "0", color: "#5A5870" }}>nginx by default. One runs at a time; switch with <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "14px" }}>devid server use</span>.</p>
    </article>
    
    <article className="dv-span2 dv-split" style={{ gridColumn: "span 2", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "28px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Interfaces</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "26px", lineHeight: "1.2", fontWeight: "600" }}>CLI, TUI or the menu-bar app</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Every action works the same in all three. <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px" }}>devid doctor</span> checks the whole setup and tells you how to fix what’s wrong.</p>
    </div>
    <div style={{ background: "#FFFFFF", border: "1px solid #D9D6E3", borderRadius: "12px", overflow: "hidden", boxShadow: "0 16px 40px rgba(21,20,43,0.12)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "10px 14px", background: "#F4F3F8", borderBottom: "1px solid #E4E2EC" }}>
    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#FF5F57" }}></span>
    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#FEBC2E" }}></span>
    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#28C840" }}></span>
    <span style={{ margin: "0 auto", fontSize: "12px", fontWeight: "600", color: "#3F3D52" }}>Devid</span>
    </div>
    <div style={{ display: "flex" }}>
    <div className="dv-sidebar" style={{ flex: "0 0 120px", background: "#F7F6FA", borderRight: "1px solid #E4E2EC", padding: "12px 8px", display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
    <span style={{ padding: "6px 10px", borderRadius: "7px", background: "#E4E2EC", fontWeight: "600" }}>Sites</span>
    <span style={{ padding: "6px 10px", color: "#3F3D52" }}>PHP</span>
    <span style={{ padding: "6px 10px", color: "#3F3D52" }}>Server</span>
    <span style={{ padding: "6px 10px", color: "#3F3D52" }}>Mail</span>
    <span style={{ padding: "6px 10px", color: "#3F3D52" }}>Logs</span>
    <span style={{ padding: "6px 10px", color: "#3F3D52" }}>Settings</span>
    </div>
    <div style={{ flex: "1 1 auto", minWidth: "0", padding: "14px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "16px", fontWeight: "600" }}>Sites</span><span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#1D7A4C", background: "#E3F6EC", borderRadius: "999px", padding: "2px 8px" }}><span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "3px", background: "#1D9A5C" }}></span>Running</span></div>
    <div style={{ display: "flex", gap: "10px", padding: "7px 0", borderTop: "1px solid #E4E2EC" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>shop.test</span><span style={{ marginLeft: "auto", color: "#5A5870" }}>PHP 8.4 · Laravel</span></div>
    <div style={{ display: "flex", gap: "10px", padding: "7px 0", borderTop: "1px solid #E4E2EC" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>blog.test</span><span style={{ marginLeft: "auto", color: "#5A5870" }}>PHP 8.5 · WordPress</span></div>
    <div style={{ display: "flex", gap: "10px", padding: "7px 0", borderTop: "1px solid #E4E2EC" }}><span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>app.test</span><span style={{ marginLeft: "auto", color: "#5A5870" }}>Proxy :5173 · Vite</span></div>
    </div>
    </div>
    </div>
    </article>
    
    <article className="dv-split" style={{ gridColumn: "1 / -1", background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "18px", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "28px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#1D6B44" }}>Mail</span>
    <h3 style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "26px", lineHeight: "1.2", fontWeight: "600" }}>Every email your apps send, caught</h3>
    <p style={{ margin: "0", color: "#5A5870" }}>Password resets and invoices land in an inbox on your computer, not in real mailboxes. Turn it on with <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "15px", whiteSpace: "nowrap" }}>devid mail on</span> and read each message in the app. Devid runs Mailpit for it.</p>
    </div>
    <div aria-hidden="true" style={{ background: "#F7F6FA", border: "1px solid #E4E2EC", borderRadius: "14px", padding: "14px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
    <div style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "12px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ flex: "0 0 auto", width: "8px", height: "8px", borderRadius: "4px", background: "#2563EB" }}></span><span style={{ fontWeight: "600" }}>Shop</span><span style={{ marginLeft: "auto", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#5A5870" }}>09:41</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "16px", minWidth: "0", color: "#3F3D52" }}><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Reset Password Notification</span></div>
    </div>
    <div style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "12px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ flex: "0 0 auto", width: "8px", height: "8px", borderRadius: "4px", background: "#2563EB" }}></span><span style={{ fontWeight: "600" }}>Shop</span><span style={{ marginLeft: "auto", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#5A5870" }}>09:38</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "16px", minWidth: "0", color: "#3F3D52" }}><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Your invoice #1042</span><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#5A5870" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}><path d="M10.5 5.5 6 10a1.4 1.4 0 0 0 2 2l5-5a2.8 2.8 0 0 0-4-4L4 8a4.2 4.2 0 0 0 6 6l3.5-3.5"></path></svg></div>
    </div>
    <div style={{ background: "#FFFFFF", border: "1px solid #E4E2EC", borderRadius: "12px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ flex: "0 0 auto", width: "8px", height: "8px", borderRadius: "4px", background: "transparent" }}></span><span style={{ fontWeight: "500" }}>Blog</span><span style={{ marginLeft: "auto", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "#5A5870" }}>09:12</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingLeft: "16px", minWidth: "0", color: "#3F3D52" }}><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>New comment on “Hello world”</span></div>
    </div>
    </div>
    </article>
    
    </div>
    </section>
    
    <section id="roadmap" aria-labelledby="roadmap-title" style={{ background: "#FFFFFF", borderTop: "1px solid #E4E2EC", borderBottom: "1px solid #E4E2EC" }}>
    <div className="rb-split" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 4.4cqi, 64px) 24px", display: "grid", gridTemplateColumns: "minmax(0, 4fr) minmax(0, 7fr)", gap: "24px 48px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
    <h2 id="roadmap-title" style={{ margin: "0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(30px, 3.1cqi, 44px)", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.02em" }}>Roadmap</h2>
    <p style={{ margin: "0", color: "#5A5870" }}>Every release and what it added, and what comes next. No dates yet.</p>
    <Link href="/roadmap" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "12px", background: "#16151F", color: "#F4F4FA", fontWeight: "600", textDecoration: "none" }}>See the roadmap →</Link>
    </div>
    <div className="rb-two" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
    <div style={{ border: "1px solid #C4E8D4", background: "#F4FBF7", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "600", color: "#1D6B44", background: "#E3F6EC", borderRadius: "999px", padding: "4px 12px" }}>Latest · <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{latest.version}</span></span>
    <span style={{ fontWeight: "600" }}>{latest.title}</span>
    <span style={{ color: "#5A5870", fontSize: "15px" }}>{latest.note}</span>
    </div>
    <div style={{ background: "#16151F", color: "#F4F4FA", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "600", color: "#16151F", background: "var(--dv-accent)", borderRadius: "999px", padding: "4px 12px" }}>Next</span>
    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
    {next.map((p) => <li key={p.title} style={{ fontWeight: "600" }}>{p.title}</li>)}
    </ul>
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
    <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #D9D6E3" }}>Intel or Apple silicon Mac with macOS 12 or newer, or Ubuntu 24.04 or 26.04 or Arch Linux on x86_64 (tested by hand on an M1 with macOS 26, on Intel with 14 Sonoma, and on Ubuntu 24.04, Arch Linux and CachyOS)</dd>
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
    <InstallTabs />
    <p style={{ margin: "0", maxWidth: "720px", fontSize: "15px", color: "#A9A7BA" }}>An open-source personal project, provided as is. The macOS builds are ad-hoc signed and not notarized; the command installs them without a Gatekeeper prompt. Setup asks for your password once for .test DNS, Devid’s CA and ports 80/443, and <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "#E4E3EE" }}>devid uninstall</span> undoes it.</p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
    <a href="https://github.com/hadziqmtqn/devid-binaries/releases" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "12px", background: "var(--dv-accent)", color: "#16151F", fontWeight: "600", textDecoration: "none" }}>Releases on GitHub</a>
    <Link href="/docs" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "12px", border: "1px solid #4A4858", color: "#F4F4FA", fontWeight: "500", textDecoration: "none" }}>Read the guide</Link>
    </div>
    <ErdPromo placement="landing" />
    </div>
    <LandingFooter />
    </section>
    
    </div>
  );
}
