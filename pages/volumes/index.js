import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Volumes of The Lord of the Rings</h1>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button">Go to a random volume</button>
    </>
  );
}
