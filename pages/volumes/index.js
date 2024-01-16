import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings has three volumes:</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.index}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
