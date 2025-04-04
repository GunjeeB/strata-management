import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>

      <nav className={styles.navbar}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/complaints">Complaints</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1>Our Services</h1>
        <ul>
          <li>Financial Management</li>
          <li>Building Maintenance</li>
          <li>Document Storage</li>
        </ul>
      </main>
    </>
  );
}