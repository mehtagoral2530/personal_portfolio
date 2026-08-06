import { SiteHeader } from "@/components/SiteHeader";
import { assetPath } from "@/lib/site-paths";

const researchStreams = [
  {
    field: "Medical-device intelligence",
    tone: "sage",
    title: "U.S. medical-device market intelligence",
    description:
      "Supported recurring client research by connecting product, pricing, competitor, and regulatory developments in clear Excel outputs and written analysis.",
    scope: "3 U.S. client programs each month",
    evidence: "Product, pricing, competitor, and regulatory activity",
    deliverable: "Recurring Excel research outputs and written market analysis for client teams",
    signals: ["Product", "Pricing", "Competitor", "Regulation"],
  },
  {
    field: "Tracker design & analysis",
    tone: "sky",
    title: "Competitive intelligence tracker",
    description:
      "Built and maintained living trackers that made availability, ASP signals, FDA activity, competitor movement, and coverage gaps easier to compare over time.",
    scope: "5 maintained client trackers",
    evidence: "Availability, ASP, FDA, competitor, and coverage signals",
    deliverable: "Living client trackers that brought changing market signals into one comparable view",
    signals: ["Availability", "ASP", "FDA", "Coverage"],
  },
  {
    field: "Primary research synthesis",
    tone: "lavender",
    title: "Biosimilar opportunity assessment",
    description:
      "Supported a breast-cancer biosimilar assessment through KOL research, pipeline mapping, and organized market-access insights.",
    scope: "KOL research and pipeline mapping",
    evidence: "Biosimilar market-access context for a breast-cancer opportunity",
    deliverable: "Confidential client assessment with KOL research, pipeline maps, and market-access synthesis",
    signals: ["KOL", "Pipeline", "Access", "Opportunity"],
  },
];

const experience = [
  {
    dates: "2021 — 2024",
    company: "GlobalData Plc",
    role: "Analyst / Associate Analyst, Healthcare Market Intelligence",
    location: "Hyderabad, India",
    bullets: [
      "Delivered research and competitive intelligence for U.S. medical-device clients across product, pricing, and market activity.",
      "Maintained client trackers and research outputs with clear data-quality and documentation practices.",
      "Trained 2–4 analysts on research workflows, tracker maintenance, and source documentation.",
    ],
  },
  {
    dates: "2020 — 2021",
    company: "Mellalta Meets",
    role: "Business Development Intern, Pharma Market Research",
    location: "Delhi, India / Remote",
    bullets: [
      "Researched biosimilar pipelines and stakeholder landscapes for a pharmaceutical client.",
      "Organized competitive intelligence to support business-development planning.",
    ],
  },
  {
    dates: "2019",
    company: "Watair Envisol Group",
    role: "Intern",
    location: "Ahmedabad, India",
    bullets: [
      "Supported regulated laboratory QA/QC work with careful SOP adherence and documentation controls.",
    ],
  },
  {
    dates: "2017",
    company: "CSIR India / CSMCRI",
    role: "Summer Research Intern",
    location: "Bhavnagar, India",
    bullets: [
      "Built a foundation in molecular biology, tissue culture, laboratory safety, and scientific documentation.",
    ],
  },
];

const foundations = [
  {
    label: "Education",
    entries: [
      "Integrated B.Tech + M.Tech in Biotechnology · Amity University Rajasthan · 2016–2021",
      "Minor Degree in Food Technology · Amity University Rajasthan · 2016–2020",
    ],
  },
  {
    label: "Credentials",
    entries: [
      "Google Data Analytics Certificate",
      "ICH-GCP E6(R3) · The Global Health Network",
      "LinkedIn Skill Assessments · Microsoft Excel & Microsoft PowerPoint",
    ],
  },
  {
    label: "Toolkit",
    entries: [
      "Excel · SQL · Data validation · Pivot tables",
      "Competitive intelligence · Dashboarding · Research documentation",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="fieldbook-spine" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <SiteHeader />

      <main id="content">
        <section className="fieldbook-hero" id="about" aria-labelledby="hero-heading">
          <div className="section-wrap hero-layout">
            <div className="hero-identity" aria-hidden="true">
              <span>Field notes</span>
              <span>Selected work</span>
            </div>

            <div className="hero-copy">
              <p className="hero-kicker">
                <span>Goral Bhatt</span>
                <span>Healthcare market intelligence analyst</span>
              </p>
              <h1 id="hero-heading">Research that helps healthcare teams see what matters next.</h1>
              <p className="hero-intro">
                Healthcare market research, competitive intelligence, tracker design, and research synthesis for medical-device, biosimilar, and strategy teams.
              </p>
              <div className="hero-actions">
                <a className="action-link action-link--ink" href="#work">
                  Explore research <ArrowIcon />
                </a>
                <a className="action-link action-link--line" href={assetPath("/Goral-Bhatt-Resume.pdf")} download>
                  Download résumé <ArrowIcon />
                </a>
              </div>
              <p className="hero-location">Dallas, Texas · Open to healthcare research, data, and strategy opportunities.</p>
            </div>

            <figure className="hero-visual">
              <div className="hero-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element -- Static GitHub Pages serves this responsive public asset directly. */}
                <img
                  src={assetPath("/healthcare-intelligence-hero.jpg")}
                  alt="Illustration of a professional reviewing healthcare information"
                  width={1408}
                  height={912}
                  fetchPriority="high"
                />
              </div>
              <figcaption>
                <span>Medical devices</span>
                <span>Competitive intelligence</span>
                <span>Biosimilars</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="fieldbook-intro" aria-labelledby="work-heading">
          <div className="section-wrap intro-layout">
            <p className="section-tab">Research contributions</p>
            <div>
              <h2 id="work-heading">Healthcare evidence needs a point of view.</h2>
              <p>
                I organize complex market signals into research that teams can compare, discuss, and use. These are the recurring workstreams I have supported.
              </p>
            </div>
          </div>
        </section>

        <section className="work-streams" id="work" aria-label="Research contributions">
          {researchStreams.map((stream) => (
            <article className={`work-plate work-plate--${stream.tone}`} key={stream.title}>
              <div className="section-wrap work-plate-inner">
                <div className="plate-spine">
                  <p>{stream.field}</p>
                  <span aria-hidden="true" />
                </div>
                <div className="plate-copy">
                  <h3>{stream.title}</h3>
                  <p>{stream.description}</p>
                  <dl className="plate-facts">
                    <div>
                      <dt>Scope</dt>
                      <dd>{stream.scope}</dd>
                    </div>
                    <div>
                      <dt>Evidence handled</dt>
                      <dd>{stream.evidence}</dd>
                    </div>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>{stream.deliverable}</dd>
                    </div>
                  </dl>
                </div>
                <ul className="signal-list" aria-label={`Signals in ${stream.title}`}>
                  {stream.signals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="career-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-wrap career-layout">
            <div className="career-heading">
              <p className="section-tab section-tab--light">Career trace</p>
              <h2 id="experience-heading">A path through markets, data, and science.</h2>
              <p>Experience built across healthcare intelligence, pharma market research, regulated documentation, and scientific research.</p>
            </div>
            <ol className="career-trace">
              {experience.map((item) => (
                <li className="career-entry" key={`${item.company}-${item.dates}`}>
                  <div className="career-meta">
                    <time>{item.dates}</time>
                    <p>{item.location}</p>
                  </div>
                  <div className="career-body">
                    <h3>{item.company}</h3>
                    <p className="career-role">{item.role}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="foundation-section" aria-labelledby="foundation-heading">
          <div className="section-wrap foundation-layout">
            <div className="foundation-heading">
              <p className="section-tab">Foundation</p>
              <h2 id="foundation-heading">Biotechnology fluency, documentation discipline, and data craft.</h2>
              <a className="text-action" href={assetPath("/Goral-Bhatt-Resume.pdf")} download>
                Read the full résumé <ArrowIcon />
              </a>
            </div>
            <dl className="foundation-ledger">
              {foundations.map((foundation) => (
                <div key={foundation.label}>
                  <dt>{foundation.label}</dt>
                  <dd>
                    {foundation.entries.map((entry) => (
                      <span key={entry}>{entry}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="contact-close" id="contact" aria-labelledby="contact-heading">
          <div className="section-wrap contact-layout">
            <p className="section-tab section-tab--light">Get in touch</p>
            <div>
              <h2 id="contact-heading">Let&apos;s make a difficult market question easier to act on.</h2>
              <p>I&apos;m available to discuss healthcare research, data analysis, clinical research support, and strategy opportunities.</p>
            </div>
            <address className="contact-links">
              <a href="mailto:mehtagoral2530@gmail.com">
                <span>Email</span>
                <strong>mehtagoral2530@gmail.com</strong>
                <ArrowIcon />
              </a>
              <a href="tel:+14129059023">
                <span>Phone</span>
                <strong>(412) 905-9023</strong>
                <ArrowIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/goralbhatt301098"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <span>LinkedIn</span>
                <strong>linkedin.com/in/goralbhatt301098</strong>
                <ArrowIcon />
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-layout">
          <a className="footer-name" href="#top" aria-label="Back to top">
            Goral Bhatt
          </a>
          <p>Healthcare market intelligence · data analysis</p>
          <a className="footer-top" href="#top">
            Back to top <ArrowIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
