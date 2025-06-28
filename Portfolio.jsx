import { Mail, Phone, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Amol Kumar Deep</h1>
      <p>MIS Head | Data & Language Expert | Educator</p>
      <div style={{ margin: '10px 0' }}>
        <p><Mail size={16} /> blackpanthermega.amol@gmail.com</p>
        <p><Phone size={16} /> +91-6299880767</p>
        <p><Globe size={16} /> www.yourportfolio.com</p>
      </div>
      <h2>Professional Summary</h2>
      <p>Dynamic and detail-oriented MIS Head experienced in candidate registration, data management, and placement tracking under DDUKK. Skilled in translation, data entry, proofreading, and Excel reporting.</p>
      <h2>Skills</h2>
      <ul>
        <li>MS Excel, Word, Google Sheets</li>
        <li>Data Entry, Email Handling, Document Formatting</li>
        <li>English-Hindi Translation & Proofreading</li>
        <li>Teaching: English, Maths, Computer Science</li>
        <li>HTML, CSS, JS – Web Tools</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>Graduation – Sikkim Manipal University</li>
        <li>Intermediate – JAC Board</li>
        <li>10th – CBSE Board</li>
      </ul>
      <h2>Experience</h2>
      <p>MIS Head – DDUKK Project</p>
      <ul>
        <li>Managed registration, enrollment, and placement workflows</li>
        <li>Prepared Excel reports and documentation</li>
        <li>Supported digital literacy & student training efforts</li>
      </ul>
      <h2>Projects & Certifications</h2>
      <ul>
        <li>JPG to PDF Converter Web Tool</li>
        <li>Be10x Productivity Certification</li>
        <li>Typing Speed Test Certified</li>
        <li>Digital Awareness Program Leader</li>
        <li>Free academic education to children in local areas</li>
      </ul>
    </div>
  );
}
