import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export default function Footer({ variant }: { variant: 'full' | 'simple' }) {
  if (variant === 'simple') {
    return (
      <footer>
        <div className="footer-simple">
          <Link href="/" className="footer-logo">Emergency<span>Plumbers</span></Link>
          <nav className="footer-nav">
            <Link href="/drain-cleaning">Drain Cleaning</Link>
            <Link href="/pipe-repair">Pipe Repair</Link>
            <Link href="/water-heater">Water Heater</Link>
            <Link href="/emergency-plumbing">Emergency</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Emergency Plumbers. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <div className="footer-full">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-full">Emergency<span>Plumbers</span></Link>
          <p>Licensed master plumbers across Tennessee. Drain cleaning, pipe repair, water heaters, and 24/7 emergency plumbing — same-day availability with upfront pricing.</p>
          <div className="footer-social">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">tw</a>
            <a href="#">yt</a>
          </div>
          <div className="footer-badges">
            <span className="fbadge">Licensed & Insured</span>
            <span className="fbadge">BBB A+ Rated</span>
            <span className="fbadge">4.9★ Average</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/drain-cleaning">Drain Cleaning</Link>
          <Link href="/pipe-repair">Pipe Repair</Link>
          <Link href="/water-heater">Water Heater</Link>
          <Link href="/emergency-plumbing">Emergency Plumbing</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/our-plumbers">Our Plumbers</Link>
          <Link href="/careers">Careers</Link>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <Link href="/contact">Contact Us</Link>
          <Link href="/financing">Financing</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/reviews">Reviews</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <a href={PHONE_HREF} style={{ color: 'rgba(255,255,255,0.45)' }}>{PHONE}</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">✉</span>
            <span>support@emergencyplumbers.live</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">🕐</span>
            <span>24/7 Emergency Line</span>
          </div>
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="footer-bottom-full">
        <span>© {new Date().getFullYear()} Emergency Plumbers Inc. All rights reserved.</span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/sitemap-page">Sitemap</Link>
        </div>
      </div>
    </div>
  );
}
