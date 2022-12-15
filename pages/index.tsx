import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme as useNextTheme } from 'next-themes'
import { Spacer, Switch, useTheme } from '@nextui-org/react'
import { Navbar, Link, Text, Grid } from "@nextui-org/react";
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
<Grid>
<Image src="../public/minecraft.png" alt="Minecraft" width={800} height={200} />
</Grid>
<Grid>
<Image src="../public/lg_group.png" alt="Minecraft" width={564} height={654} />
</Grid>
      </main>
      <footer className={styles.footer}>
          Built with ♥ by <Spacer x={0.25} />
            <Link href="https://github.com/GoWMan813" isExternal>GoWMan</Link>
      </footer>
    </div>
  )
}
