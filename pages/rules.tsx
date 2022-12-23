import Head from 'next/head';
import { Image, Table } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
import { Link, Grid, Spacer } from '@nextui-org/react';

const rules = [
  'Builds that display NSFW/offensive content are prohibited. This includes signs and books.',
  'Your Minecraft skin must not be offensive, nor contain NSFW or PG-13 content.',
  'Any use of lag machines that cause server/client lag are prohibited.',
  'Griefing other players builds is prohibited.',
  'Stealing is prohibited.',
  'Unprompted killing will not be tolerated.',
];

const bloodmoonRules = ['Killing is allowed'];

export default function Rules() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name='description' content='DescentSMP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Rules</h1>
        <Table>
          <Table.Header>
            <Table.Column> </Table.Column>
            <Table.Column> </Table.Column>
          </Table.Header>
          <Table.Body>
            {rules.map((r, i) => (
              <Table.Row key={i}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{r}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Spacer />
        <h3 className={styles.subtitle}>Blood Moon Rule Overrides</h3>
        <Table>
          <Table.Header>
            <Table.Column> </Table.Column>
            <Table.Column> </Table.Column>
          </Table.Header>
          <Table.Body>
            {bloodmoonRules.map((r, i) => (
              <Table.Row key={i}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{r}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </main>
    </div>
  );
}
