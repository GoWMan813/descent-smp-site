import Head from 'next/head'
import { Image } from '@nextui-org/react';
import styles from '../styles/Home.module.css'
import { Link, Grid, Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name='description' content='DescentSMP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href='./'>Descent SMP</a>!
        </h1>
        <Grid>
          <Image src='minecraft.png' alt='Minecraft' width={800} height={200} />
        </Grid>
        <Grid>
          <Image src='lg_group.png' alt='Large Group' width={564} height={654} />
        </Grid>
      </main>
      <footer className={styles.footer}>
          Built with ♥ by <Spacer x={0.25} />
            <Link target="_blank" href="https://github.com/GoWMan813">GoWMan</Link>
      </footer>
    </div>
  );
}
