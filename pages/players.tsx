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
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name='description' content='DescentSMP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Players</h1>
        <br />
        <Table
          aria-label='Example table with dynamic content'
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
        >
          <Table.Header columns={playercols}>
            {(playercol) => <Table.Column key={playercol.key}>{playercol.label}</Table.Column>}
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
    </div>
  );
}
