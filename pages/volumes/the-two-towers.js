import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function Towers() {
  const twoTowersInfos = volumes.find(({ slug }) => slug === "the-two-towers");
  const twoTowersBooks = twoTowersInfos.books;

  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{twoTowersInfos.title}</h1>
      <p>{twoTowersInfos.description}</p>
      <ul>
        {twoTowersBooks.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} - {title}
          </li>
        ))}
      </ul>
    </>
  );
}
