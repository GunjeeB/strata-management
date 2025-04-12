import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className={styles.container}>
      {/* Brand Logo Top Right */}
      <div className={styles.logoContainer}>
        {/* Logo replaced with text and emoji */}
        <span className={styles.logoText}>
          🏡SmartScheme 
        </span>
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Strata Committee</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => setActiveSection('home')}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.menuItem} onClick={() => setActiveSection('services')}>
            <a href="#services">Committee Responsibilities</a>
          </li>
          <li className={styles.menuItem} onClick={() => setActiveSection('funds')}>
            <a href="#funds">Funds Management</a>
          </li>
          <li className={styles.menuItem} onClick={() => setActiveSection('contact')}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {activeSection === 'home' && (
          <div className={styles.header}>
            <div className={styles.heroImage}>
              <h1 className={styles.welcomeText}>
                Empowering Strata Communities with Smart Management
              </h1>
              <p className={styles.subText}>
                A modern portal for building harmony and transparency in your strata community.
              </p>
            </div>
          </div>
        )}

        <div className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>About Our Community</h2>
          <p className={styles.sectionText}>
            Nestled in the heart of New South Wales, our strata community takes pride in collaboration,
            transparency, and responsibility. Governed by the Strata Schemes Management Act (2015),
            we work together to maintain a safe, well-maintained and harmonious living environment for all lot owners.
            From budgeting and insurance to common area upkeep, we ensure everything is handled with care.
          </p>
        </div>

        {activeSection === 'services' && (
          <div className={styles.section} id="services">
            <h2 className={styles.sectionTitle}>Committee Responsibilities</h2>
            <p className={styles.sectionText}>
              The Strata Committee oversees building operations, ensures compliance with NSW legislation,
              handles disputes, and manages records. It must include a Treasurer, Secretary, and Chairperson,
              with up to 9 elected members.
            </p>
          </div>
        )}

        {activeSection === 'funds' && (
          <div className={styles.section} id="funds">
            <h2 className={styles.sectionTitle}>Funds Management</h2>
            <p className={styles.sectionText}>
              Levies are collected into an administrative fund for daily operations and a capital works fund for long-term upgrades. 
              Transparency and budgeting are key responsibilities of the committee.
            </p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionText}>
              Reach out to the committee via: <br />
              📧 Email: contact@stratacommittee.nsw.au <br />
              ☎️ Phone: (02) 1234 5678 <br />
              🕒 Office Hours: 9am - 5pm, Mon - Fri
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>&copy; 2025 Strata Committee. All rights reserved.</p>
      </div>
    </div>
  );
}


