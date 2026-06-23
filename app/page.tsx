import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="content-header">Welcome to JonHirsch.dev</h1>
      <Image
        className="side-image"
        alt="picture of Jon"
        src="/taj.jpg"
        width={189}
        height={216}
      />
      <p>
        Hey there! I'm Jon Hirsch and I've designed and built this website as a
        space to showcase some of my personal projects, as well as some
        programming tutorials I've written.{" "}
      </p>
      <p>
        To see some of my work, you can check out my{" "}
        <Link href="/personal-projects">Personal Projects</Link> section.
      </p>
      <p>
        You can also take a look at my <Link href="/articles">Articles</Link>{" "}
        section to read some of my React tutorials. I originally wrote these
        tutorials back in 2016 as an introduction to React for some of my
        coworkers. I've recently updated them from the older class based
        components to using function based components and hooks that were
        introduced to React version 16.8 in 2019.
      </p>
      <p>
        Finally, the source code for this side is available on Github here:{" "}
        <Link href="https://github.com/Jon-Hirsch/jonhirsch.dev">
          https://github.com/Jon-Hirsch/jonhirsch.dev
        </Link>
        . The first iteration of this site was built back in 2013 using the
        classic LAMP stack. A few years back I rebuilt it using React and
        Gatsby, and most recently I've rebuilt it again using Next.js and AWS.
      </p>
    </>
  );
}
