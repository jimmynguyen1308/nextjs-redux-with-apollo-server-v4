import HeadTag from "@/components/HeadTag"
import styles from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <HeadTag />
      <main className={styles.main}>Hello world</main>
    </>
  )
}
