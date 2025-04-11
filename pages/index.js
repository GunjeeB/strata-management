import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strata Management</title>
      </Head>

      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Strata Committee</h2>
        <ul className={styles.sidebarMenu}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li className={styles.dropdown}>
            <a href="/services">Services</a>
            <div className={styles.dropdownContent}>
              <a href="/strata-services">Strata Services</a>
              <a href="/committee-roles">Committee Roles</a>
              <a href="/maintenance">Maintenance Services</a>
            </div>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.welcomeText}>Welcome to Your Strata Committee Portal</h1>
          <p className={styles.subText}>Your gateway to managing the building with ease.</p>
        </header>

        <section className={styles.section}>
          <h2>Our Strata Services</h2>
          <p>As part of the Owners Corporation, our services include the management of common areas, insurance, and maintenance. Our goal is to provide a seamless experience for all residents.</p>
        </section>

        <section className={styles.section}>
          <h2>Meet the Committee</h2>
          <p>The Strata Committee is responsible for the building's management. It consists of elected owners, including the Treasurer, Secretary, and Chairperson, who oversee the proper management of the property.</p>
        </section>

        <section className={styles.section}>
          <h2>What is Strata Management?</h2>
          <p>Strata-titled apartment buildings are governed by the Strata Schemes Management Act (2015), ensuring collective responsibility for the maintenance and protection of shared spaces. The Owners Corporation handles all matters related to common areas, insurance, and more.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Strata Committee - All rights reserved</p>
      </footer>
    </div>
  )
}

