import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { Navbar, Link, Text } from "@nextui-org/react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { Container, Row, Card } from '@nextui-org/react';

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
        <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link isActive href="/story">Story</Navbar.Link>
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
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
      />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          The Story
        </h1>
        <br />
        <Container sm>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={25} color="white" css={{ m: 0 }}>
            The Descent SMP follows players' descent into anarchy on the weekly bloodmoon.
            During the bloodmoon players are incentivized to kill as much as possible; this will be done by providing negative status effects the longer they have not killed.
            Player roles for the upcoming week are determined by the amount of kills achieved during the bloodmoon (roles, and such, are determined by players, with minimal intervention from administrators).
            During normal weekly activity, players will have stream integration allowing for viewers to positively/negatively impact the streamer. 
            All redeems will be determined by server administrators before each week.
            During bloodmoons, negative viewer integration will be boosted allowing negative effects to cause environmental damages.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
      </main>
    </div>
  )
}
