import Link from "next/link"
import styles from "@/styles/Home.module.scss"

export default function Page404() {
  return (
    <main className={styles.main}>
      <h1>Oops! This page isn&apos;t available right now.</h1>
      <p>
        <Link href="/">Go back to homepage?</Link>
      </p>
    </main>
  )
}
