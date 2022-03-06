import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'


export default function Home({ allPostsData }) {
  const name = "Emily Loiselle"
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {
          <div style={{display: "grid", placeItems: "center"}}>
            <Image
              priority
              //styles={{display: "block", marginL: "auto", marginR: "auto", width: "90%"}} 
              src={"/images/profile.jpg"}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={"Picture of Emily Loiselle"}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
        }
      <section className={utilStyles.headingMd}>
        <p style = {{display: "grid", placeItems: "center", fontFamily: "Arial"}}>Hi! I'm Emily, a student from purdue.</p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Interests</h2>
        
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
