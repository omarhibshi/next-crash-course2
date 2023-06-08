import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

export default function ArticleItem({ article }) {
    return (
        <Link legacyBehavior href={`/article/${article.id}`}>
            <a id="link" className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}
