import type { NextPageContext } from 'next'
import styles from '../styles/Home.module.css'
import { get } from '../api'

export default function Short<NextPage>() {
    return (
        <div className={styles.container}>
            Redirecionando . . .
        </div>
    )
}

export async function getServerSideProps(ctx: NextPageContext) {
    const hash: string = ctx.req?.url?.slice(1) || ''
    
    const url = await get(hash)
    
    return { redirect: { destination: url } }
}
