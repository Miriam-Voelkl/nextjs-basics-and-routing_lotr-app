import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <StyledH1>The Lord of the Rings</StyledH1>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledH2>All Volumes</StyledH2>
      <StyledList>
        {volumes.map(({ slug, title, cover }) => (
          <li key={slug}>
            <StyledLink href={`/volumes/${slug}`}>
              <Image
                src={`/../public${cover}`}
                height={138}
                width={84}
                alt={`book cover of ${title}`}
              />{" "}
              <p>{title}</p>
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledH1 = styled.h1`
  font: var(--font-headline-1);
  padding: 16px 0 8px 0;
`;

const StyledIntroduction = styled.p`
  padding: 8px 0 24px 0;
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font: var(--font-caption);
`;
