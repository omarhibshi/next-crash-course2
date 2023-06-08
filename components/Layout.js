import Nav from "./Nav"
import Meta from "./Meta"
import styles from "../styles/Layout.module.css"
const Layout = ({ children }) => {
    return (
        <>
            {" "}
            <Nav />
            <Meta />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}

export default Layout
