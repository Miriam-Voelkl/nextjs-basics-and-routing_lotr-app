import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #9eaab6;
  padding: 2px;
  border: #777f89 solid 1px;
  border-radius: 6px;
  box-shadow: 1px 1px #4f555b;
`;

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
      <Link href="/">Home</Link>
      <h1>Volumes of The Lord of the Rings</h1>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <StyledButton type="button" onClick={handleRandomButton}>
        Go to a random volume
      </StyledButton>
    </>
  );
}
