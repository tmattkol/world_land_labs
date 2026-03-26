'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#0F2A44] font-sans overflow-x-hidden">

{/* NAVBAR - logo expands downward dramatically (no clipping) */}
<nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between h-16">
    <div className="flex items-center gap-3">
      {/* Container sized for downward growth - NO overflow-hidden */}
      <div className="relative w-[190px] h-[140px] flex-shrink-0">
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 transition-transform duration-300 hover:scale-[5] origin-top-left z-10"
        >
          <Image
            src="/wll_logo.png"
            alt="World Land Labs"
            width={180}
            height={58}
            className="h-[58px] w-auto"
            priority
          />
        </div>
      </div>
    </div>

    {/* Desktop Nav - stays above the logo */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium relative z-20">
      <a href="#how" className="hover:text-[#A8D5BA] transition">How It Works</a>
      <a href="#tenants" className="hover:text-[#A8D5BA] transition">For Tenants</a>
      <a href="#investors" className="hover:text-[#A8D5BA] transition">For Investors</a>
      <a href="#pilot" className="hover:text-[#A8D5BA] transition">Pilot Property</a>
      <a href="#roadmap" className="hover:text-[#A8D5BA] transition">Roadmap</a>
    </div>

    <div className="flex items-center gap-4 relative z-20">
      <a
        href="/whitepaper.pdf"
        download
        className="bg-[#A8D5BA] hover:bg-[#6BB89C] text-white px-6 py-3 rounded-2xl text-sm font-semibold transition hidden sm:flex"
      >
        Download Whitepaper
      </a>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-3xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6 text-sm font-medium">
      <a href="#how" className="hover:text-[#A8D5BA]" onClick={() => setIsMenuOpen(false)}>How It Works</a>
      <a href="#tenants" className="hover:text-[#A8D5BA]" onClick={() => setIsMenuOpen(false)}>For Tenants</a>
      <a href="#investors" className="hover:text-[#A8D5BA]" onClick={() => setIsMenuOpen(false)}>For Investors</a>
      <a href="#pilot" className="hover:text-[#A8D5BA]" onClick={() => setIsMenuOpen(false)}>Pilot Property</a>
      <a href="#roadmap" className="hover:text-[#A8D5BA]" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
      <a href="/whitepaper.pdf" download className="bg-[#A8D5BA] text-white px-6 py-3 rounded-2xl text-center font-semibold">Download Whitepaper</a>
    </div>
  )}
</nav>

      {/* HERO */}
      <header className="bg-gradient-to-br from-[#E8F5E9] to-[#B0D8FF] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F2A44]">
              World Land Labs
            </h1>
            <p className="text-2xl mt-2 text-[#0F2A44]/90">Soliloqui Digital Currency</p>
            <p className="mt-6 text-xl leading-relaxed">
              A decentralized multi-tenant income property owner. Tenants build wealth. Investors earn yields. Properties are never sold for corporate profit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#how" className="bg-[#0F2A44] text-white px-8 py-4 rounded-3xl text-lg font-semibold hover:bg-[#1e3a5a] transition">See How It Works</a>
              <a href="https://soliloqui.io" target="_blank" className="border-2 border-[#0F2A44] text-[#0F2A44] px-8 py-4 rounded-3xl text-lg font-semibold hover:bg-[#E8F5E9] transition">Buy SOLQ</a>
            </div>
            <p className="text-xs mt-8 text-[#0F2A44]/60">Q1 2026 Token Launch • KYC/AML required • Smart contracts audited • Properties owned by Soliloqui DAO</p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Futuristic_circular_eco-building.jpg"
                alt="Futuristic_circular_eco-building"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* SOLQ badge overlay - 25% smaller */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-3xl px-5 py-3 shadow-xl flex items-center gap-2.5 z-10 scale-75 origin-bottom-left">
              <Image src="/soliloqui_icon.png" alt="SOLQ" width={42} height={42} />
              <div>
                <p className="font-semibold text-base">SOLQ Token</p>
                <p className="text-xs text-emerald-600">40% tenant rebates • 10% holder yields</p>
              </div>
            </div>           
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-8">It's Time To Rethink Your Housing Needs</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm">Median home price in the U.S.: $415,200 (Q4 2025). Government subsidies and over regulation contribute.</div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">Institutional Investors bought up to 33% of SFR in the U.S., stop letting them hold you hostage with high rents.</div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">40% of renters never expect to own a home pushing them off one of the savings avenues, it's time to save without owning.</div>
        </div>
      </section>

      {/* SOLUTION + INCOME SPLIT */}
      <section id="how" className="bg-[#E8F5E9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">Rental Income Split – Aligned for Everyone</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[340px] md:max-w-[420px] h-[380px] md:h-[420px] overflow-visible mx-auto">
                <svg className="w-full h-full -rotate-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42.5" fill="none" stroke="#A8D5BA" strokeWidth="15" strokeDasharray="251.2 0" />
                  <circle cx="50" cy="50" r="42.5" fill="none" stroke="#0F2A44" strokeWidth="15" strokeDasharray="62.8 251.2" strokeDashoffset="251.2" />
                  <circle cx="50" cy="50" r="42.5" fill="none" stroke="#B0D8FF" strokeWidth="15" strokeDasharray="62.8 251.2" strokeDashoffset="188.4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-[50px] md:text-[70px] font-bold leading-none">100%</div>
                  <div className="mt-8 flex justify-center gap-6 md:gap-8 text-base font-medium max-w-[300px] md:max-w-[360px] mx-auto">
                    <div className="text-center pr-4 border-r border-[#0F2A44]/20">
                      <span className="block text-[#A8D5BA] text-[17px] font-bold">40%</span>
                      <span className="text-[9px]">Tenants<br/>(vested SOLQ)</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[#0F2A44] text-[17px] font-bold">50%</span>
                      <span className="text-[9px]">PLC Fund<br/>(MLB + ops)</span>
                    </div>
                    <div className="text-center pl-4 border-l border-[#0F2A44]/20">
                      <span className="block text-[#B0D8FF] text-[17px] font-bold">10%</span>
                      <span className="text-[9px]">Token Holders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-5 text-lg">
              <p className="text-2xl leading-tight">Rent paid → Smart contract auto-splits instantly.</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-[#A8D5BA] font-bold text-2xl">40%</span> Tenants receive locked SOLQ rebates, long term investment maintains robust ecosystem integrity (10% vests yearly for 10 years)</li>
                <li className="flex gap-3"><span className="text-[#0F2A44] font-bold text-2xl">50%</span> Property Life Constitution (management, maintenance, MLB concierge services, updates/remodels)</li>
                <li className="flex gap-3"><span className="text-[#B0D8FF] font-bold text-2xl">10%</span> Smart Contracts ensure SOLQ token holders receive automatic yield distributions directly to their wallets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* TENANTS */}
<section id="tenants" className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-semibold text-center mb-8">For Tenants – Ease of Living + Wealth Building Thru App and Website</h2>
  
  <div className="bg-white rounded-3xl p-8 md:p-10">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      
      {/* Left column - bullet list */}
      <div className="space-y-6 text-lg leading-relaxed">
        <ul className="space-y-6">
          <li>Browse &amp; Commit/Rent with integrated application screening/approval</li>
          <li>E-sign leases (DocuSign), pay deposit/rent in fiat or SOLQ</li>
          <li>40% rent rebate as vested SOLQ (potential for &gt;$376k over 20 years)</li>
          <li>MLB concierge, maintenance, retail/food orders, disaster support</li>
          <li>Vote on important issues (weighted by tenancy length)</li>
        </ul>
      </div>

      {/* Right column - Pro Forma box */}
      <div className="text-sm bg-[#E8F5E9] p-8 rounded-3xl flex flex-col justify-center items-center text-center h-full min-h-[260px] mx-auto w-full max-w-full">
        <p className="font-semibold">Pro Forma Example (one unit, 20 years)</p>
        <p className="text-6xl md:text-7xl font-bold text-[#A8D5BA] mt-2">$376,920</p>
        <p className="text-[#0F2A44]/70 mt-4">
          in vested SOLQ rebates while paying below-market rent. Amount can vary based on 
          amount of rent paid for different rental units and in and length of time renting.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* INVESTORS */}
      <section id="investors" className="bg-[#E8F5E9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-center mb-8">For Token Holders / Investors – Yields + Governance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl">10% of rental income auto-distributed directly into token holders wallet.</div>
            <div className="bg-white p-8 rounded-3xl">DAO voting on major decisions, no individual or corporation control.</div>
            <div className="bg-white p-8 rounded-3xl">Real-time portfolio tracking + staking rewards controlled inside App.</div>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <section id="pilot" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-1xl font-semibold text-center mb-8">Property Acquisition Example • 962 N Normandie, Los Angeles</h2>
        <div className="bg-white rounded-3xl p-10 text-center">
          <p className="text-2xl">16-unit complex • Built 2020 • $8.2M cash purchase • 5.18% cap rate</p>
          <p className="mt-8 text-4xl font-bold text-[#A8D5BA]">$585,600 - split between tenants, token holders and PLC</p>
          <p className="text-sm text-[#0F2A44]/60">Annual gross potential rental income</p>
        </div>
      </section>

      {/* MLB */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#B0D8FF]/10">
        <h2 className="text-3xl font-semibold text-center mb-12">Making Life Better (MLB) Services - Available soon after property acquisition</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-8 rounded-3xl">Concierge deliveries Amazon/grocery/food delivery during working hours 9AM–5PM first come first serve.</div>
          <div className="bg-white p-8 rounded-3xl">Disaster support; safe havens home/neighborhood, security priority.</div>
          <div className="bg-white p-8 rounded-3xl">Automation services will be introduced, use of Optimus when available.</div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Roadmap</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="flex gap-6"><div className="font-mono w-28">Mid 2026</div><div>Token launch + ICO, smart contract audits</div></div>
          <div className="flex gap-6"><div className="font-mono w-28">Late 2026</div><div>Release beta app + Acquire first property</div></div>
          <div className="flex gap-6"><div className="font-mono w-28">Early 2027</div><div>Scale to 10 properties</div></div>
        </div>
      </section>

      {/* WHITEPAPER DOWNLOAD */}
      <section id="whitepaper" className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Download the Full Whitepaper</h2>
          <p className="text-lg text-[#0F2A44]/70 max-w-md mx-auto">Everything about World Land Labs and SOLQ.</p>
          <a 
            href="/whitepaper.pdf" 
            download 
            className="mt-8 inline-flex bg-[#A8D5BA] hover:bg-[#6BB89C] text-white px-10 py-5 rounded-3xl text-lg font-semibold transition"
          >
            Download Whitepaper (PDF)
          </a>
        </div>
      </section>

      {/* STAY UPDATED */}
      <section className="bg-[#E8F5E9] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold">Stay Updated on the Launch</h3>
          <p className="mt-4 text-lg">Be the first to know about World Land Labs updates, properties and when SOLQ goes live in 2026.</p>
          <button className="mt-8 bg-[#0F2A44] text-white px-8 py-4 rounded-3xl text-lg font-semibold hover:bg-[#1e3a5a]">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F2A44] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>© 2026 World Land Labs • SOLQ is a security token. Reg D / MiCA compliant.</p>
          <p className="mt-4">Not financial advice. Past performance is not indicative of future results. Consult legal and financial advisors.</p>
          <p className="mt-8 text-xs opacity-60">KYC/AML required • Smart contracts audited • Properties owned by Soliloqui DAO</p>
        </div>
      </footer>
    </div>
  );
}