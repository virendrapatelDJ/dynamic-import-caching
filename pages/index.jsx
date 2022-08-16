import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data , setData] = useState([]) 

  const importNow = async(id)=>{
    setData((await import(`../public/json/products${id}.json`)).default)
  }
  return (
    <div className={styles.container}>
      <br />
      <br />
      <br />
      <button onClick={()=>importNow(1)}>Import Now 1 </button>
      <button onClick={()=>importNow(2)}>Import Now 2 </button>
      <button onClick={()=>importNow(3)}>Import Now 3</button>
      <button onClick={()=>importNow(4)}>Import Now 4</button>
      <button onClick={()=>importNow(5)}>Import Now 5</button>

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
