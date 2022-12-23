import Head from 'next/head'
import { Avatar } from '@nextui-org/react';
import styles from '../styles/Home.module.css'

export default function Creators() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DescentSMP</title>
        <meta name='description' content='DescentSMP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Content Creators</h1>

        <div className={styles.grid}>
          <a href='https://www.youtube.com/Jawunleashed' target='_blank' className={styles.card}>
            <Avatar
              src='https://yt3.googleusercontent.com/PnxOBkVYgR5pUulYzdwyITYkijMAo2XD8QDwjY1Ws7DiCEp3EStN6TbL2WT870HaXIcDksqIGg=s88-c-k-c0x00ffffff-no-rj'
              css={{ size: '$20' }}
            />
            <h2>Jawunleashed</h2>
            <p>
              YouTube may be on dry land, but that doesn't mean a shark can't make videos! 🦈🦈🦈
            </p>
          </a>

          <a href='https://www.youtube.com/@ish' target='_blank' className={styles.card}>
            <Avatar
              src='https://yt3.ggpht.com/jMk74S1WiQC5cY4SRCPT6Std7cL0ZzfA6ysiNz98HPtiOhvtudqjfDALzSwUUDhYdePBToUjzs0=s88-c-k-c0x00ffffff-no-rj'
              css={{ size: '$20' }}
            />
            <h2>ish</h2>
            <p>
              Top Minecraft Civilization YouTuber of the year and here to show you how it's done.
            </p>
          </a>

          <a href='https://www.twitch.tv/perilous_outlaw' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/be696110-17fa-41e1-9804-6cd887bc2325-profile_image-300x300.png'
              css={{ size: '$20' }}
            />
            <h2>Perilous_Outlaw</h2>
            <p>The one and only Pookie! Here to hibernate (camp) one base at a time.</p>
          </a>

          <a href='https://www.twitch.tv/waldoandfriends' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/0026591c-a2a6-4149-8100-dc6d1b3ea7ea-profile_image-300x300.png'
              css={{ size: '$20' }}
            />
            <h2>WaldoAndFriends</h2>
            <p>Variety streamer from the Netherlands, definitely not 30 yet... Can you find me?</p>
          </a>
          <a href='https://www.twitch.tv/confuzzedcat' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/5d65b350-e89e-4a9e-a7bc-31b41e883d71-profile_image-300x300.png'
              css={{ size: '$20' }}
            />
            <h2>ConfuzzedCat</h2>
            <p>Denmark cat that is only slightly confuzzed. Let's Minecraft meow.</p>
          </a>
          <a href='https://www.youtube.com/@Boyjedi' target='_blank' className={styles.card}>
            <Avatar
              src='https://yt3.ggpht.com/YBD0mFTZ-tS08uqE1yxpHDpvTDytyygGErnD6O4MhZ7ik06Bg6UKu9Q8cc4kIHhkqqkEdUKNUg=s88-c-k-c0x00ffffff-no-rj'
              css={{ size: '$20' }}
            />
            <h2>BoyJedi</h2>
            <p>
              Minecraft YouTuber who needs to upload more frequently. For legal reasons not a real
              jedi.
            </p>
          </a>
          <a href='https://www.twitch.tv/gowman' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/dd70b1ec-b906-416a-8a56-d067bda64514-profile_image-300x300.png'
              css={{ size: '$20' }}
            />
            <h2>GoWMan</h2>
            <p>Alien from a distant planet that's apparently waifu material...</p>
          </a>
          <a href='https://www.twitch.tv/gowman' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/88969637-3d54-4965-8d46-990c3ffcd9e8-profile_image-300x300.png'
              css={{ size: '$20' }}
            />
            <h2>Ricedneon</h2>
            <p>Bald... Obnoxious... Vulgar... Creative? Always eating on stream... Giggity</p>
          </a>
          <a href='https://www.twitch.tv/triogamil' target='_blank' className={styles.card}>
            <Avatar
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/0247dcb6-e31d-43f4-b132-82a41cabc725-profile_image-70x70.png'
              css={{ size: '$20' }}
            />
            <h2>TriogamiL</h2>
            <p>
            Love to play Chess and enjoy watching chess. Enjoys coding in C++ and Java. The most giga of chads.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}