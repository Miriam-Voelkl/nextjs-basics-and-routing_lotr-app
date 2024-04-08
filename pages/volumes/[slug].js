import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";

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

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/volumes">All Volumes</StyledLink>
      <StyledHeadline>{title}</StyledHeadline>
      <p>{description}</p>
      <StyledBackground $backgroundColor={currentVolume.color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={ordinal}>
              {ordinal} - {title}
            </li>
          ))}
        </StyledList>
        <Image
          src={`/../public${cover}`}
          height={230}
          width={140}
          alt={`book cover of ${title}`}
        />
      </StyledBackground>
      {previousVolume ? (
        <StyledLink href={`/volumes/${previousVolume.slug}`}>
          ← Previous volume
        </StyledLink>
      ) : null}

      {nextVolume ? (
        <StyledLink href={`/volumes/${nextVolume.slug}`}>
          {" "}
          Next volume →
        </StyledLink>
      ) : null}
    </>
  );
}

const StyledBackground = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  padding: 0.75rem;
  width: 100vw;
`;

const StyledHeadline = styled.h1`
  padding: 4px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 4px;
  margin: 2px;
  display: inline-block;
  box-shadow: 2px 2px #62586b;
  &:hover {
    background-color: #b69eaa;
  }
`;
