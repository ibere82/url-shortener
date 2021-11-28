import { useState } from "react"
import styles from '../styles/Home.module.css'


export default function Form({ handle }) {
    const [url, setUrl] = useState()

    const handleClick = () => {
        handle(url)
    }

    return (
        <>
            <h1 className={styles.title}>
                Gere sua URL curta
            </h1>

            <label>
                <input type="text" placeholder="Digite sua URL aqui" onChange={(e) => setUrl(e.currentTarget.value)} />
            </label>
            <br/>
            <button onClick={handleClick}>Gerar URL curta</button>
        </>
    )
}