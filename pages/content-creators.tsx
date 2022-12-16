import Head from 'next/head'
import { Spacer, Link, Avatar } from '@nextui-org/react';
import styles from '../styles/Home.module.css'

export default function Creators() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name="description" content="DescentSMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Content Creators
        </h1>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/Jawunleashed" target="_blank" className={styles.card}>
          <Avatar
          src="https://yt3.googleusercontent.com/PnxOBkVYgR5pUulYzdwyITYkijMAo2XD8QDwjY1Ws7DiCEp3EStN6TbL2WT870HaXIcDksqIGg=s88-c-k-c0x00ffffff-no-rj"
          css={{ size: "$20" }}
        /><h2>Jawunleashed</h2>
            <p>YouTube may be on dry land, but that doesn't mean a shark can't make videos! 🦈🦈🦈</p>
          </a>

          <a href="https://www.youtube.com/@ish" target="_blank" className={styles.card}>
          <Avatar
          src="https://yt3.ggpht.com/jMk74S1WiQC5cY4SRCPT6Std7cL0ZzfA6ysiNz98HPtiOhvtudqjfDALzSwUUDhYdePBToUjzs0=s88-c-k-c0x00ffffff-no-rj"
          css={{ size: "$20" }}
        />
            <h2>ish</h2>
            <p>Top Minecraft Civilization YouTuber of the year and here to show you how it's done.</p>
          </a>

          <a
            href="https://www.twitch.tv/perilous_outlaw"
            target="_blank"
            className={styles.card}
          >
            <Avatar
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/be696110-17fa-41e1-9804-6cd887bc2325-profile_image-300x300.png"
          css={{ size: "$20" }}
        />
            <h2>Perilous_Outlaw</h2>
            <p>The one and only Pookie!  Here to hibernate (camp) one base at a time.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Built with ♥ by <Spacer x={0.25} />
            <Link target="_blank" href="https://github.com/GoWMan813">GoWMan</Link>
      </footer>
    </div>
  )
}