import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
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
        <h1>Contact Us</h1>
        <p>Email: admin@stratabuilding.com</p>
        <p>Phone: +61 400 123 456</p>
      </main>
    </>
  );
}