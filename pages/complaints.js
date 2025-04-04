import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Complaints() {
  return (
    <>
      <Head>
        <title>Complaints</title>
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
        <h1>Submit a Complaint</h1>
        <p>If you have an issue, please let us know.</p>
        <textarea placeholder="Describe your complaint here"></textarea>
        <button>Submit</button>
      </main>
    </>
  );
}