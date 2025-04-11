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
          <p className={styles.subText}>A modern and efficient way to manage the building.</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Strata Services</h2>
          <p className={styles.sectionText}>As part of the Owners Corporation, we manage common areas, insurance, and maintenance. Our team is dedicated to ensuring smooth operations and services for all residents.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Meet the Committee</h2>
          <p className={styles.sectionText}>The Strata Committee consists of elected owners, including the Treasurer, Secretary, and Chairperson. We ensure that the property is well-managed and serve the community with transparency and professionalism.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Strata Management?</h2>
          <p className={styles.sectionText}>Strata-titled apartment buildings are governed by the Strata Schemes Management Act (2015), which ensures that all common areas are maintained and managed efficiently. The Owners Corporation is responsible for making sure that every resident benefits from a well-managed and secure environment.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Strata Committee - All rights reserved</p>
      </footer>
    </div>
  )
}



