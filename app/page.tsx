'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll-based nav background
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Fade-in on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* Navigation */}
      <nav id="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src="/icon.png" alt="MaintainMe" className="logo-icon-img" />
            <span className="logo-text">MaintainMe</span>
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#download" className="btn btn-primary">Download</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span>&#9679;</span> Now available on iOS
            </div>
            <h1>Stop guessing.<br /><span className="gradient-text">Start maintaining.</span></h1>
            <p className="hero-sub">One app to track maintenance schedules for your home, vehicles, and appliances. Get reminders before things break, track every dollar spent, and never miss a service again.</p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                Download for iOS
              </a>
              <a href="#features" className="btn btn-outline">See Features</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">150+</div>
                <div className="hero-stat-label">Pre-built task templates</div>
              </div>
              <div>
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Private &amp; local</div>
              </div>
              <div>
                <div className="hero-stat-value">4.9</div>
                <div className="hero-stat-label">Beta rating</div>
              </div>
            </div>
          </div>
          <div className="hero-phone">
            <div className="phone-glow"></div>
            <img src="/screenshots/appstore-1-dashboard.jpg" alt="MaintainMe Dashboard" className="phone-mockup" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Features</div>
            <h2>Everything you need to<br />stay on top of maintenance</h2>
            <p className="section-desc">From oil changes to HVAC filters, MaintainMe keeps every schedule in one place with intelligent reminders and actionable insights.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(99, 102, 241, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>Smart Scheduling</h3>
              <p>Set time-based or mileage-based intervals. MaintainMe calculates your next service date automatically and adjusts as you complete tasks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <h3>Intelligent Reminders</h3>
              <p>Get notified days or weeks before a task is due. Set multiple reminders per task so nothing slips through the cracks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(34, 197, 94, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
              </div>
              <h3>Spending Analytics</h3>
              <p>Track every dollar spent on maintenance. See monthly trends, category breakdowns, and annual summaries at a glance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(245, 158, 11, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>Quick-Add Templates</h3>
              <p>150+ pre-built maintenance schedules for cars, homes, and appliances. Add a task in seconds with expert-recommended intervals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(168, 85, 247, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Mileage Tracking</h3>
              <p>Track vehicle maintenance by odometer reading. MaintainMe knows when your next oil change, tire rotation, or brake service is due.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(6, 182, 212, 0.12)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Complete Privacy</h3>
              <p>All data stays on your device. No accounts, no cloud uploads, no tracking. Your maintenance data is yours and yours alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="showcase fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">How It Works</div>
            <h2>Up and running in minutes</h2>
            <p className="section-desc">No account creation, no setup wizards. Install, add your first item, and start tracking.</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <h3>Add Your Items</h3>
              <p>Add your car, home, or appliances. MaintainMe organizes everything by category.</p>
            </div>
            <div className="step">
              <h3>Set Schedules</h3>
              <p>Use our templates or create custom intervals. Set it once and forget it.</p>
            </div>
            <div className="step">
              <h3>Get Reminded</h3>
              <p>Receive timely notifications before tasks are due. Multiple reminders per task.</p>
            </div>
            <div className="step">
              <h3>Track &amp; Complete</h3>
              <p>Log completions with cost, provider, and notes. Build a complete maintenance history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">The App</div>
            <h2>Built for real life</h2>
            <p className="section-desc">Clean, focused, and fast. Designed to feel native on iOS from day one.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-item">
              <img src="/screenshots/appstore-2-tasks.jpg" alt="Task List" />
              <h3>Task Overview</h3>
              <p>See overdue, upcoming, and due-soon tasks at a glance</p>
            </div>
            <div className="showcase-item">
              <img src="/screenshots/appstore-4-analytics.jpg" alt="Analytics" />
              <h3>Spending Insights</h3>
              <p>Monthly trends and category breakdowns for maintenance costs</p>
            </div>
            <div className="showcase-item">
              <img src="/screenshots/appstore-5-templates.jpg" alt="Templates" />
              <h3>Quick-Add Templates</h3>
              <p>150+ pre-built schedules from expert maintenance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="privacy-section fade-in">
        <div className="section-inner">
          <div className="privacy-grid">
            <div>
              <div className="section-label">Privacy First</div>
              <h2>Your data never<br />leaves your device</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: 16, lineHeight: 1.7, fontSize: 16 }}>We built MaintainMe with a simple principle: your maintenance data belongs to you. There are no servers, no accounts, and no way for us to access your information. Ever.</p>
            </div>
            <div className="privacy-points">
              {[
                { title: '100% Local Storage', desc: 'All data is stored on your device using encrypted local storage. Nothing is transmitted.' },
                { title: 'No Account Required', desc: 'Start using MaintainMe immediately. No email, no signup, no login walls.' },
                { title: 'Zero Analytics', desc: "We don't use Google Analytics, Firebase, or any third-party tracking. Period." },
                { title: 'No Data Sharing', desc: 'Your information is never sold, shared, or monetized in any way.' },
                { title: 'Full Data Control', desc: 'Export your data anytime. Delete everything with one tap. You\'re in control.' },
              ].map((point) => (
                <div className="privacy-point" key={point.title}>
                  <div className="privacy-check">&#10003;</div>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Pricing</div>
            <h2>Simple, transparent pricing</h2>
            <p className="section-desc">Get started for free. Upgrade when you&apos;re ready for more.</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Free</h3>
              <div className="price">$0</div>
              <div className="price-period">Free forever</div>
              <ul className="price-features">
                <li>Up to 10 items</li>
                <li>Up to 25 maintenance tasks</li>
                <li>Smart reminders</li>
                <li>Mileage tracking</li>
                <li>Calendar view</li>
                <li>150+ task templates</li>
              </ul>
              <a href="#download" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Get Started</a>
            </div>
            <div className="price-card featured">
              <div className="price-badge">7-day free trial</div>
              <h3>Pro</h3>
              <div className="price">$4.99 <span>/ month</span></div>
              <div className="price-period">Cancel anytime</div>
              <ul className="price-features">
                <li>Unlimited items &amp; tasks</li>
                <li>Spending analytics</li>
                <li>Maintenance intelligence</li>
                <li>Ad-free experience</li>
                <li>Priority support</li>
                <li>Everything in Free</li>
              </ul>
              <a href="#download" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta fade-in">
        <div className="section-inner">
          <h2>Take control of your maintenance</h2>
          <p>Download MaintainMe today and never miss another oil change, filter replacement, or warranty deadline.</p>
          <a href="#" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
            Download for iOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-copy">&copy; 2026 MaintainMe. All rights reserved.</div>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="mailto:support@maintainme.live">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

const globalStyles = `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #070B14;
  --surface: #0F1520;
  --surface-2: #161D2E;
  --border: #1E293B;
  --text: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-tertiary: #64748B;
  --primary: #818CF8;
  --primary-dark: #6366F1;
  --primary-muted: rgba(129, 140, 248, 0.12);
  --danger: #EF4444;
  --warning: #F59E0B;
  --success: #22C55E;
  --gradient-start: #6366F1;
  --gradient-end: #818CF8;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 16px 0; transition: background 0.3s, backdrop-filter 0.3s;
}
nav.scrolled {
  background: rgba(7, 11, 20, 0.85);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; justify-content: space-between; align-items: center;
}
.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--text); }
.logo-icon-img {
  width: 36px; height: 36px; border-radius: 10px;
}
.logo-text { font-size: 20px; font-weight: 700; letter-spacing: -0.3px; }
.nav-links { display: flex; align-items: center; gap: 32px; list-style: none; }
.nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }

.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px;
  border-radius: 10px; font-size: 14px; font-weight: 600;
  text-decoration: none; transition: all 0.2s; cursor: pointer; border: none;
}
.btn-primary { background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); color: white; }
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35); }
.btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
.btn-outline:hover { border-color: var(--primary); background: var(--primary-muted); }

.hero {
  position: relative; min-height: 100vh; display: flex; align-items: center;
  padding: 120px 24px 80px; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
  width: 900px; height: 900px;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; width: 100%;
}
.hero-content { position: relative; z-index: 2; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px;
  background: var(--primary-muted); border: 1px solid rgba(129, 140, 248, 0.2);
  border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--primary); margin-bottom: 24px;
}
.hero-badge span { font-size: 10px; }
h1 { font-size: 56px; font-weight: 800; line-height: 1.08; letter-spacing: -1.5px; margin-bottom: 20px; }
h1 .gradient-text {
  background: linear-gradient(135deg, var(--gradient-start), #A5B4FC);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 36px; max-width: 480px; }
.hero-actions { display: flex; gap: 16px; margin-bottom: 48px; }
.hero-stats { display: flex; gap: 40px; }
.hero-stat-value { font-size: 28px; font-weight: 700; color: var(--text); }
.hero-stat-label { font-size: 13px; color: var(--text-tertiary); font-weight: 500; }
.hero-phone { position: relative; display: flex; justify-content: center; }
.phone-mockup {
  width: 320px; border-radius: 40px;
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  position: relative; z-index: 2;
}
.phone-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 400px; height: 600px;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  pointer-events: none;
}

section { padding: 120px 24px; }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 64px; }
.section-label {
  display: inline-block; font-size: 13px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 1.5px; color: var(--primary); margin-bottom: 16px;
}
h2 { font-size: 40px; font-weight: 800; letter-spacing: -0.8px; line-height: 1.15; margin-bottom: 16px; }
.section-desc { font-size: 17px; color: var(--text-secondary); max-width: 560px; margin: 0 auto; line-height: 1.7; }

.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.feature-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 16px; padding: 32px; transition: all 0.3s;
}
.feature-card:hover { border-color: rgba(129, 140, 248, 0.3); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); }
.feature-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 20px;
}
.feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.2px; }
.feature-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

.showcase { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.showcase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.showcase-item { text-align: center; }
.showcase-item img { width: 100%; max-width: 260px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); margin-bottom: 20px; }
.showcase-item h3 { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.showcase-item p { font-size: 13px; color: var(--text-tertiary); }

.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; counter-reset: step; }
.step { position: relative; text-align: center; padding: 32px 20px; }
.step::before {
  counter-increment: step; content: counter(step);
  display: flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white; font-size: 18px; font-weight: 700; margin: 0 auto 20px;
}
.step h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.step p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

.privacy-section { background: linear-gradient(180deg, var(--bg), var(--surface)); }
.privacy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.privacy-points { display: flex; flex-direction: column; gap: 20px; }
.privacy-point { display: flex; gap: 16px; align-items: flex-start; }
.privacy-check {
  width: 28px; height: 28px; border-radius: 8px; background: rgba(34, 197, 94, 0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  margin-top: 2px; color: var(--success); font-size: 14px;
}
.privacy-point h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
.privacy-point p { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }

.pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px; margin: 0 auto; }
.price-card { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 40px 32px; position: relative; }
.price-card.featured { border-color: var(--primary); box-shadow: 0 0 0 1px var(--primary), 0 20px 60px rgba(99, 102, 241, 0.15); }
.price-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  padding: 4px 16px; background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-radius: 100px; font-size: 12px; font-weight: 600; color: white; white-space: nowrap;
}
.price-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.price-card .price { font-size: 40px; font-weight: 800; margin-bottom: 4px; }
.price-card .price span { font-size: 16px; font-weight: 500; color: var(--text-secondary); }
.price-period { font-size: 13px; color: var(--text-tertiary); margin-bottom: 24px; }
.price-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
.price-features li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary); }
.price-features li::before { content: '✓'; color: var(--success); font-weight: 700; font-size: 13px; }

.cta { text-align: center; padding: 120px 24px; position: relative; }
.cta::before {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 800px; height: 400px;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
  pointer-events: none;
}
.cta h2 { margin-bottom: 16px; }
.cta p { font-size: 17px; color: var(--text-secondary); max-width: 480px; margin: 0 auto 36px; line-height: 1.7; }

footer { border-top: 1px solid var(--border); padding: 48px 24px; }
.footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.footer-copy { font-size: 13px; color: var(--text-tertiary); }
.footer-links { display: flex; gap: 24px; list-style: none; }
.footer-links a { font-size: 13px; color: var(--text-tertiary); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: var(--text); }

@media (max-width: 768px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 48px; }
  .hero-sub { margin: 0 auto 36px; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  h1 { font-size: 38px; }
  h2 { font-size: 30px; }
  .features-grid { grid-template-columns: 1fr; }
  .showcase-grid { grid-template-columns: 1fr; }
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .privacy-grid { grid-template-columns: 1fr; }
  .pricing-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .footer-inner { flex-direction: column; gap: 24px; text-align: center; }
}

@media (max-width: 480px) {
  h1 { font-size: 32px; }
  .hero-actions { flex-direction: column; align-items: center; }
  .steps-grid { grid-template-columns: 1fr; }
}

.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
`;
