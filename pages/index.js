import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strata Committee</title>
      </Head>

      {/* Navigation Bar */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li className={styles.dropdown}>
              <a href="/services">Services</a>
              <div className={styles.dropdownContent}>
                <a href="/strata-services">Strata Services</a>
                <a href="/committee-roles">Committee Roles</a>
              </div>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to Our Strata Committee</h1>
        <p>Supporting the smooth management of our apartment building.</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Strata Services</h2>
          <p>We manage repairs, common areas, levies and more.</p>
        </section>

        <section className={styles.section}>
          <h2>Committee Members</h2>
          <p>Our Chairperson, Secretary, Treasurer, and others work together to keep things running.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Strata Committee</p>
      </footer>
    </div>
  )
}
