import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function Fellowship() {
  const theFellowshipInfos = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const theFellowshipBooks = theFellowshipInfos.books;
  console.log("Books", theFellowshipBooks);

  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{theFellowshipInfos.title}</h1>
      <p>{theFellowshipInfos.description}</p>
      <ul>
        {theFellowshipBooks.map((theFellowshipBook) => (
          <li key={theFellowshipBook.index}>
            {theFellowshipBook.ordinal} {theFellowshipBook.title}
          </li>
        ))}
      </ul>
    </>
  );
}
