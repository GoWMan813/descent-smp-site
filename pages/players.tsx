import Head from 'next/head'
import { Table } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'
import { playercols, playerrows } from '../components/players'

type Death = {
  name: string;
  deaths: number;
  causes: string[];
};

export default function Players() {
  const [deaths, setDeaths] = useState<Death[] | undefined>();

  async function fetchDeaths() {
    const resp = await fetch('/api/deaths');
    const data = await resp.json();
    setDeaths(data.data);
  }

  useEffect(() => {
    fetchDeaths();
  }, []);

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
          <Table.Body
            items={
              !deaths ? [] : playerrows.sort((a, b) => parseInt(b.deaths) - parseInt(a.deaths))
            }
          >
            {(item) => {
              const death = deaths.find((death) => death.name === item.name);
              if (death) {
                item.deaths = death.deaths.toString();
              }

              return (
                <Table.Row key={item.key}>
                  {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
              );
            }}
          </Table.Body>
        </Table>
      </main>
    </div>
  );
}
