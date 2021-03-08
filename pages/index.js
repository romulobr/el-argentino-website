import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/common/header/header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Restaurante El Argentino</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header phone={'1234561'}/>
        </div>
    )
}
