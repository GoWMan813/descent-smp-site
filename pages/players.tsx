import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTheme as useNextTheme } from 'next-themes'
import { Spacer, Switch, useTheme } from '@nextui-org/react'
import { Navbar, Link, Text } from "@nextui-org/react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { Table } from '@nextui-org/react';
import { playercols, playerrows } from '../components/players';
import { Image } from '@nextui-org/react';

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
        <Image src="bloodMoon256.png" alt="Blood Moon" width={32} height={32} />
        <Spacer x={0.25} />
          <Text b color="inherit" hideIn="xs">
            DecentSMP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/story">Story</Navbar.Link>
          <Navbar.Link isActive href="/players">Players</Navbar.Link>
          <Navbar.Link href="#">Teams</Navbar.Link>
          <Navbar.Link href="/content-creators">Content Creators</Navbar.Link>
          <Navbar.Link href="/rules">Rules</Navbar.Link>
          <Navbar.Link href="/schedule">Schedule</Navbar.Link>
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
          Players
        </h1>
        <br />
        <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={playercols}>
        {(playercol) => (
          <Table.Column key={playercol.key}>{playercol.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={playerrows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
      </main>
      <footer className={styles.footer}>
          Built with ♥ by <Spacer x={0.25} />
            <Link target="_blank" href="https://github.com/GoWMan813">GoWMan</Link>
      </footer>
    </div>
  )
}
