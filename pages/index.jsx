import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data , setData] = useState([]) 

  const importNow = async()=>{
    setData((await import('../json/products.json')).default)
  }
  return (
    <div className={styles.container}>
      <br />
      <br />
      <br />
      <button onClick={importNow}>Import Now</button>

     <h1>Dynamic Import DEMO</h1>

    <hr />
     <pre>
       {
         JSON.stringify(data , null , 2)
       }
     </pre>
    </div>
  )
}
