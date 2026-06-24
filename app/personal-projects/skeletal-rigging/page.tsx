"use client";

import Helmet from "react-helmet";
import Link from "next/link";

export default function SkeletalRigging() {
  return (
    <div>
      <h1>Skeletal Rigging</h1>
      <p>
        A few years back I spent some time studying game programming in C++ and
        C#. One of the topics I spent time playing with was skeletal animation.
        The basic idea of skeletal animation is that a model can have bones, and
        when a bone moves, it also effects the positioning of any bones attached
        to it. I decided it could be interesting to take what I'd worked with in
        a 3d environment in C# and see how it would translate into 2d in
        JavaScript. I ended up with this posable stickman. Drag the circles to
        pose him.
      </p>
      The source code can be found here:{" "}
      <Link href="https://github.com/Jon-Hirsch/SkeletalRigging">
        https://github.com/Jon-Hirsch/SkeletalRigging
      </Link>
      <div id="SkeletalRiggingContainer" className="game-container"></div>
      <Helmet>
        <script src="/scripts/skeletal-rigging/skeletal-rigging.js"></script>
      </Helmet>
    </div>
  );
}
``;
