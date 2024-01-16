import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <h2>Volume not found</h2>;
  }

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  const { title, description, books, cover } = currentVolume;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  console.log("next volume", nextVolume);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} - {title}
          </li>
        ))}
      </ul>
      <Image
        src={`/../../resources/${cover}`}
        height={230}
        width={140}
        alt={`book cover of ${title}`}
      />

      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            Go to the previous volume
          </Link>
        </div>
      ) : null}

      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}> Go to the next volume</Link>
      ) : null}
    </>
  );
}

/* export default function Fellowship() {
  const theFellowshipInfos = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const theFellowshipBooks = theFellowshipInfos.books;

  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{theFellowshipInfos.title}</h1>
      <p>{theFellowshipInfos.description}</p>
      <ul>
        {theFellowshipBooks.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} - {title}
          </li>
        ))}
      </ul>
      <Image
        src={fellowshipCover}
        height={230}
        width={140}
        alt="the bookcover of the fellowship of the ring"
      />
    </>
  );
}
*/
