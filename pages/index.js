import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {Parallax,ParallaxLayer } from "@react-spring/parallax"
export default function Home() {
  return (
    <>
      <Head>
        <title>MainPage</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.title}>
          Hello World
        </div>
      </div>
    </>
  );
}
