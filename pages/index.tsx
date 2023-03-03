import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
      
        <Image 
        src="/asher-logo-white.png"
          width={399}
          height={137}
          alt="Asher Dynamics"
          />
        <div className='w-full mt-4'>
          <h1 className="text-5xl text-center font-bold"><span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500'>{name}</span>.</h1>
          <h1 className="text-2xl text-center font-bold mt-1">{shortBio}</h1>
        </div>
        <div className='w-full mt-2 inline-block md:flex justify-center text-center font-semibold'>
          <button className='w-5/6 md:w-36 py-1 px-2 m-auto my-2 md:m-2  border-2 hover:border-yellow-500  rounded-lg uppercase text-md font-bold hover:text-yellow-500'><Link href="/portfolio/ourwork" >Our Work</Link></button>
          <button className='w-5/6 md:w-36 py-1 px-2 m-auto my-2 md:m-2 border-2 hover:border-yellow-500  rounded-lg uppercase text-md font-bold hover:text-yellow-500'><Link href="/portfolio/about" >About</Link></button>
          <button className='w-5/6 md:w-36 py-1 px-2 m-auto my-2 md:m-2 border-2 hover:border-yellow-500  rounded-lg uppercase text-md font-bold hover:text-yellow-500'><Link href="/portfolio/contact" >Contact</Link></button>
          </div>
          <div className="pt-6 px-6"></div>
          
        <ParticlesContainer/>
      </main>

    </div>
  
  )
}
