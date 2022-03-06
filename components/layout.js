import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Emily Loiselle'
export const siteTitle = "Emily's Website"

export default function Layout({ children, home }) {
  return (
    <div>
      <div
      style = {{backgroundColor: "#4E65A2",
      minHeight: "30",
      zIndex: "100",
      top: "0",
    position: 'sticky'}}
      >
      <ul className = {styles.navigationBar}> 
        <li className = {styles.navigationBar}><a href="/">Home</a></li>
        <li className = {styles.navigationBar}><a href="/about">About</a></li>
        <li className = {styles.navigationBar}><a href="https://drive.google.com/file/d/13Miqqlfq161nbcNHFqR6A1ExzfbMjdR5/view?usp=sharing">Resume</a></li>
        <li className = {styles.navigationBar}><a href="https://github.com/ealoisel">Github</a></li>    
      </ul> 
    
        
      </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
