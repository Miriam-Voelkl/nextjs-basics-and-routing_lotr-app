import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function King() {
  const returnOfKingInfos = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  const returnOfKingBooks = returnOfKingInfos.books;

  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{returnOfKingInfos.title}</h1>
      <p>{returnOfKingInfos.description}</p>
      <ul>
        {returnOfKingBooks.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} - {title}
          </li>
        ))}
      </ul>
    </>
  );
}
