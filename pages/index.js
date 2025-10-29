import Head from "next/head";
import styles from "../styles/Home.module.css";

const highlights = [
  {
    title: "Revenue Optimization",
    description:
      "Dynamic pricing models, occupancy forecasting, and channel strategy tailored specifically for short-term rentals so every night is profitable."
  },
  {
    title: "Guest Journey Magic",
    description:
      "Automations that send hyper-personalized recommendations, concierge playbooks, and in-stay upsells that make each stay memorable."
  },
  {
    title: "Brand Amplification",
    description:
      "Immersive storytelling, cinematic listings, and social buzz campaigns that convert browsers into loyal BoostBNB superfans."
  }
];

const milestones = [
  {
    phase: "Launch",
    label: "Signature onboarding sprints align your brand DNA, revenue goals, and operational cadence."
  },
  {
    phase: "Accelerate",
    label: "Always-on experimentation blends pricing science, paid acquisition, and retention loops."
  },
  {
    phase: "Scale",
    label: "Portfolio intelligence dashboards reveal expansion-ready markets and experience packages."
  }
];

const testimonials = [
  {
    quote:
      "BoostBNB transformed our occupancy curve—90% bookings within eight weeks and guests rave about the curated experiences.",
    author: "Avery, Palm Springs"
  },
  {
    quote:
      "From listing refresh to loyalty loops, the team orchestrated it all. Our average nightly rate jumped 27%.",
    author: "Jonah, Asheville"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BoostBNB</title>
        <meta
          name="description"
          content="BoostBNB crafts immersive hospitality experiences that amplify revenue, loyalty, and brand love for modern short-term rentals."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className={styles.page}>
        <div className={styles.orbit} aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.35}s` }} />
          ))}
        </div>
        <section className={styles.hero}>
          <p className={styles.tagline}>The Growth Collective for Remarkable Stays</p>
          <h1 className={styles.title}>BoostBNB</h1>
          <p className={styles.subtitle}>
            We engineer end-to-end guest journeys that turn boutique rentals into magnetic, ever-booked destinations. From story-rich brand kits and cinematic media to data-fed pricing choreography, BoostBNB is your invisible growth engine.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#offerings">
              Explore the Blueprint
            </a>
            <a className={styles.secondaryCta} href="#collective">
              Meet the Collective
            </a>
          </div>
        </section>

        <section id="offerings" className={styles.offerings}>
          <h2>Signature BoostBNB Systems</h2>
          <div className={styles.highlightGrid}>
            {highlights.map((highlight) => (
              <article key={highlight.title} className={styles.card}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.pulse}>
          <div className={styles.pulseContent}>
            <h2>Hospitality with a Heartbeat</h2>
            <p>
              BoostBNB merges hospitality artistry with analytical precision. We orchestrate content studios, influencer residencies, and immersive brand partnerships that pulse across channels—amplifying visibility while protecting your time.
            </p>
            <p>
              Our proprietary BoostBoard surfaces live sentiment signals, pace variance, and guest delight metrics so you can iterate confidently and deliver wow-worthy stays.
            </p>
          </div>
          <div className={styles.pulseViz}>
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
          </div>
        </section>

        <section id="collective" className={styles.collective}>
          <h2>The BoostBNB Growth Timeline</h2>
          <div className={styles.timeline}>
            {milestones.map((milestone) => (
              <div key={milestone.phase} className={styles.timelineItem}>
                <div className={styles.timelineBadge}>{milestone.phase}</div>
                <p>{milestone.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>Hosts Who Boost</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className={styles.testimonialCard}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>— {testimonial.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.footerCta}>
          <div className={styles.footerContent}>
            <h2>Ready to unlock unforgettable stays?</h2>
            <p>
              Join the BoostBNB collective to co-create iconic guest experiences, energized operations, and a brand story that travelers will chase across the globe.
            </p>
          </div>
          <a className={styles.footerButton} href="mailto:hello@boostbnb.com">
            Start a Discovery Session
          </a>
        </section>
      </main>
    </>
  );
}
