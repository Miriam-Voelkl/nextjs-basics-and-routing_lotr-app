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
      <StyledArticle>
        <StyledHeadline>{title}</StyledHeadline>
        <p>{description}</p>
      </StyledArticle>
      <StyledBackground $backgroundColor={currentVolume.color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={ordinal}>
              <StyledCaption>{ordinal}</StyledCaption>
              <StyledBook>{title}</StyledBook>
            </li>
          ))}
        </StyledList>
        <StyledCoverImage
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
          <p>{previousVolume.title}</p>
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

const StyledArticle = styled.article`
  padding: 0 25px 0 25px;
`;

const StyledHeadline = styled.h1`
  padding: 16px 0 8px 0;
  font: var(--font-headline-1);
  margin: 0;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 25px;
`;

const StyledBook = styled.p`
  font: var(--font-title);
  margin: 0;
  padding: 4px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-earth);
  padding: 8px;
  margin: 2px;
  display: inline-block;
`;

const StyledCaption = styled.p`
  font: var(--font-caption--italic);
  margin: 0 0;
`;

const StyledCoverImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  margin: 20px 25px;
`;

const StyledBackground = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: linear-gradient(100deg, transparent, 75%, #d4d1cc45);
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  width: 100vw;
`;
