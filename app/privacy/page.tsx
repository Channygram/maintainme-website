import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — MaintainMe',
};

export default function PrivacyPolicy() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="pp-container">
        <a href="/" className="pp-back">&larr; Back to MaintainMe</a>
        <h1>Privacy Policy</h1>
        <p className="pp-updated">Last updated: March 11, 2026</p>

        <div className="pp-highlight">
          <p>MaintainMe does not collect, store, or transmit any personal data. All information you enter stays on your device.</p>
        </div>

        <h2>Overview</h2>
        <p>MaintainMe (&ldquo;the App&rdquo;) is a maintenance tracking application developed by MaintainMe (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to protecting your privacy. This policy explains our practices regarding information collection, use, and disclosure.</p>

        <h2>Information We Collect</h2>
        <p>We do not collect any personal information. The App operates entirely on your device:</p>
        <ul>
          <li>All maintenance data, items, tasks, and logs are stored locally on your device using on-device storage.</li>
          <li>No data is transmitted to our servers or any third-party servers.</li>
          <li>We do not require account creation, email addresses, or any personal identifiers.</li>
        </ul>

        <h2>Local Data Storage</h2>
        <p>All data you enter into MaintainMe is stored exclusively on your device using local storage mechanisms provided by the operating system. This includes maintenance items, task schedules, completion logs, cost records, and any notes or photos you attach.</p>
        <p>We do not have access to this data and cannot retrieve it if your device is lost or reset.</p>

        <h2>Third-Party Services</h2>
        <p>The App uses the following third-party services:</p>
        <ul>
          <li><strong>RevenueCat</strong> — Used solely for processing in-app subscriptions. RevenueCat may collect anonymous transaction identifiers as required by Apple. See <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>.</li>
          <li><strong>Google AdMob</strong> — Used to display advertisements in the free tier of the App. AdMob may collect device identifiers for ad personalization if permitted. You can opt out of personalized ads through your device settings. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
        </ul>

        <h2>Analytics and Tracking</h2>
        <p>We do not use any analytics services, tracking pixels, or data collection tools. We do not track your usage patterns, screen views, or interactions within the App.</p>

        <h2>Advertising</h2>
        <p>The free tier of MaintainMe displays banner advertisements through Google AdMob. These ads may use device identifiers for ad targeting as permitted by your device settings and Apple&apos;s App Tracking Transparency framework. You will be prompted to allow or deny tracking when first using the App. Pro subscribers do not see any advertisements.</p>

        <h2>Data Sharing</h2>
        <p>We do not sell, rent, trade, or otherwise share any user data with third parties. We do not have access to your data in the first place.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>The App is not directed to children under 13. We do not knowingly collect any information from children.</p>

        <h2>Data Deletion</h2>
        <p>Since all data is stored locally on your device, you can delete all App data at any time by uninstalling the App or using the &ldquo;Delete All Data&rdquo; option in the App&apos;s Settings.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@maintainme.live">support@maintainme.live</a>.</p>
      </div>
    </>
  );
}

const styles = `
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #070B14; color: #F1F5F9; line-height: 1.8;
    -webkit-font-smoothing: antialiased;
  }
  .pp-container { max-width: 720px; margin: 0 auto; padding: 80px 24px 120px; }
  a { color: #818CF8; }
  .pp-back { display: inline-flex; align-items: center; gap: 6px; color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; margin-bottom: 40px; }
  .pp-back:hover { color: #F1F5F9; }
  h1 { font-size: 36px; font-weight: 800; letter-spacing: -0.8px; margin-bottom: 8px; }
  .pp-updated { font-size: 13px; color: #64748B; margin-bottom: 48px; }
  h2 { font-size: 20px; font-weight: 700; margin-top: 40px; margin-bottom: 12px; letter-spacing: -0.2px; }
  p { color: #94A3B8; margin-bottom: 16px; font-size: 15px; }
  ul { color: #94A3B8; margin-bottom: 16px; padding-left: 20px; font-size: 15px; }
  li { margin-bottom: 8px; }
  .pp-highlight { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 12px; padding: 20px 24px; margin: 24px 0; }
  .pp-highlight p { color: #F1F5F9; margin-bottom: 0; font-weight: 500; }
`;
