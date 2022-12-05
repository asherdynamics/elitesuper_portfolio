import Head from 'next/head'
import { ParticlesContainer } from '../components/particles/ParticlesContainer'
import styles from '../styles/Home.module.css'

import { data } from '../utils/data'

export default function Home() {
  const {name, shortBio} = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className='text-green-500'>My Portfolio</span>
        </h1>
        <div className='w-full mt-2'>
          <h1 className="text-5xl text-center font-bold">Hi! 👋 I'm <span className='text-yellow-300'>{name}</span>.</h1>
          <h1 className="text-2xl text-center font-bold mt-1">{shortBio}</h1>
        </div>
        <div className='w-full mt-2 flex justify-center font-mono'>
          <button className='w-36 py-1 px-2 m-2 border border-2 hover:border-indigo-600  rounded-lg uppercase text-2xl font-bold hover:text-indigo-600'>Intro</button>
          <button className='w-36 py-1 px-2 m-2 border border-2 hover:border-indigo-600 rounded-lg uppercase text-2xl font-bold hover:text-indigo-600'>My Work</button>
          <button className='w-36 py-1 px-2 m-2 border border-2 hover:border-indigo-600 rounded-lg uppercase text-2xl font-bold hover:text-indigo-600'>Contact</button>
        </div>
        <ParticlesContainer/>
      </main>

    </div>
  )
}
