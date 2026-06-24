"use client";

import Link from "next/link";
import Helmet from "react-helmet";

export default function LindenmeyerSystem() {
  return (
    <div>
      <h1>Lindenmeyer System</h1>
      <p>
        I find fractals to be really interesting, and{" "}
        <Link href="https://en.wikipedia.org/wiki/L-system">
          Lindenmayer systems
        </Link>{" "}
        are a great way to describe them in computer friendly terms. They work
        by using an alphabet of symbols that have an operation associated with
        them, and rules on how to generate the next set of symbols. I built this
        app a few years ago to play around with generating fractals. There are a
        few preset fractals available to give a sense of how everything works.
        The source code is available at{" "}
        <Link href="https://github.com/Jon-Hirsch/lindenmeyer-system">
          https://github.com/Jon-Hirsch/lindenmeyer-system
        </Link>
      </p>
      <div id="lSystemContainer"></div>
      <Helmet>
        <script src="/scripts/l-system/l-system.js"></script>
      </Helmet>
    </div>
  );
}
