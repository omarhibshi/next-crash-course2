import ArticleItem from "./ArticleItem"
import articleStyles from "../styles/Article.module.css"

export default function ArticleList({ articles }) {
    return (
        <div className={articleStyles.grid}>
            <br></br>
            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    )
}
