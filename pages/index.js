import Head from "next/head";
import styles from "../styles/Home.module.css";

const metrics = [
  { value: "+5–15%", label: "Typical revenue uplift once optimization kicks in" },
  { value: "24/7", label: "Radar monitors pricing, occupancy, and demand signals" },
  { value: "<10 min", label: "Connect Lodgify with a secure API key" }
];

const featureHighlights = [
  {
    title: "Radar intelligence",
    description:
      "Live monitoring watches pricing changes, occupancy dips, booking pace, and local demand shocks the moment they happen."
  },
  {
    title: "Agent-grade analysis",
    description:
      "Our agent compares your data with market patterns to uncover what helps or hurts performance—no spreadsheets required."
  },
  {
    title: "Action with receipts",
    description:
      "Every suggestion comes with the why, the data, and the expected outcome so you always stay in control."
  },
  {
    title: "Learns your portfolio",
    description:
      "BoostBNB measures the results of every change and adapts strategies to your specific properties over time."
  }
];

const steps = [
  {
    title: "Connect your PMS",
    description:
      "Paste your Lodgify API key using the guided setup. Secure read access lets BoostBNB understand your listings."
  },
  {
    title: "Radar listens",
    description:
      "Pricing moves, new bookings, slow periods, local events—Radar surfaces the signals that matter in real time."
  },
  {
    title: "Agent plans the move",
    description:
      "When opportunity strikes, the Agent runs the numbers and drafts an optimization tailored to your limits."
  },
  {
    title: "You choose the mode",
    description:
      "Stay in Assist for approvals or switch on Autopilot for safe automations with the guardrails you set."
  }
];

const optimizationAreas = [
  {
    title: "Pricing",
    description:
      "Smarter nightly rates that respond to demand, comps, and special events without constant manual edits."
  },
  {
    title: "Availability",
    description:
      "Fill gaps, shorten minimum stays when pacing drops, and keep calendars ready for last-minute demand."
  },
  {
    title: "Content",
    description:
      "Recommendations to sharpen titles, descriptions, and photos so browsers convert into guests."
  },
  {
    title: "Performance analytics",
    description:
      "Clear narratives on occupancy, ADR, and revenue shifts with the data behind every swing."
  }
];

const modes = [
  {
    title: "Assist mode",
    description:
      "BoostBNB drafts optimizations and you approve them. Perfect for learning the playbook while staying hands-on."
  },
  {
    title: "Autopilot mode",
    description:
      "Set safe limits—like never changing price beyond ±15%—and let BoostBNB apply low-risk improvements automatically."
  },
  {
    title: "Full transparency",
    description:
      "Every action includes a digest of what changed, why it changed, and the forecasted impact, ready to share with partners."
  }
];

const securityPoints = [
  "Your Lodgify API key is encrypted with AES-256 and can be revoked at any time.",
  "BoostBNB only reads listing and booking data and writes changes you explicitly approve.",
  "Audit trails show the origin, time, and data behind every recommendation or action."
];

const pricing = [
  {
    title: "Starter",
    description: "Weekly audits and prioritized recommendations for hosts getting their optimization rhythm."
  },
  {
    title: "Pro",
    description: "Daily optimization cycles with one-click actions and detailed performance reporting."
  },
  {
    title: "Autopilot",
    description: "Hands-off automation that keeps learning from results to compound your portfolio gains."
  }
];

const roadmap = [
  {
    label: "Guesty integration",
    description: "In development so larger portfolios can plug into the BoostBNB stack."
  },
  {
    label: "Hostaway + Hostfully",
    description: "Expanding compatibility across the major PMS platforms you already rely on."
  },
  {
    label: "Deeper market signals",
    description: "Event, weather, and flight data to anticipate demand before it hits your calendar."
  }];

export default function Home() {
  return (
    <>
      <Head>
        <title>BoostBNB · Your PMS optimization agent</title>
        <meta
          name="description"
          content="BoostBNB connects to your PMS, watches your listings, and applies data-backed optimizations so you earn more with less effort."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Always-on PMS optimization</span>
            <h1 className={styles.title}>BoostBNB is your data-driven co-host</h1>
            <p className={styles.description}>
              Connect BoostBNB to your Property Management System and gain a digital co-manager that never sleeps. Radar spots
              what changed, the Agent analyzes the why, and you get the exact play—suggested or automated—to keep bookings and
              revenue climbing.
            </p>
            <div className={styles.waitlist}>
              <div className={styles.waitlistField}>
                <input className={styles.waitlistInput} type="email" placeholder="Enter your email" aria-label="Email" />
                <button className={styles.waitlistButton} type="button">
                  Join the waitlist
                </button>
              </div>
              <p className={styles.waitlistNote}>Coming soon · Works with Lodgify today, more PMS platforms next.</p>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <h3>What you get</h3>
            <div className={styles.metrics}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Transparent reports that explain every tweak, with the data used to make it.</span>
              </div>
              <div className={styles.listItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Assist and Autopilot modes so you can approve or automate on your terms.</span>
              </div>
              <div className={styles.listItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Founder offer: first 5,000 users get 80% off the first year.</span>
              </div>
            </div>
          </aside>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>A modern operating system for short-term rental growth</h2>
            <p className={styles.sectionSubtitle}>
              BoostBNB connects directly to the tools you already use. It watches every listing, learns from every action, and
              turns insights into revenue-ready moves without adding to your workload.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {featureHighlights.map((feature) => (
              <article key={feature.title} className={styles.feature}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How BoostBNB works</h2>
            <p className={styles.sectionSubtitle}>
              Four simple steps bring automation online while keeping you firmly in the driver’s seat.
            </p>
          </div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Optimization coverage out of the box</h2>
            <p className={styles.sectionSubtitle}>
              From dynamic pricing to content refreshes, BoostBNB is the co-host that keeps tuning every lever of performance.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {optimizationAreas.map((area) => (
              <article key={area.title} className={styles.feature}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Assist or automate—your call</h2>
            <p className={styles.sectionSubtitle}>
              Choose how hands-on you want to be. Either way, you get crystal-clear visibility into what BoostBNB is doing for your
              portfolio.
            </p>
          </div>
          <div className={styles.modes}>
            {modes.map((mode) => (
              <article key={mode.title} className={styles.modeCard}>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.security}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Security you can trust</h2>
              <p className={styles.sectionSubtitle}>
                Your PMS credentials stay safe, encrypted, and revocable. BoostBNB only touches what you allow.
              </p>
            </div>
            <div className={styles.securityList}>
              {securityPoints.map((point) => (
                <div key={point} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Flexible plans built for any host</h2>
            <p className={styles.sectionSubtitle}>
              Pricing is per property so you can scale BoostBNB across your portfolio without surprises. Founder offer: 80% off for
              the first 5,000 users.
            </p>
          </div>
          <div className={styles.pricing}>
            {pricing.map((tier) => (
              <article key={tier.title} className={styles.pricingCard}>
                <h3>{tier.title}</h3>
                <p>{tier.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.founderNote}>Launch pricing will be just a few dollars per property each month—with full functionality.</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>On the roadmap</h2>
            <p className={styles.sectionSubtitle}>
              Lodgify is live today. We’re expanding so every major PMS can plug into the BoostBNB optimization engine.
            </p>
          </div>
          <div className={styles.roadmap}>
            {roadmap.map((item) => (
              <div key={item.label} className={styles.roadmapItem}>
                <h4>{item.label}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.footer}>
          <div>
            <h2>Get on the launch list</h2>
            <p>
              BoostBNB is coming soon. Be first in line for early access, the founder discount, and the tools that keep your
              short-term rentals fully booked.
            </p>
          </div>
          <div className={styles.waitlist}>
            <div className={styles.waitlistField}>
              <input className={styles.waitlistInput} type="email" placeholder="Email address" aria-label="Email" />
              <button className={styles.waitlistButton} type="button">
                Join the waitlist
              </button>
            </div>
            <p className={styles.waitlistNote}>Launching soon. Cancel anytime before go-live.</p>
          </div>
        </section>
      </main>
    </>
  );
}
