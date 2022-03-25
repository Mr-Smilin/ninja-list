import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
        <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
        <Link href="/ninjas">
          <a className={styles.btn}>Sec Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
