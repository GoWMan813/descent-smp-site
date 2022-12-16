import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Table, Link, Spacer } from '@nextui-org/react';
import { playercols, playerrows } from '../components/players';

export default function Players() {
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
          aria-label='Players'
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
