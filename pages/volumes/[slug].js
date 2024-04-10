import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import ChevronLeftIcon from "@/components/Icons/ChevronLeft";
import ArrowRightIcon from "@/components/Icons/ArrowRight";
import ArrowLeftIcon from "@/components/Icons/ArrowLeft";

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
      <StyledHeaderLink href="/volumes">
        <ChevronLeftIcon />
        <span>All Volumes</span>
      </StyledHeaderLink>
      <StyledHeadline>{title}</StyledHeadline>
      <p>{description}</p>
      <StyledBackground $backgroundColor={currentVolume.color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={ordinal}>
              <StyledCaption>{ordinal}</StyledCaption>
              <StyledBook>{title}</StyledBook>
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
          <ArrowLeftIcon />
          <StyledCaption>Previous volume</StyledCaption>
          <p>{nextVolume.title}</p>
        </StyledLink>
      ) : null}

      {nextVolume ? (
        <StyledLink href={`/volumes/${nextVolume.slug}`}>
          {" "}
          <StyledCaption>Next volume</StyledCaption>
          <p>{nextVolume.title}</p>
          <ArrowRightIcon />
        </StyledLink>
      ) : null}
    </>
  );
}

// background: linear-gradient(90deg, #282828, 90%, #282828cc);

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--color-earth);
  margin: 0 auto;
  padding: 16px 0 0 0;
  display: flex;
  gap: 4px;
  text-align: center;
`;

const StyledHeadline = styled.h1`
  padding: 16px 0;
  font: var(--font-headline-1);
  margin: 0;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
`;

const StyledBook = styled.p`
  font: var(--font-title);
  margin: 0;
  padding: 4px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 8px;
  margin: 2px;
  display: inline-block;
`;

const StyledCaption = styled.p`
  font: var(--font-caption--italic);
  margin: 0 0;
`;

const StyledBackground = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: linear-gradient(
    90deg,
    transparent,
    90%,
    var(--color-smoke)
  );
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  padding: 0.75rem;
  width: 100vw;
`;
