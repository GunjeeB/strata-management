import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Strata Building Management</title>
        <meta name="description" content="Manage your building efficiently" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Strata Building Management</h1>
        </header>

        <main className={styles.main}>
          <h2>Welcome to the Management System</h2>
          <p>Manage your building’s maintenance, meetings, and finances efficiently.</p>
          
          <button className={styles.button} onClick={() => alert("Welcome to Strata Management!")}>
            Click for Notification
          </button>
        </main>

        <footer className={styles.footer}>
          <p>© 2025 Strata Management System</p>
        </footer>
      </div>
    </>
  );
}
