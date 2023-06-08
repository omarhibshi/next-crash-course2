import { server } from "@/config/index"
import Link from "next/link"
import { useRouter } from "next/router"
import Meta from "@/components/Meta"

const article = ({ articles }) => {
    console.log(`[id] articles is ${articles}`)
    console.log(articles)

    //const router = useRouter()
    //const { id } = router.query
    return (
        <>
            <Meta title={articles.title} description={articles.excerpt} />
            <h1>{articles.title}</h1>
            <p>{articles.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const articles = await res.json()
    return {
        props: { articles },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return { paths, fallback: false }
}

/* 
export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )
    const articles = await res.json()
    return {
        props: { articles },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return { paths, fallback: false }
} */

export default article
