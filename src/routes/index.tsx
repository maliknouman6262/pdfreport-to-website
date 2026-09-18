import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUp,
  Building2,
  Camera,
  CheckCircle2,
  Crown,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Phone,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { useEffect, type ReactNode } from "react";
import coverImage from "../assets/1.jpg";
import image1 from "../assets/page1.jpg";
import image2 from "../assets/page2.jpg";
import image21 from "../assets/page21.jpg";
import SMALL from "../assets/SMALL.jpg";
import ceo from "../assets/ceo.jpg";
import FRONT from "../assets/FRONT.jpg";
import MILANBEN from "../assets/MILANBEN.jpg";
import FULL from "../assets/FULL.jpg";
import two from "../assets/two.jpg";
import WIDE from "../assets/WIDE.jpg";
import UPPER from "../assets/UPPER.jpg";
import COLUMN from "../assets/COLUMN.jpg";
import COMPANYCAM from "../assets/COMPANYCAM.jpg";
import CLEAN from "../assets/CLEAN.jpg";
import PANEL from "../assets/PANEL.jpg";
import SECOND from "../assets/SECOND.jpg";
import CUPOLA from "../assets/CUPOLA.png";
import STRONGEST from "../assets/STRONGEST.jpg";
import REPRESENTATIVE from "../assets/REPRESENTATIVE.jpg";
import ACTIVE from "../assets/ACTIVE.jpg";
import OPENING from "../assets/OPENING.jpg";
import COVERED from "../assets/COVERED.jpg";
import fa from "../assets/fa.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import five from "../assets/five.png";
import srt from "../assets/srt.jpg";
import nine from "../assets/four.png";
import ten from "../assets/four.png";
import twovel from "../assets/twovel.png";
import lobby from "../assets/lobby.jpg";
import lobby1 from "../assets/lobby1.jpg";
import lobby2 from "../assets/lobby2.jpg";
import fourteen from "../assets/fourteen.png";
import seventeen from "../assets/seventeen.png";
import twenty from "../assets/twenty.png";
import tewntytwo from "../assets/tewntytwo.png";
import qr from "../assets/qr.png";
import qr1 from "../assets/qr1.png";
import qr2 from "../assets/qr2.png";
import qr3 from "../assets/qr3.png";
import qr5 from "../assets/qr5.png";
import qr6 from "../assets/qr6.png";
import qr7 from "../assets/qr7.png";
import qr8 from "../assets/qr8.png";
import qr9 from "../assets/qr9.png";
import qr10 from "../assets/qr10.png";
import qr4 from "../assets/qr4.png";
import pool from "../assets/pool.jpg";
import pool1 from "../assets/pool1.jpg";
import pool2 from "../assets/pool2.jpg";
import RAISED from "../assets/RAISED.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Westbridge Inn & Suites — Owner Property Condition & Risk Report" },
      { name: "description", content: "Owner-facing structural, roof, envelope, historical, severe-weather, and claims-readiness report for Westbridge Inn & Suites." },
      { property: "og:title", content: "Westbridge Inn & Suites — Owner Property Condition & Risk Report" },
      { property: "og:description", content: "A 16-section property condition and risk report prepared by Crown Roofing & Solar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReportPage,
});

type CardProps = { title: string; children?: ReactNode; bullets?: string[]; className?: string };

const anchors = [
  ["cover", "Cover"], ["summary", "Summary"], ["ownership", "Ownership"],
  ["contacts", "Contacts"], ["overview", "Overview"], ["structural", "Structural"],
  ["roof", "Roof"], ["thermal", "Thermal"], ["history", "History"],
  ["weather", "Weather"], ["wind-dol", "Wind DOL"], ["correlation", "Correlation"],
  ["owner-contacts", "Owner Contacts"], ["action-plan", "Action Plan"],
  ["guarantee", "Guarantee"], ["records", "Records"],
] as const;

const disclosure = "IMPORTANT DISCLOSURE: This report is provided for informational and asset-management purposes only. Crown Roofing & Solar LLC is not acting as a Public Adjuster, attorney, engineer, insurance consultant, or representative of any insurance carrier. Nothing contained herein should be interpreted as legal advice, insurance coverage interpretation, claim adjustment, claim negotiation, or engineering conclusions.";

function ReportHeader() {
  return <header className="report-header">
    <div className="brand-lockup"><Crown aria-hidden="true" /><div><strong>CROWN</strong><span>ROOFING & SOLAR</span><small>COMMERCIAL</small></div></div>
    <div className="report-kicker"><strong>RESIDENTIAL ROOF ASSET, STORM EXPOSURE<br className="hidden sm:block" /> & CLAIM READINESS ASSESSMENT</strong><span>WESTBRIDGE INN & SUITES</span><small>Board of Directors | Building & Grounds Committee | Finance Committee</small></div>
    <div className="credential-row" aria-label="Professional credentials">
      {["$250K", "BEI", "BEI", "EXC"].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
    </div>
  </header>;
}

function ReportFooter({ pageNumber }: { pageNumber: number }) {
  return <footer className="report-footer">
    <div className="footer-links">
      <div><strong>WESTBRIDGE INN TRACKING</strong><span><Phone size={12} /> 660-243-5336</span></div>
      <div><span>Property Community Portal Access</span><span>Property Owner Portal Access</span></div>
      <div><strong><Globe2 size={13} /> crownroofingclinton.com/Westridge-Inn/Appendix</strong><span>VERIFIED. VETTED. BACKED — Directorii</span></div>
      <div className="guarantee-mini"><ShieldCheck size={20} /><strong>BACKED BY A<br />$250,000 GUARANTEE*</strong></div>
    </div>
    <div className="footer-brand"><span><Crown size={16} /> CROWN ROOFING & SOLAR</span><b>833.26.CROWN</b><b>816.892.5920</b><span>crownroofingclinton.com/Westridge-Inn/Appendix</span></div>
    <div className="disclosure"><p>{disclosure}</p><strong>PAGE {pageNumber} OF 16</strong></div>
  </footer>;
}

function InfoCard({ title, children, bullets, className = "" }: CardProps) {
  return <article className={`info-card ${className}`}><h3>{title}</h3><div className="info-body">{children}{bullets && <ul>{bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div></article>;
}

type PhotoCardProps = {
  caption: string;
  compact?: boolean;
  src?: string;
  alt?: string;
  className?: string;
};

function PhotoCard({ caption, compact = false, src, alt, className = "" }: PhotoCardProps) {
  return <figure className={`photo-card ${compact ? "compact" : ""} ${className}`}>
    {src ? (
      <img className="photo-image" src={src} alt={alt ?? caption} />
    ) : (
      <div className="photo-placeholder" role="img" aria-label={caption}><Camera aria-hidden="true" /><span>FIELD IMAGE</span></div>
    )}
    <figcaption>{caption}</figcaption>
  </figure>;
}

function QRCard({ title, description, href = "#" }: { title: string; description?: string; href?: string }) {
  return <a className="qr-card" href={href} target={href === "#" ? undefined : "_blank"} rel="noreferrer">
    <h3>{title}</h3>{description && <p>{description}</p>}<div className="qr-placeholder"><QrCode aria-hidden="true" /></div><strong>SCAN / CLICK TO OPEN <ExternalLink size={12} /></strong>
  </a>;
}

function ReportSection({ id, page, title, subtitle, children, cover = false }: { id: string; page: number; title?: string; subtitle?: string; children: ReactNode; cover?: boolean }) {
  return <section id={id} className={`report-section reveal ${cover ? "cover-section" : ""}`}>
    <ReportHeader />
    <main className="report-content">{title && <div className="section-title"><span>0{page}</span><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>}{children}</main>
    <ReportFooter pageNumber={page} />
  </section>;
}

const RoofBullets = ["raised or nonuniform exposed fasteners", "metal-panel surface marks and coating wear", "localized oxidation / corrosion", "valleys and roof intersections", "penetrations and transitions", "drainage interfaces and rooftop architectural features", "window and façade thermal differentials"];
const StructuralBullets = ["distressed / buckled-appearing support condition", "deterioration and material loss around column-base areas", "cracking and localized separation", "corrosion / rust staining", "prior repair and patching", "reported foundation or sinking concern", "supplemental / temporary-appearing support elements", "continued use of the associated second-story area"];

function ReportPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="site-shell">
    <nav className="section-nav" aria-label="Report sections"><a href="#cover" className="nav-mark" aria-label="Back to report cover"><Crown /></a><div>{anchors.map(([id, label], i) => <a href={`#${id}`} key={id}><span>{String(i + 1).padStart(2, "0")}</span>{label}</a>)}</div></nav>

    <ReportSection id="cover" page={1} cover>
      <div className="cover-hero">
        <img
          className="cover-image"
          src={coverImage}
          alt="Full-property drone aerial image of Westbridge Inn & Suites"
        />
        <div className="cover-overlay">
          <p>OWNER</p>
          <h1>PROPERTY CONDITION<br />& RISK REPORT</h1>
          <h2>WESTBRIDGE INN & SUITES</h2>
          <span>Structural Condition • Roof System • Building Envelope • Historical Evidence • Severe Weather • Claims-Readiness Documentation</span>
        </div>
      </div>

      <div className="info-grid cover-facts">
        <InfoCard title="PROPERTY & OWNERSHIP">
          <p><b>Property Address</b><br />106 S Baird St / Ave, Clinton, Missouri 64735</p>
          <p><b>Henry County Parcel</b><br />18-1.0-01-003-013-002.000</p>
          <p><b>Recorded Property Owner</b><br />OM ENTERPRISE LLC</p>
          <p><b>Hotel Operation</b><br />Westbridge Inn & Suites</p>
          <p><b>Associated Hospitality Group</b><br />Westbridge Hotel Group</p>
        </InfoCard>
        <InfoCard title="OWNER-SIDE REPORT DETAILS">
          <p><b>Primary Owner-Side Executive Contact</b><br />Dharam Chaudhari<br />CEO — Westbridge Hotel Group<br />Registered Agent / Organizer — OM Enterprise LLC</p>
          <p><b>Secondary Owner-Side Contact</b><br />Milanben D. Chaudhari, Original Organizer — OM Enterprise LLC</p>
          <p><b>Prepared by</b><br />Crown Roofing & Solar — Commercial</p>
          <p><b>Report Date</b><br />12 September 2026</p>
        </InfoCard>
      </div>

      <div className="info-grid">
        <InfoCard title="REPORT PURPOSE">
          <p>This preliminary owner-facing report organizes current field evidence, property and ownership intelligence, structural observations, roof and building-envelope conditions, historical documentation, and relevant severe-weather evidence for ownership review, professional engineering evaluation, policy review, repair planning, and claims-readiness.</p>
          <p>This report is preliminary condition documentation. It is not a structural-engineering opinion, legal opinion, insurance-coverage determination, or guarantee of storm causation.</p>
        </InfoCard>
        <PhotoCard
          src={image1}
          alt="Full-property drone aerial image of Westbridge Inn & Suites"
          caption="FULL-PROPERTY DRONE AERIAL IMAGE"
        />
      </div>
    </ReportSection>

 <ReportSection id="summary" page={2} title="OWNER EXECUTIVE SUMMARY">
  <div className="info-grid"><InfoCard title="PROPERTY CONDITION AT A GLANCE"><p>Westbridge Inn & Suites is an active hospitality property located at 106 S Baird St, Clinton, Missouri.</p><p>Current field, drone, visible-light, and thermal documentation identifies several conditions requiring direct owner attention.</p></InfoCard><InfoCard title="PRIMARY ROOF / ENVELOPE CONCERN" bullets={RoofBullets}><p>The property utilizes a substantial exposed-fastener metal roofing system. Multiple fastener assemblies project above the panel plane or display nonuniform washer compression.</p></InfoCard><InfoCard title="PRIMARY STRUCTURAL CONCERN" bullets={StructuralBullets}><p>The existing Crown forensic report places immediate stability, shoring, load-path, movement, and permanent repair determination with a Missouri-licensed structural engineer.</p></InfoCard><InfoCard title="OWNER DECISION OBJECTIVE" bullets={["What conditions exist now?", "Which conditions require immediate professional action?", "What evidence should be preserved?", "Which severe-weather events warrant further correlation?", "What repair, policy-review, or claim-readiness path is appropriate?"]} /></div>
  <div className="photo-grid four">
    <PhotoCard src={image1} caption="CURRENT FULL-PROPERTY DRONE OVERVIEW" />
    <PhotoCard src={coverImage} caption="CURRENT PROPERTY EXTERIOR" />
    <PhotoCard src={image2} caption="RAISED FASTENER / METAL ROOF CLOSE-UP" />
    <PhotoCard src={image21} caption="STRONGEST DISTRESSED COLUMN / SUPPORT IMAGE" />
  </div>
</ReportSection>

    <ReportSection id="ownership" page={3} title="PROPERTY, PARCEL & OWNERSHIP VERIFICATION">
  <div className="info-grid"><InfoCard title="SUBJECT PROPERTY"><p><b>Property:</b> Westbridge Inn & Suites<br /><b>Address:</b> 106 S Baird St / Ave, Clinton, MO 64735<br /><b>County:</b> Henry County<br /><b>Parcel:</b> 18-1.0-01-003-013-002.000</p><p><b>Legal Description:</b> LOTS 1 THRU 12 BLK 3, BAIRD & NELSON ADDITION<br /><b>Lot Dimensions:</b> 398 × 300<br /><b>Acreage:</b> 2.73 acres<br /><b>Sec / Twp / Rng:</b> 1 / 41 / 26</p></InfoCard><InfoCard title="MISSOURI SECRETARY OF STATE"><p><b>Entity:</b> OM Enterprise LLC<br /><b>Charter:</b> LC1219344<br /><b>Type / State:</b> Limited Liability Company / Missouri Domestic<br /><b>Status:</b> ACTIVE<br /><b>Formed:</b> April 10, 2012 · Perpetual</p><p><b>Registered Agent:</b> Dharmendrakumar Nathabhai Chaudhari<br /><b>Registered Office:</b> 106 South Baird Avenue, Clinton, MO 64735</p></InfoCard><InfoCard title="OWNER, VALUATION & DEED HISTORY"><p><b>Recorded Owner:</b> OM Enterprise LLC<br /><b>Acquired:</b> April 24, 2012 · Book/Page 0696-0150</p><p>Land Value: $153,900<br />Structure Value: $631,600<br /><b>Total Appraised: $785,500</b><br /><b>Total Assessed: $239,140</b></p><p>1978 — Proffitt, Leighton K.<br />1995 — Shankar Corporation<br />1999 — Sagar Corporation<br />2004 — Grewal International, L.L.C.<br />2012–Current — OM Enterprise LLC</p></InfoCard><InfoCard title="OWNERSHIP DISTINCTION"><p>Original formation records identify both Dharmendrakumar Nathabhai Chaudhari and Milanben D. Chaudhari as organizers of OM Enterprise LLC.</p><p>The real estate is recorded to OM ENTERPRISE LLC. Organizer status establishes an entity relationship but does not, by itself, establish present ownership percentages.</p></InfoCard></div>
  <PhotoCard 
  src={SMALL} 
  caption="SMALL AERIAL — SUBJECT PARCEL OUTLINED" 
  className="landscape-photo"
/>
</ReportSection>

    <ReportSection id="contacts" page={4} title="OWNER-SIDE DECISION MAKERS & COMPLETE CONTACT INTELLIGENCE">
      <div className="info-grid">
        <InfoCard title="PRIMARY EXECUTIVE: DHARAM CHAUDHARI" bullets={["CEO — Westbridge Hotel Group (April 2012 — Present)", "Registered Agent / Original Organizer — OM Enterprise LLC", "Founder | CEO — RECO Real Estate Advisors", "Head of National Hospitality Group — KW Commercial"]}>
          <p><b>Dharam Chaudhari</b><br />Also appearing as Dharmendra / Dharmendrakumar N. Chaudhari</p>
          <p><b>Subject property address:</b> 106 S Baird St / Ave, Clinton, MO 64735<br /><b>Professional address:</b> RECO Real Estate Advisors, 6850 College Blvd, Overland Park, KS 66211</p>
        </InfoCard>
        <InfoCard title="DHARAM CHAUDHARI: PHONES & EMAILS">
          <p><b>Phones</b><br />(913) 404-8822 · (913) 485-5659<br />(712) 212-2854 · 660-243-5336</p>
          <p><b>Emails</b><br />dharam@reco.realestate<br />dharam@westbridgehotels.com<br />westbridgeinnsuites@gmail.com</p>
        </InfoCard>
        <InfoCard title="SECONDARY CONTACT: MILAN CHAUDHARI">
          <p><b>Milanben D. Chaudhari / Milan Chaudhari</b><br />Original Organizer — OM Enterprise LLC</p>
          <p>Co-Founder & Head of Residential Division — RECO Real Estate Advisors<br />Hospitality & Real Estate Professional</p>
          <p>6850 College Blvd, Overland Park, KS 66211<br />(913) 404-8822 · (712) 212-2854<br />milan@reco.realestate · License #00246011</p>
        </InfoCard>
        <InfoCard title="PUBLIC RECORDS & HOTEL ROUTES">
          <p>Missouri SOS identifies Milanben D. Chaudhari as an original organizer. Current sources identify Milan Chaudhari as RECO Co-Founder; this report preserves both forms without independently asserting identity equivalence.</p>
          <p><b>Westbridge Hotel Group:</b> westbridgehotels.com<br /><b>Westbridge Inn & Suites:</b> 106 S Baird Ave, Clinton, MO · 660-885-2206</p>
        </InfoCard>
      </div>
      
      <div className="photo-grid three">
        <PhotoCard src={ceo} alt="CEO IMAGE" caption="CEO IMAGE" />
        <PhotoCard src={FRONT} alt="FRONT-DESK CONTACT CARD" caption="FRONT-DESK CONTACT CARD" />
        <PhotoCard src={MILANBEN} alt="MILANBEN IMAGE" caption="MILANBEN IMAGE" />
      </div>
    </ReportSection>

    <ReportSection id="overview" page={5} title="CURRENT PROPERTY & BUILDING OVERVIEW">
      <div className="info-grid">
        <InfoCard title="PROPERTY & MAIN MOTEL STRUCTURE">
          <p>The property is an active motel complex with two principal lodging structures and multiple ancillary improvements.</p>
          <p><b>Main Motel Structure</b><br />County Type: Motel · Year Built: 1965 · Effective Year: 2015 · Stories: 1<br />Base Area: 8,642 SF · Adjusted Area: 9,377 SF · Roof: Gable</p>
        </InfoCard>
        <InfoCard title="CURRENT PHYSICAL CONFIGURATION" bullets={["single-story front and main lodging wings", "two-story lodging wing with exterior corridor", "large exposed-fastener metal roofing system", "covered exterior walkways and overhangs", "cupola and intersecting roof planes", "pool and paved parking areas", "garage, utility, and signage improvements"]} />
        <InfoCard title="SECOND MOTEL & ADDITIONAL IMPROVEMENTS">
          <p><b>Second Motel Structure</b><br />Year Built: 1985 · Effective Year: 2015 · Stories: 2<br />Base Area: 2,470 SF · Adjusted Area: 4,683 SF · Roof: Gable</p>
          <p><b>Additional improvements:</b> garage, pool, concrete paving, asphalt paving, utility structure, and signage.</p>
        </InfoCard>
        <InfoCard title="IMPORTANT ASSESSOR DISTINCTION">
          <p>The assessor's 2015 “effective year” is a valuation descriptor. It should not be treated as proof that every roof plane, structural component, or envelope assembly was fully replaced in 2015.</p>
        </InfoCard>
      </div>

      <div className="photo-grid three">
        <div className="h-48">
          <PhotoCard src={FULL} alt="FULL CURRENT DRONE AERIAL" caption="FULL CURRENT DRONE AERIAL" />
        </div>
        <div className="h-48">
          <PhotoCard src={two} alt="CURRENT TWO-STORY WING / EXTERIOR CORRIDOR" caption="CURRENT TWO-STORY WING / EXTERIOR CORRIDOR" />
        </div>
        <div className="h-48">
          <PhotoCard src={coverImage} alt="CURRENT FRONT PROPERTY EXTERIOR" caption="CURRENT FRONT PROPERTY EXTERIOR" />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="structural" page={6} title="CRITICAL STRUCTURAL CONDITION & SECOND-STORY EXPOSURE">
      <div className="info-grid">
        <InfoCard title="STRUCTURAL & LIFE-SAFETY EVALUATION" bullets={StructuralBullets}>
          <p>These conditions require prompt evaluation by a Missouri-licensed structural engineer. Photographs document condition; they do not establish remaining capacity or causation.</p>
        </InfoCard>
        <InfoCard title="SECOND-STORY USE & EXPOSURE" bullets={["The affected system supports an occupied elevated corridor.", "Guest-room access and pedestrian circulation may continue near the distressed area.", "A failure could affect the corridor, adjacent framing, guardrails, soffit, and occupied areas below.", "Ownership should not rely on visual appearance alone to determine safe continued use."]} />
        <InfoCard title="SUPPLEMENTAL / TEMPORARY SUPPORT EVIDENCE">
          <p>Current imagery shows timber posts and supplemental support elements near the distressed corridor. Their design, installation date, load capacity, bearing, anchorage, and engineering status were not verified.</p>
          <p>Temporary stabilization should not be assumed to constitute a permanent repair.</p>
        </InfoCard>
        <InfoCard title="REQUIRED PROFESSIONAL REVIEW" bullets={["plumbness and elevation survey", "settlement and movement assessment", "load-path verification", "column-base and anchor condition", "corrosion and section loss", "bearing and upper connection", "adjacent framing and guard conditions", "temporary stabilization needs", "permanent repair design"]} />
      </div>
      
      <div className="photo-grid four">
        <div className="h-48">
          <PhotoCard src={COLUMN} alt="COLUMN BASE MATERIAL LOSS / SPALLING CLOSE-UP" caption="COLUMN BASE MATERIAL LOSS / SPALLING CLOSE-UP" />
        </div>
        <div className="h-48">
          <PhotoCard src={UPPER} alt="UPPER COLUMN / SOFFIT CONNECTION" caption="UPPER COLUMN / SOFFIT CONNECTION" />
        </div>
        <div className="h-48">
          <PhotoCard src={WIDE} alt="WIDE SECOND-STORY CORRIDOR / CAUTION-TAPE VIEW" caption="WIDE SECOND-STORY CORRIDOR / CAUTION-TAPE VIEW" />
        </div>
        <div className="h-48">
          <PhotoCard src={COMPANYCAM} alt="COMPANYCAM #93 SHOWING TIMBER SUPPORT CONFIGURATION" caption="COMPANYCAM #93 SHOWING TIMBER SUPPORT CONFIGURATION" />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="roof" page={7} title="METAL ROOF SYSTEM & CURRENT CONDITION">
      <div className="info-grid">
        <InfoCard title="ROOF INVESTIGATION & CURRENT FEATURES" bullets={["exposed-fastener metal roof panels", "multiple gable planes and valleys", "ridge, edge, eave, and rake interfaces", "cupola and architectural transitions", "plumbing and mechanical penetrations", "gutters, downspouts, and drainage interfaces", "localized sealant and prior repair areas"]} />
        <InfoCard title="RAISED / NONUNIFORM FASTENER CONDITIONS">
          <p>Multiple fastener assemblies appear elevated above the panel plane or show inconsistent washer compression.</p>
          <p><b>Possible causes include:</b> installation depth variance, thermal cycling, substrate movement, loss of washer compression, long-term vibration, panel movement, or wind-uplift-related movement. Photographs alone do not determine the initiating cause.</p>
        </InfoCard>
        <InfoCard title="SURFACE / PANEL CONDITIONS" bullets={["coating wear and finish variation", "localized oxidation or corrosion", "surface marks and impact-candidate conditions", "panel waviness or oil-canning appearance", "sealant and transition conditions"]}>
          <p>Image-based observations are screening indicators, not destructive testing or a panel-manufacturer determination.</p>
        </InfoCard>
        <InfoCard title="VERIFICATION & CURRENT ROOF CONCLUSION">
          <p>Valleys, penetrations, transitions, fastener rows, drainage pathways, panel seams, and edge conditions require daylight hands-on verification.</p>
          <p><b>Current conclusion:</b> The roof remains a significant asset-management concern. The documented conditions warrant systematic fastener, panel, sealant, drainage, and substrate review.</p>
        </InfoCard>
      </div>
      
      <div className="photo-grid five">
        <div className="h-48">
          <PhotoCard src={image1} alt="FULL CURRENT ROOF DRONE AERIAL" caption="FULL CURRENT ROOF DRONE AERIAL" />
        </div>
        <div className="h-48">
          <PhotoCard src={image2} alt="STRONGEST RAISED FASTENER CLOSE-UP" caption="STRONGEST RAISED FASTENER CLOSE-UP" />
        </div>
        <div className="h-48">
          <PhotoCard src={SECOND} alt="SECOND RAISED / NONUNIFORM FASTENER DETAIL" caption="SECOND RAISED / NONUNIFORM FASTENER DETAIL" />
        </div>
        <div className="h-48">
          <PhotoCard src={PANEL} alt="PANEL SURFACE / IMPACT-CANDIDATE DETAIL" caption="PANEL SURFACE / IMPACT-CANDIDATE DETAIL" />
        </div>
        <div className="h-48">
          <PhotoCard src={CUPOLA} alt="CUPOLA / ROOF TRANSITION DETAIL" caption="CUPOLA / ROOF TRANSITION DETAIL" />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="thermal" page={8} title="THERMAL IMAGING & BUILDING-ENVELOPE SCREENING">
      <div className="info-grid">
        <InfoCard title="THERMAL / ENVELOPE VERIFICATION" bullets={["exterior wall fields", "window and door perimeters", "covered walkway interfaces", "soffit and wall transitions", "wall-base and grade interfaces", "active exterior lighting and equipment"]} />
        <InfoCard title="IMPORTANT INTERPRETATION" bullets={["Thermal contrast does not prove moisture intrusion.", "It does not establish hidden damage or structural deficiency.", "It does not identify the age or source of a condition.", "It does not replace moisture-meter, invasive, or engineering verification."]} />
        <InfoCard title="THERMAL FINDINGS" bullets={["localized window and opening-perimeter differentials", "selected wall and covered-walkway interface variation", "active light-fixture heat signatures", "representative wall areas with relatively uniform baseline patterns"]}>
          <p>Thermal imagery is qualitative and dependent on surface emissivity, reflected temperature, sun exposure, wind, indoor/outdoor temperature difference, and inspection timing.</p>
        </InfoCard>
        <InfoCard title="VERIFICATION & CURRENT CONCLUSION">
          <p><b>Recommended:</b> moisture-meter readings, interior correlation, sealant and flashing review, selective invasive testing where justified, and repeat imaging under controlled conditions.</p>
          <p><b>Conclusion:</b> The observed differentials identify locations for focused envelope review; they are not standalone proof of water intrusion.</p>
        </InfoCard>
      </div>
      
      <div className="photo-grid five thermal">
        <div className="h-48">
          <PhotoCard src={STRONGEST} alt="STRONGEST WINDOW / PERIMETER ANOMALY" caption="STRONGEST WINDOW / PERIMETER ANOMALY" />
        </div>
        <div className="h-48">
          <PhotoCard src={OPENING} alt="SECOND WINDOW / OPENING DIFFERENTIAL" caption="SECOND WINDOW / OPENING DIFFERENTIAL" />
        </div>
        <div className="h-48">
          <PhotoCard src={COVERED} alt="COVERED WALKWAY / WALL INTERFACE" caption="COVERED WALKWAY / WALL INTERFACE" />
        </div>
        <div className="h-48">
          <PhotoCard src={ACTIVE} alt="ACTIVE LIGHT FIXTURE HEAT SIGNATURE, LABELED AS EQUIPMENT HEAT" caption="ACTIVE LIGHT FIXTURE HEAT SIGNATURE, LABELED AS EQUIPMENT HEAT" />
        </div>
        <div className="h-48">
          <PhotoCard src={REPRESENTATIVE} alt="REPRESENTATIVE UNIFORM WALL BASELINE" caption="REPRESENTATIVE UNIFORM WALL BASELINE" />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="history" page={9} title="HISTORICAL PROPERTY & ROOF CHRONOLOGY">
      <div className="history-layout">
        <div className="year-grid">
          {[
            { year: 1997, img: fa },
            { year: 2003, img: three },
            { year: 2004, img: four },
            { year: 2005, img: five },
            { year: 2006, img: six },
            { year: 2007, img: seven },
            { year: 2009, img: nine },
            { year: 2010, img: ten },
            { year: 2012, img: twovel },
            { year: 2014, img: fourteen },
            { year: 2017, img: seventeen },
            { year: 2020, img: twenty },
            { year: 2022, img: tewntytwo }
          ].map(({ year, img }) => (
            <div className="year-item h-48" key={year}>
              <b>{year}</b>
              <PhotoCard src={img} compact caption={`${year} HISTORICAL AERIAL`} />
            </div>
          ))}
          <p>Additional Henry County exterior photography provides later dated reference images through 2024.</p>
        </div>
        
        <div className="history-cards">
          <InfoCard title="EFFECTIVE-YEAR & PRE-2026 REFERENCE">
            <p>The assessor's 2015 effective year is a valuation indicator, not proof of a full roof replacement. Dated county and aerial imagery establish pre-2026 reference points for property configuration and visible exterior condition.</p>
          </InfoCard>
          <InfoCard title="PROPERTY CONFIGURATION & ROOF CHRONOLOGY" bullets={["Long-term aerial imagery shows the motel's established building footprint.", "Roof planes and major architectural relationships remain generally traceable across years.", "Historical imagery quality varies and cannot resolve small fasteners or fine surface damage.", "October 23, 2024 county imagery provides a particularly useful pre-April-2026 comparison point."]} />
          <InfoCard title="CHRONOLOGY VALUE & FRAMEWORK">
            <div className="flow"><span>Historical Condition</span><i>→</i><span>2024 Pre-Event Reference</span><i>→</i><span>2026 Severe Weather</span><i>→</i><span>September 2026 Current Condition</span></div>
          </InfoCard>
        </div>
      </div>

      <div className="photo-grid six">
        {[1, 2, 3].map(i => {
          const poolImgs = [pool, pool1, pool2]; // Apni zaroorat ke mutabiq pool images yahan rakhein
          return (
            <div className="h-48" key={`pool-${i}`}>
              <PhotoCard src={poolImgs[i - 1]} compact caption={`POOL — VIEW ${i}`} />
            </div>
          );
        })}
        {[1, 2, 3].map(i => {
          const lobbyImgs = [lobby, lobby1, lobby2]; // Apni zaroorat ke mutabiq lobby images yahan rakhein
          return (
            <div className="h-48" key={`lobby-${i}`}>
              <PhotoCard src={lobbyImgs[i - 1]} compact caption={`LOBBY — VIEW ${i}`} />
            </div>
          );
        })}
      </div>
    </ReportSection>

    <ReportSection id="weather" page={10} title="FIVE-YEAR HAIL & SEVERE-WEATHER EXPOSURE">
      <div className="info-grid text-only"><InfoCard title="WEATHER EXPOSURE SUMMARY & HISTORY"><p>The existing Crown weather analysis documents repeated severe-weather exposure within the Clinton area during the reviewed five-year period. Six distinct event dates include hail of at least 1.00 inch within approximately 5 miles. These are nearby reports, not direct measurements at the subject roof.</p><p><b>April 5, 2023:</b> Hail 1.25 in (~1.7 mi)<br /><b>September 23, 2023:</b> Hail 1.00 in, Wind ~60 mph (4–5 mi)<br /><b>April 18, 2024:</b> Hail 1.50 in (~3.0 mi)</p></InfoCard><InfoCard title="EVENT HISTORY (CONT.) & SUMMARY"><p><b>May 26, 2024:</b> Hail up to 2.75 in; closer 1.75 in report (4.5 mi / 1.6 mi)<br /><b>April 1, 2025:</b> Hail 1.00 in (~0.5 mi)<br /><b>April 15, 2026:</b> EF1 tornado (98 mph) & EF0 tornado (70 mph), 0.7 / 1.0 mi<br /><b>June 11, 2026:</b> Hail 1.00 in (~0.9 mi)</p><p><b>Crown summary:</b> April 15, 2026 is the leading wind / structural candidate and June 11, 2026 the leading recent hail candidate.</p></InfoCard><InfoCard title="HIGHEST-SEVERITY NEARBY HAIL EVENT"><p><b>May 26, 2024</b><br />Largest nearby hail report: 2.75 inches approximately 4.5 miles east. A 1.75-inch report occurred approximately 1.6 miles away.</p><p>These reports establish severe-hail exposure in the surrounding area but do not establish hail size at the Westbridge roof.</p></InfoCard><InfoCard title="WEATHER EVIDENCE LIMITATION" bullets={["roof-level hail size", "exact site wind speed", "property-specific damage", "the date a particular condition began", "insurance coverage or compensability"]}><p>Regional reports, radar, warning polygons, and storm maps establish exposure opportunity and event proximity. They do not independently prove:</p></InfoCard></div>
    </ReportSection>

    <ReportSection id="wind-dol" page={11} title="PRIMARY STRUCTURAL / WIND DATE-OF-LOSS CANDIDATE">
      <div className="info-grid">
        <InfoCard title="SELECTED WORKING DATE & CORRELATION">
          <p><b>Selected working date: April 15, 2026</b></p>
          <p>Two NWS-surveyed tornado tracks crossed Clinton:</p>
          <p><b>EF1:</b> estimated peak wind 98 MPH · 6:03–6:07 PM CDT · track ended ~0.7 mi from property.<br /><b>EF0:</b> estimated peak wind 70 MPH · ~6:09 PM CDT · track began ~1.0 mi from property.</p>
        </InfoCard>
        <InfoCard title="STRUCTURAL CAUSATION REQUIREMENT" bullets={["wind loading, foundation movement, or settlement", "corrosion or connection deficiency", "impact, long-term deterioration, or prior repairs", "multiple contributing mechanisms"]}>
          <p>The weather event does not independently prove the current distressed support condition was caused by the tornado. A structural engineer must evaluate physical consistency.</p>
        </InfoCard>
        <InfoCard title="WHY APRIL 15 IS IMPORTANT" bullets={["structural movement and support / column loading", "elevated corridor movement", "roof panel movement and fastener uplift/back-out", "perimeter, edge, and flashing loading", "rooftop-feature and exterior component displacement"]} />
        <InfoCard title="WORKING DATE-OF-LOSS POSITION">
          <p><b>PRIMARY STRUCTURAL / WIND INVESTIGATION DATE:<br />APRIL 15, 2026</b></p>
          <p><b>Status:</b> High weather correlation — building-specific causation pending engineering verification.</p>
        </InfoCard>
      </div>
      
      <div className="photo-grid two">
        <div className="h-48">
          <PhotoCard src={WIDE} alt="STRONGEST STRUCTURAL COLUMN / SUPPORT DISTRESS" caption="STRONGEST STRUCTURAL COLUMN / SUPPORT DISTRESS" />
        </div>
        <div className="h-48">
          <PhotoCard src={RAISED} alt="RAISED FASTENER / ROOF ATTACHMENT CONDITION" caption="RAISED FASTENER / ROOF ATTACHMENT CONDITION" />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="correlation" page={12} title="DAMAGE-TO-WEATHER CORRELATION & MITIGATION TIMELINE">
      <div className="info-grid">
        <InfoCard title="OWNER EVIDENCE MATRIX">
          <div className="matrix">
            {[["Distressed / buckled support","Engineering"],["Foundation / sinking concern","Survey + engineering"],["Column-base deterioration","Material + structural review"],["Supplemental timber supports","Installation history"],["Raised / nonuniform fasteners","Hands-on roof review"],["Surface / impact marks","Forensic correlation"],["Thermal differentials","Moisture verification"],["April 15, 2026 tornado","Wind correlation"],["May 26, 2024 hail","Hail correlation"],["June 11, 2026 hail","Recent-event correlation"]].map(([a,b]) => (
              <p key={a}><b>{a}</b><span>Requires: {b}</span></p>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="DISCOVERY & TEMPORARY MITIGATION">
          <p>On September 9, 2026, lumber stabilization was reportedly installed at the affected support area. This is relevant to discovery and mitigation chronology.</p>
          <p>It is not proof of the original cause, a permanent engineered repair, a capacity certification, or a substitute for preservation of the original condition evidence.</p>
        </InfoCard>
        <InfoCard title="SEPARATE EXPOSURE PATHWAYS">
          <p><b>STRUCTURAL / WIND</b><br />April 15, 2026</p>
          <p><b>HIGH-SEVERITY HAIL</b><br />May 26, 2024</p>
          <p><b>RECENT HAIL</b><br />June 11, 2026</p>
        </InfoCard>
        <InfoCard title="OWNER CORRELATION CONCLUSION">
          <p>The available record supports focused professional investigation through separate structural/wind, hail, roof-condition, and envelope pathways. It does not support collapsing every observed condition into a single cause without engineering, field verification, historical comparison, and policy review.</p>
        </InfoCard>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-2xl h-48">
          <PhotoCard 
            src={coverImage} 
            alt="OCTOBER 23, 2024 PRE-EVENT COUNTY IMAGE" 
            caption="OCTOBER 23, 2024 PRE-EVENT COUNTY IMAGE" 
          />
        </div>
      </div>
    </ReportSection>

    <ReportSection id="owner-contacts" page={13} title="PROPERTY OWNER CONTACT & OWNERSHIP ROUTING">
      <div className="space-y-6">
        {/* Dharam Chaudhari Section */}
        <div className="bg-white border border-amber-200 rounded-lg p-4 shadow-sm">
          <div className="bg-amber-900 text-amber-50 font-bold px-4 py-2 rounded mb-4 text-sm tracking-wide">
            DHARAM CHAUDHARI — PRIMARY OWNER-SIDE CONTACT
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-1">
              <PhotoCard src={ceo} alt="DHARAM CHAUDHARI" caption="DHARAM CHAUDHARI" />
            </div>
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="https://wa.me/17122122854" target="_blank" rel="noreferrer">
                <h3 className="text-xs font-bold text-amber-900 mb-1">DHARAM CHAUDHARI</h3>
                <p className="text-[10px] text-zinc-600 mb-2">CEO - WHATSAPP</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr1} alt="WhatsApp QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK TO OPEN <ExternalLink size={10} className="inline" /></strong>
              </a>

              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="https://wa.me/19139068600" target="_blank" rel="noreferrer">
                <h3 className="text-xs font-bold text-amber-900 mb-1">RECO</h3>
                <p className="text-[10px] text-zinc-600 mb-2">REAL ESTATE ADVISORS</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr2} alt="RECO QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK TO OPEN <ExternalLink size={10} className="inline" /></strong>
              </a>

              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="mailto:chaudharidharam@gmail.com,dharam@hopbots.com">
                <h3 className="text-xs font-bold text-amber-900 mb-1">DHARAM CHAUDHARI</h3>
                <p className="text-[10px] text-zinc-600 mb-2">DIRECT EMAIL</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr3} alt="Email QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK TO OPEN <ExternalLink size={10} className="inline" /></strong>
              </a>

              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="mailto:dharam@reco.realestate,dharam@kwcommercial.com">
                <h3 className="text-xs font-bold text-amber-900 mb-1">DHARAM CHAUDHARI</h3>
                <p className="text-[10px] text-zinc-600 mb-2">COMPANY EMAIL</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr4} alt="Company Email QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK TO OPEN <ExternalLink size={10} className="inline" /></strong>
              </a>
            </div>
          </div>
        </div>

        {/* Milanben / Milan Chaudhari Section */}
        <div className="bg-white border border-amber-200 rounded-lg p-4 shadow-sm">
          <div className="bg-amber-900 text-amber-50 font-bold px-4 py-2 rounded mb-4 text-sm tracking-wide">
            MILANBEN / MILAN CHAUDHARI — SECONDARY OWNER-SIDE CONTACT
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-6 text-xs space-y-1 text-zinc-700">
              <p><b>SECONDARY CONTACT:</b> MILANBEN D. CHAUDHARI</p>
              <p><b>• Documented Role:</b> Original Organizer — OM Enterprise LLC</p>
              <p><b>• Physical Address:</b> 16389 Barton St, Overland Park, KS 66221</p>
              <p><b>• Professional Phone:</b> (913) 404-8822</p>
              <p><b>• Mobile / Alternate Phones:</b> (712) 212-2854, (712) 277-4242</p>
              <p><b>• Email Addresses:</b> mits4all2002@yahoo.com, milan@reco.realestate</p>
            </div>
            <div className="md:col-span-3">
              <PhotoCard src={MILANBEN} alt="MILAN CHAUDHARI" caption="MILAN CHAUDHARI" />
            </div>
            <div className="md:col-span-3">
              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="https://wa.me/19139068600" target="_blank" rel="noreferrer">
                <h3 className="text-xs font-bold text-amber-900 mb-1">RECO</h3>
                <p className="text-[10px] text-zinc-600 mb-2">REAL ESTATE ADVISORS</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr2} alt="Reco QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK TO OPEN <ExternalLink size={10} className="inline" /></strong>
              </a>
            </div>
          </div>
        </div>

        {/* Business Contact Routes */}
        <div className="bg-white border border-amber-200 rounded-lg p-4 shadow-sm">
          <div className="bg-amber-900 text-amber-50 font-bold px-4 py-2 rounded mb-4 text-sm tracking-wide">
            BUSINESS CONTACT ROUTES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 text-xs space-y-1 text-zinc-700">
              <p><b>WESTBRIDGE HOTEL GROUP — CORPORATE ROUTE:</b></p>
              <p>• Address: 106 S Baird St, Clinton, MO 64735 | Phone: (620) 240-0098 | Email: Info@WestbridgeHotelGroup.com</p>
              <p className="pt-2"><b>WESTBRIDGE INN & SUITES — PROPERTY CONTACT:</b></p>
              <p>• Phone: (660) 885-2206 | Emails: info@westbridgeinnandsuites.com, clinton@westbridgeinnandsuites.com</p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-3">
              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="mailto:info@westbridgeinnandsuites.com,clinton@westbridgeinnandsuites.com">
                <h3 className="text-xs font-bold text-amber-900 mb-1">WESTBRIDGE</h3>
                <p className="text-[10px] text-zinc-600 mb-2">INN EMAIL</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr5} alt="Inn Email QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK <ExternalLink size={10} className="inline" /></strong>
              </a>
              <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-lg p-3 text-center transition-all bg-zinc-50" href="https://wa.me/16202400098" target="_blank" rel="noreferrer">
                <h3 className="text-xs font-bold text-amber-900 mb-1">WESTBRIDGE</h3>
                <p className="text-[10px] text-zinc-600 mb-2">WHATSAPP</p>
                <div className="bg-white p-1.5 rounded inline-block shadow-inner">
                  <img src={qr6} alt="WhatsApp QR" className="w-20 h-20 mx-auto object-contain" />
                </div>
                <strong className="block text-[10px] text-amber-800 mt-2">CLICK <ExternalLink size={10} className="inline" /></strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ReportSection>

    <ReportSection id="action-plan" page={14} title="OWNER ACTION PLAN, POLICY REVIEW & FINAL DECISION">
      <div className="info-grid">
        <InfoCard title="OWNER ACTION SEQUENCE">
          <ol>
            <li><b>Structural Engineering</b> — assess stability, load path, movement, shoring, and permanent repair.</li>
            <li><b>Preserve Original Evidence</b> — retain photographs, dates, removed materials, and temporary-work records.</li>
            <li><b>Complete Daylight Roof & Envelope Verification</b> — inspect fasteners, panels, transitions, drainage, and anomalies.</li>
            <li><b>Review Property Insurance Policy</b> — examine notice, duties, exclusions, deductibles, and limitations.</li>
            <li><b>Reconcile Causation</b> — compare engineering, weather, chronology, and field findings.</li>
            <li><b>Select Appropriate Response</b> — repair, monitor, mitigate, or pursue further claim-readiness review.</li>
          </ol>
        </InfoCard>
        <InfoCard title="FINAL OWNER EVIDENCE POSITION">
          <p><b>Leading structural / wind date:</b> April 15, 2026<br /><b>Highest-severity nearby hail date:</b> May 26, 2024<br /><b>Leading recent hail date:</b> June 11, 2026<br /><b>Temporary stabilization noted:</b> September 9, 2026</p>
          <p><b>Final status:</b> Material conditions documented; professional causation, scope, and coverage determinations remain pending.</p>
        </InfoCard>
        <InfoCard title="REPORT LIMITATION & DISCLAIMERS" bullets={["not a structural-engineering opinion", "not a legal opinion", "not an insurance-coverage determination", "not a claim adjustment or negotiation", "not a guarantee of storm causation", "not a substitute for hands-on testing or licensed professional judgment"]} />
        <InfoCard title="FINAL OWNER CONCLUSION">
          <p>Westbridge Inn & Suites has a documented combination of structural distress, roof-system concerns, envelope-screening indicators, historical evidence, and significant regional severe-weather exposure. Ownership should prioritize life-safety and structural review, preserve evidence, verify roof and envelope conditions, and then make repair and policy decisions from the combined professional record.</p>
        </InfoCard>
      </div>
      
      <div className="photo-grid four">
        <div className="h-48"><PhotoCard src={coverImage} alt="CLEAN CURRENT WESTBRIDGE INN EXTERIOR" caption="CLEAN CURRENT WESTBRIDGE INN EXTERIOR" /></div>
        <div className="h-48"><PhotoCard src={two} alt="STRUCTURAL SUPPORT AREA" caption="STRUCTURAL SUPPORT AREA" /></div>
        <div className="h-48"><PhotoCard src={image2} alt="CURRENT ROOF / FASTENER CONDITION" caption="CURRENT ROOF / FASTENER CONDITION" /></div>
        <div className="h-48"><PhotoCard src={CLEAN} alt="APRIL 15, 2026 DOL / WEATHER CALLOUT" caption="APRIL 15, 2026 DOL / WEATHER CALLOUT" /></div>
      </div>
    </ReportSection>

    <ReportSection id="guarantee" page={15} title="A SIDE-BY-SIDE VIEW OF AVAILABLE PROJECT PROTECTION" subtitle="Coverage is subject to registration, eligibility, exclusions, and the controlling Directorii terms.">
      <div className="comparison">
        <article><span>$30,000</span><h3>STANDARD DIRECTORII</h3><p>Project protection generally associated with qualifying Directorii contractor work, subject to registration and program requirements.</p></article>
        <article className="featured"><span>$250,000</span><h3>CROWN PROFILE PROTECTION</h3><p>Enhanced protection presented through Crown's Directorii profile, subject exclusively to current Directorii eligibility, terms, and limitations.</p></article>
      </div>
      <div className="verify-grid">
        <InfoCard title="VERIFY CROWN DIRECTLY">
          <p className="text-sm md:text-base font-medium text-zinc-800 mb-4 leading-relaxed">
            Scan to open Crown Roofing & Solar's live Directorii listing and review current profile details.
          </p>
          
          <a className="qr-card block border border-zinc-200 hover:border-amber-500 rounded-xl p-5 text-center transition-all bg-zinc-50 shadow-sm hover:shadow-md" href="https://directorii.com/us/ks/wichita/crown-roofing-solar-reviews-103/" target="_blank" rel="noreferrer">
            <h3 className="text-base font-bold text-amber-900 mb-2">CROWN'S DIRECTORII LISTING</h3>
            <div className="qr-image-container my-3 p-2 bg-white rounded-lg inline-block shadow-inner">
              <img src={qr4} alt="Crown Directorii QR Code" className="w-32 h-32 mx-auto object-contain" />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-semibold text-amber-800 mt-2">
              <span>SCAN / CLICK TO OPEN</span> <ExternalLink size={14} />
            </div>
          </a>
        </InfoCard>
        
        <article className="certificate">
          <div className="mt-2 h-full">
            <PhotoCard src={srt} alt="CONTRACTOR DIRECTORII GUARANTEE VOUCHER" caption="CONTRACTOR DIRECTORII — GUARANTEE VOUCHER" compact />
          </div>
        </article>
      </div>
    </ReportSection>

    <ReportSection id="records" page={16} title="SCAN OR CLICK TO OPEN THE SUPPORTING RECORD" subtitle="QR destinations were verified during report assembly. Access permissions remain controlled by the file owner.">
      <div className="qr-grid records">
        {/* 1. Hail-Size Correlation QR */}
        <a className="qr-card" href="https://drive.google.com/file/u/0/d/1b4hCdsClcyKACyN4TKYm00kGYmfP8wFB/view?pli=1" target="_blank" rel="noreferrer">
          <h3>HAIL-SIZE CORRELATION</h3>
          <p>On-site measurements compared with weather data</p>
          <div className="qr-image-container my-2">
            <img src={/* Apni pehli QR image yahan dein, misal ke tor par: qr1 */ qr} alt="Hail-Size Correlation QR" className="w-24 h-24 mx-auto object-contain" />
          </div>
          <strong>SCAN / CLICK TO OPEN <ExternalLink size={12} /></strong>
        </a>

        {/* 2. Roofing Product Resistance QR */}
        <a className="qr-card" href="https://drive.google.com/file/d/17kQEO9dgxX_3_5eOaknCTxagE844bGVo/view" target="_blank" rel="noreferrer">
          <h3>ROOFING PRODUCT RESISTANCE</h3>
          <p>Greenfeld 1969 — National Bureau of Standards</p>
          <div className="qr-image-container my-2">
            <img src={/* Apni doosri QR image yahan dein */ qr1} alt="Roofing Product Resistance QR" className="w-24 h-24 mx-auto object-contain" />
          </div>
          <strong>SCAN / CLICK TO OPEN <ExternalLink size={12} /></strong>
        </a>

        {/* 3. Forensic Meteorology QR */}
        <a className="qr-card" href="https://drive.google.com/file/d/1gXBFnOzX3asSBUhlAcABH2S_Fza0kZti/view" target="_blank" rel="noreferrer">
          <h3>FORENSIC METEOROLOGY</h3>
          <p>Hail-investigation methodology and key takeaways</p>
          <div className="qr-image-container my-2">
            <img src={/* Apni teesri QR image yahan dein */ qr2} alt="Forensic Meteorology QR" className="w-24 h-24 mx-auto object-contain" />
          </div>
          <strong>SCAN / CLICK TO OPEN <ExternalLink size={12} /></strong>
        </a>

        {/* 4. Complete CompanyCam File QR */}
        <a className="qr-card" href="https://app.companycam.com/timeline/AGWsddhXoBnChfW5?include_description=true" target="_blank" rel="noreferrer">
          <h3>COMPLETE COMPANYCAM FILE</h3>
          <p>Westbridge live project timeline with descriptions</p>
          <div className="qr-image-container my-2">
            <img src={/* Apni chauthi QR image yahan dein */ qr3} alt="CompanyCam File QR" className="w-24 h-24 mx-auto object-contain" />
          </div>
          <strong>SCAN / CLICK TO OPEN <ExternalLink size={12} /></strong>
        </a>
      </div>
      <div className="closing-mark"><Crown /><span>CROWN ROOFING & SOLAR</span><small>VERIFIED. VETTED. BACKED.</small></div>
    </ReportSection>
    <a href="#cover" className="back-top" aria-label="Back to top"><ArrowUp /></a>
  </div>;
}