import Link from "next/link"

export default function Menu() {
  return (
    <nav>
      <p>Menu:</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
      </ul>
    </nav>
  )
}
