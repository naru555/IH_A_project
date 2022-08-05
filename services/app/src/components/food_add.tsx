import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{Component, Dispatch} from 'react'
import {createRoot} from 'react-dom/client'
import axios from 'axios'

// axios.get('http://localhost:3000?textarea=#')
// .then((response) => {
//   console.log( 'OK');
//   console.log(response.data);
// }).catch(() => {
//   console.log('Failed');
// }).then(() => {
//   console.log('Complete!');
// });

type Props = {
   show: boolean;
   setShow:React.Dispatch<React.SetStateAction<boolean>>;
 }

// function Modal({show:boolean,setShow:React.Di}) {
  const Modal:React.FC<Props> = ({show,setShow}) =>{
  if(show){
  return(
    <div id={styles.overlay}>
      <div id={styles.content}>
        <h2 className={styles.title}>食材を追加</h2>

        <div className={styles.icon}>
          <ul>
            <li className={styles.list}>
              {/* <a href="#"> */}
                <Image className={styles.img} src='/vegetable.jpeg' width={70} height={70} alt=""></Image>
              {/* </a> */}
            </li>
            <li className={styles.list}>
              {/* <a href="#"> */}
                <Image className={styles.img} src='/fruit.jpeg' width={70} height={70} alt=""></Image>
              {/* </a> */}
            </li>
            <li className={styles.list}>
              {/* <a href="#"> */}
                <Image className={styles.img} src='/fish.jpeg' width={70} height={70} alt=""></Image>
              {/* </a> */}
            </li>
            <li className={styles.list}>
              {/* <a href="#"> */}
                <Image className={styles.img} src='/meat.jpeg' width={70} height={70} alt=""></Image>
              {/* </a> */}
            </li>
          </ul>
        </div>

        <form action="#" method="get">
          <input className={styles.inputText} type="text" placeholder='食材名'/> <br />
          <input className={styles.inputText} type="text" placeholder='消費期限'/> <br />
          <input className={styles.inputText} type="text" placeholder='保存場所'/> <br />
          <textarea className={styles.textarea} name="textarea" id="" placeholder='コメント'></textarea><br />
          <input className={styles.inputButton} type="submit" value={'食材を追加'}/>
        </form>

        <button onClick={()=>setShow(false)}>close</button>
      </div>
    </div>
  )
  } else{
    return null;
  }
}


const {useState} = React

function App(){
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }
  return(
    <div>
      <button onClick={openModal}>Click</button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
};

if (typeof document !== 'undefined') {
  //documentを使う関数を入れる
  const root = createRoot(document.getElementById('root')!)
  root.render(<App />)
}


const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>食材を追加</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div id='root'></div>
        
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}

export default Home
