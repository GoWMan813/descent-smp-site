import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { Navbar, Link, Text } from "@nextui-org/react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name="description" content="DescentSMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isCompact isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            DecentSMP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link href="/story">Story</Navbar.Link>
          <Navbar.Link href="#">Players</Navbar.Link>
          <Navbar.Link href="#">Teams</Navbar.Link>
          <Navbar.Link href="#">Content Creators</Navbar.Link>
          <Navbar.Link href="#">Rules</Navbar.Link>
          <Navbar.Link href="#">Schedule</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOff={<SunIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
        iconOn={<MoonIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
      />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="./">Descent SMP</a>!
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
