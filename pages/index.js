import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className={styles.container}>
        <div className={styles.main}>
          Hello World
        </div>
      </div>
    </>
  );
}
