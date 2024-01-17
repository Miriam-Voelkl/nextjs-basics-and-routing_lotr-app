import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function handleRandomButton() {
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  }

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
      <button type="button" onClick={handleRandomButton}>
        Go to a random volume
      </button>
    </>
  );
}
