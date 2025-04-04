import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <>
      <Head>
        <title>Strata Management</title>
        <meta name="description" content="Manage your strata-titled property" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Menu Button */}
      <div className={styles['menu-bar']} onClick={toggleMenu}>
       ☰ Menu
      </div>

      {/* Menu Items */}
      <div className={`${styles['menu-items']} ${menuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Home Section */}
      <div id="home" className={styles.section}>
        <h1>Welcome to Strata Management</h1>
        <div className={styles.intro}>
          <h2>Introduction</h2>
          <p>
            The Strata Schemes Management Act 2015 (SSMA 2015) provides the legal framework for managing
            strata-titled properties in New South Wales. It sets out the rights and responsibilities of
            owners, tenants, and the strata committee. The act covers various aspects such as the duties
            of owners, the management of common areas, and the election of strata committee members.
            This legislation is essential for maintaining harmony and fairness in strata communities.
          </p>
          <p>
            For more detailed information on the SSMA 2015, visit the official document
            <a href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/" target="_blank" rel="noopener noreferrer">
              here.
            </a>
          </p>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className={styles.section}>
        <h2>About Strata Management</h2>
        <p>Strata management involves managing a property where there are multiple owners, such as in apartment buildings...</p>
      </div>

      {/* Services Section */}
      <div id="services" className={styles.section}>
        <h2>Our Services</h2>
        <p>We provide a range of services including property maintenance, financial management, and more...</p>
      </div>

      {/* Contact Section */}
      <div id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please contact us at:</p>
        <p>Email: strata@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </>
  );
}