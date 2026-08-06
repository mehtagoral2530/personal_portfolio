import { SiteHeader } from "@/components/SiteHeader";

const caseStudies = [
  {
    field: "Medical-device intelligence",
    title: "U.S. medical-device market intelligence",
    description:
      "Supported recurring client research by connecting product, pricing, competitor, and regulatory developments in clear Excel outputs and written analysis.",
    scope: "3 U.S. client programs each month",
    evidence: "Product, pricing, competitor, and regulatory activity",
  },
  {
    field: "Tracker design & analysis",
    title: "Competitive intelligence tracker",
    description:
      "Built and maintained living trackers that made availability, ASP signals, FDA activity, competitor movement, and coverage gaps easier to compare over time.",
    scope: "5 maintained client trackers",
    evidence: "Availability, ASP, FDA, competitor, and coverage signals",
  },
  {
    field: "Primary research synthesis",
    title: "Biosimilar opportunity assessment",
    description:
      "Supported a breast-cancer biosimilar assessment through KOL research, pipeline mapping, and organized market-access insights.",
    scope: "KOL research and pipeline mapping",
    evidence: "Biosimilar market-access context for a breast-cancer opportunity",
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

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="content">
        <section className="hero section-wrap" id="about" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="hero-role">Goral Bhatt · Healthcare market intelligence</p>
            <h1 id="hero-heading">Healthcare market evidence, made usable.</h1>
            <p className="hero-intro">
              Healthcare market research, competitive intelligence, tracker design, and research synthesis for medical-device, biosimilar, and strategy teams.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See research contributions <span aria-hidden="true">↓</span>
              </a>
            </div>
            <a className="resume-link" href="/Goral-Bhatt-Resume.pdf" download>
              Download résumé <span aria-hidden="true">↗</span>
            </a>
            <p className="hero-location">Dallas, Texas · Open to healthcare research, data, and strategy opportunities.</p>
          </div>

          <figure className="hero-image-panel">
            <img
              src="/healthcare-intelligence-hero.jpg"
              alt="Illustration of a professional reviewing healthcare information"
              width={1408}
              height={912}
              fetchPriority="high"
            />
          </figure>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-heading">
          <div className="work-heading">
            <h2 id="work-heading">Research contributions</h2>
            <p>
              Recurring work across medical-device intelligence, structured tracker design, and biosimilar research.
            </p>
          </div>
          <div className="case-list">
            {caseStudies.map((caseStudy) => (
              <article className="case-study" key={caseStudy.title}>
                <div className="case-copy">
                  <p className="case-field">{caseStudy.field}</p>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                </div>
                <dl className="case-facts">
                  <div>
                    <dt>Scope</dt>
                    <dd>{caseStudy.scope}</dd>
                  </div>
                  <div>
                    <dt>Evidence handled</dt>
                    <dd>{caseStudy.evidence}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-wrap">
            <div className="experience-heading">
              <h2 id="experience-heading">Experience</h2>
              <p>Healthcare research, regulated documentation, and scientific foundations.</p>
            </div>
            <ol className="experience-list">
              {experience.map((item) => (
                <li className="timeline-entry" key={`${item.company}-${item.dates}`}>
                  <div className="timeline-meta">
                    <time>{item.dates}</time>
                    <p>{item.location}</p>
                  </div>
                  <div className="timeline-body">
                    <h3>{item.company}</h3>
                    <p className="timeline-role">{item.role}</p>
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

        <section className="profile-section" aria-labelledby="profile-heading">
          <div className="section-wrap profile-grid">
            <div className="profile-copy">
              <h2 id="profile-heading">Education &amp; tools</h2>
              <p>
                Integrated biotechnology training informs how I approach healthcare questions: with respect for the science, documentation discipline, and the decision a team needs to make.
              </p>
              <a className="text-link" href="/Goral-Bhatt-Resume.pdf" download>
                Read the full résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
            <dl className="profile-facts">
              <div>
                <dt>Education</dt>
                <dd>
                  <strong>Amity University Rajasthan, Jaipur</strong>
                  <span>Integrated B.Tech + M.Tech in Biotechnology · 2016–2021</span>
                  <span>Minor Degree in Food Technology · 2016–2020</span>
                </dd>
              </div>
              <div>
                <dt>Credentials</dt>
                <dd>
                  <span>Google Data Analytics Certificate</span>
                  <span>ICH-GCP E6(R3), The Global Health Network</span>
                  <span>LinkedIn Skill Assessments: Microsoft Excel &amp; Microsoft PowerPoint</span>
                </dd>
              </div>
              <div>
                <dt>Toolkit</dt>
                <dd>
                  <span>Excel · SQL · Data validation · Pivot tables</span>
                  <span>Competitive intelligence · Dashboarding</span>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-heading">
          <div className="contact-title">
            <h2 id="contact-heading">Open to healthcare research and data roles.</h2>
            <p>
              I&apos;m available to discuss healthcare research, data analysis, clinical research support, and strategy opportunities.
            </p>
          </div>
          <address className="contact-list">
            <a href="mailto:mehtagoral2530@gmail.com">
              <span>Email</span>
              <strong>mehtagoral2530@gmail.com</strong>
            </a>
            <a href="tel:+14129059023">
              <span>Phone</span>
              <strong>(412) 905-9023</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/goralbhatt301098"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/goralbhatt301098</strong>
            </a>
          </address>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-name">Goral Bhatt</span>
        </a>
        <p>Healthcare market intelligence · data analysis</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  );
}
