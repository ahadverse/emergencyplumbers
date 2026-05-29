"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { NAV_SERVICES } from "@/lib/constants";
import { trackEvent } from "@/lib/trackEvent";
import Image from "next/image";

interface Props {
  variant: "home" | "service";
  activeHref?: string;
}

const SERVICE_LINKS = [
  { href: "/drain-cleaning", label: "Drain Cleaning" },
  { href: "/pipe-repair", label: "Pipe Repair" },
  { href: "/water-heater", label: "Water Heater" },
  { href: "/emergency-plumbing", label: "Emergency" },
];

export default function Navigation({ variant, activeHref }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const Logo = () => (
    <Link
      href='/'
      className={variant === "home" ? "nav-logo-home" : "nav-logo"}
    >
      Emergency<span>Plumbers</span>
    </Link>
  );

  if (variant === "home") {
    return (
      <>
        <nav className='nav-home'>
          <Logo />
          <div className='nav-center' style={{ position: "relative" }}>
            <button
              className='nav-services-btn'
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div
                className='nav-services-dropdown'
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {NAV_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className='nav-svc-item'
                    onClick={() => setServicesOpen(false)}
                  >
                    <Image
                      src={s.imageUrl}
                      alt={s.label}
                      width={42}
                      height={42}
                      className='nav-svc-img'
                    />
                    <div>
                      <div className='nav-svc-label'>{s.label}</div>
                      <div className='nav-svc-sub'>{s.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link href='/how-it-works' className='nav-services-btn'>
              How It Works
            </Link>
            <Link href='/our-plumbers' className='nav-services-btn'>
              Our Plumbers
            </Link>
            <Link href='/blog' className='nav-services-btn'>
              Blog
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* <a href={PHONE_HREF} className="nav-phone-home" onClick={() => trackEvent('call_click')}>
              📞 {PHONE}
            </a> */}
            <a
              href={PHONE_HREF}
              className='nav-cta-home'
              onClick={() => trackEvent("call_click")}
            >
              📞 Free Quote
            </a>
          </div>
          <div className='hamburger' onClick={() => setMobileOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        </nav>
        {mobileOpen && (
          <>
            <div
              className='mobile-menu-overlay'
              onClick={() => setMobileOpen(false)}
            />
            <div className='mobile-menu'>
              <button
                className='mobile-menu-close'
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
              <div className='mobile-menu-section'>
                <h4>Services</h4>
                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className='mobile-menu-link'
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className='mobile-menu-section'>
                <h4>Company</h4>
                {["/about", "/how-it-works", "/our-plumbers", "/blog"].map(
                  (href) => (
                    <Link
                      key={href}
                      href={href}
                      className='mobile-menu-link'
                      onClick={() => setMobileOpen(false)}
                    >
                      {href
                        .replace("/", "")
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ),
                )}
              </div>
              <a
                href={PHONE_HREF}
                className='mobile-menu-cta'
                onClick={() => {
                  setMobileOpen(false);
                  trackEvent("call_click");
                }}
              >
                📞 Call Now — Free
              </a>
              <a
                href={PHONE_HREF}
                className='mobile-menu-phone'
                onClick={() => trackEvent("call_click")}
              >
                📞 {PHONE}
              </a>
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <>
      <nav>
        <Logo />
        <div className='nav-links'>
          {SERVICE_LINKS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`nav-link${(activeHref ?? pathname) === s.href ? " active" : ""}`}
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a
            href={PHONE_HREF}
            className='nav-phone'
            onClick={() => trackEvent("call_click")}
          >
            📞 {PHONE}
          </a>
          <a
            href={PHONE_HREF}
            className='nav-cta'
            onClick={() => trackEvent("call_click")}
          >
            📞 Free Quote
          </a>
        </div>
        <div className='hamburger' onClick={() => setMobileOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
      {mobileOpen && (
        <>
          <div
            className='mobile-menu-overlay'
            onClick={() => setMobileOpen(false)}
          />
          <div className='mobile-menu'>
            <button
              className='mobile-menu-close'
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            <div className='mobile-menu-section'>
              <h4>Services</h4>
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className='mobile-menu-link'
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className='mobile-menu-section'>
              <h4>Company</h4>
              {["/about", "/how-it-works", "/our-plumbers", "/contact"].map(
                (href) => (
                  <Link
                    key={href}
                    href={href}
                    className='mobile-menu-link'
                    onClick={() => setMobileOpen(false)}
                  >
                    {href
                      .replace("/", "")
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ),
              )}
            </div>
            <a
              href={PHONE_HREF}
              className='mobile-menu-cta'
              onClick={() => {
                setMobileOpen(false);
                trackEvent("call_click");
              }}
            >
              📞 Call Now — Free
            </a>
            <a
              href={PHONE_HREF}
              className='mobile-menu-phone'
              onClick={() => trackEvent("call_click")}
            >
              📞 {PHONE}
            </a>
          </div>
        </>
      )}
    </>
  );
}
