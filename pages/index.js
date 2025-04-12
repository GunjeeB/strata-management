import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className={styles.container}>
      {/* Fullscreen Background Image */}
      <div className={styles.backgroundOverlay}>
        <Image src="/home.jpg" alt="Apartment" layout="fill" objectFit="cover" className={styles.bgImage} />
      </div>

      {/* Brand Logo Top Right */}
      <div className={styles.logoContainer}>
        <span className={styles.logoText}>🏡 SmartScheme</span>
      </div>

      {/* Main Page Buttons */}
      {activeSection === 'home' && (
        <div className={styles.landingButtons}>
          <button className={styles.mainButton} onClick={() => setActiveSection('explore')}>Explore</button>
          <Link href="/login"><button className={styles.mainButton}>Log In</button></Link>
          <Link href="/signin"><p className={styles.signinLink}>Sign In</p></Link>
        </div>
      )}

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>⚖️ SmartScheme Committee</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => setActiveSection('home')}><a href="#home">Home</a></li>
          <li className={styles.menuItem} onClick={() => setActiveSection('services')}><a href="#services">Committee Responsibilities</a></li>
          <li className={styles.menuItem} onClick={() => setActiveSection('funds')}><a href="#funds">Funds Management</a></li>
          <li className={styles.menuItem} onClick={() => setActiveSection('contact')}><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {activeSection === 'explore' && (
          <div className={styles.section} id="about">
            <h2 className={styles.sectionTitle}>About Our Community</h2>
            <div className={styles.illustrationWrapper}>
              <Image src="/community.png" alt="Community" width={300} height={200} className={styles.illustration} />
            </div>
            <p className={styles.sectionText}>
              Welcome to SmartScheme — a platform built for efficient communication, transparent fund tracking, and responsible strata management. Located in New South Wales, our community is led by 9 elected members who ensure that every resident’s needs are heard and met.
            </p>
          </div>
        )}

        {activeSection === 'services' && (
          <div className={styles.section} id="services">
            <h2 className={styles.sectionTitle}>Committee Responsibilities</h2>
            <div className={styles.illustrationWrapper}>
              <Image src="/committee.png" alt="Committee" width={300} height={200} className={styles.illustration} />
            </div>
            <p className={styles.sectionText}>
              Our committee handles budgeting, insurance, records, and maintenance while upholding legal responsibilities. Transparency and fairness guide our decisions.
            </p>
          </div>
        )}

        {activeSection === 'funds' && (
          <div className={styles.section} id="funds">
            <h2 className={styles.sectionTitle}>Funds Management</h2>
            <div className={styles.illustrationWrapper}>
              <Image src="/funds.png" alt="Funds" width={300} height={200} className={styles.illustration} />
            </div>
            <p className={styles.sectionText}>
              Levies are managed across administrative and capital works funds. We use real-time dashboards and modern reports to track community expenses and plans.
            </p>
            <div className={styles.chartPlaceholder}>📊 Fund Charts Coming Soon...</div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <div className={styles.illustrationWrapper}>
              <Image src="/contact.png" alt="Contact" width={300} height={200} className={styles.illustration} />
            </div>
            <p className={styles.sectionText}>
              Feel free to reach out to us:
              <br />📧 Email: strataUwelcome@gmail.com
              <br />📞 Phone: +61 123456789
              <br />🕒 Office Hours: 9am - 5pm, Mon - Fri
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>&copy; 2025 SmartScheme. All rights reserved.</p>
      </div>
    </div>
  );
}


