import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledH1>The Lord of the Rings</StyledH1>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledH2>All Volumes</StyledH2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
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
