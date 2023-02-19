import HeadTag from "@/components/HeadTag"
import Menu from "@/components/Menu"
import styles from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <HeadTag />
      <main className={styles.main}>
        <h1>NextJS + Redux + GraphQL v4 Example</h1>
        <Menu />
      </main>
    </>
  )
}
