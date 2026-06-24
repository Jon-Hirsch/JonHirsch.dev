"use client";

import Link from "next/link";
import Helmet from "react-helmet";

export default function SkeletalRigging2() {
  return (
    <div>
      <h1>Skeletal Rigging 2.0</h1>
      <p>
        I've expanded on my original{" "}
        <Link href="/personal-projects/skeletal-rigging">Skeletal Rigging</Link>{" "}
        project and added in some dynamic controls built with React and Redux.
        You can now add/remove bones, and position them with the controls below
        the canvas.
      </p>
      The source code can be seen here:{" "}
      <Link
        href="https://github.com/Jon-Hirsch/SkeletalRigging2.0"
        target="_blank"
      >
        https://github.com/Jon-Hirsch/SkeletalRigging2.0
      </Link>
      <div id="SkeletalRiggingContainer" className="game-container"></div>
      <Helmet>
        <script src="/scripts/skeletal-rigging-2/skeletal-rigging-2.js"></script>
      </Helmet>
    </div>
  );
}
