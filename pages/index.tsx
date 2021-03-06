import { useState } from 'react'
import type { NextPageContext } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'

export default function Home<NextPage>() {

    const [short, setShort] = useState('')
    const [origin, setOrigin] = useState('')

    const handleUrl = async (url: string) => {
        console.log('chegou ', url)
        const resp = await fetch(`/api/new`, { method: 'POST', body: JSON.stringify({ url }) })
        const { originUrl, shortUrl } = await resp.json()
        console.log(resp)
        setOrigin(originUrl)
        setShort(shortUrl)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Form handle={handleUrl} />
                
                <p>Url Original</p>
                <code>{origin}</code>
                <p>Url Encurtada</p>
                <code>{short}</code>
            
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}



export async function getServerSideProps(ctx: NextPageContext) {
    console.log("index")
    console.log(ctx.req?.url)
    console.log(ctx.req?.method)


    return { props: { default: true } }

}
