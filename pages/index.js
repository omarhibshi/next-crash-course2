import { server } from "../config"
//import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import ArticleList from "@/components/ArticleList"

const inter = Inter({ subsets: ["latin"] })

export default function Home({ articles }) {
    //console.log(`main index : articles is ${articles}`)
    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    {/*                     <Head>
                        <title>Web dev news</title>
                        <meta
                            name="keywords"
                            content="web development, programming"
                        />
                    </Head> */}
                    <div>
                        {" "}
                        <h1>Hello 👋 </h1>
                        <h1>Welcome to Next 😎️ </h1>
                        <br></br>
                    </div>

                    <ArticleList articles={articles} />
                </div>
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    return { props: { articles } }
}

/* export const getStaticProps = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
    )
    const articles = await res.json()

    return { props: { articles } }
}
 */
