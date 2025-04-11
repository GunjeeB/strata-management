import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Strata Committee</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#services">Committee Responsibilities</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#funds">Funds Management</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.welcomeText}>Welcome to Your Strata Committee Portal</h1>
          <p className={styles.subText}>Your trusted platform for managing strata-titled buildings in NSW</p>
        </div>

        {/* Committee Responsibilities Section */}
        <div className={styles.section} id="services">
          <h2 className={styles.sectionTitle}>Committee Responsibilities</h2>
          <p className={styles.sectionText}>
            The Strata Committee is responsible for managing the Owners Corporation, including maintenance of common areas, insurance, and financial oversight.
          </p>
        </div>

        {/* Funds Management Section */}
        <div className={styles.section} id="funds">
          <h2 className={styles.sectionTitle}>Funds Management</h2>
          <p className={styles.sectionText}>
            Strata owners contribute levies to the administration and capital works funds, which are used for the building's maintenance and future developments.
          </p>
        </div>

        {/* Contact Section */}
        <div className={styles.section} id="contact">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionText}>
            For any inquiries or issues, please contact the Strata Committee via email or phone.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>&copy; 2025 Strata Committee. All rights reserved.</p>
      </div>
    </div>
  );
}



