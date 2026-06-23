"use client";

import Link from "next/link";
import Helmet from "react-helmet";

export default function DragonCurve() {
  return (
    <div>
      <h1>Dragon Curve</h1>
      <p>
        This is a simple canvas app to generate{" "}
        <Link href="https://en.wikipedia.org/wiki/Dragon_curve">
          dragon curve
        </Link>{" "}
        fractals. Play around with the controls at the bottom to control the
        number of iterations and the colors used in the fractal. A quick word of
        warning in advance though, the fractals look awesome at higher
        iterations, but after about 15 or so they start taking a while to
        render, as the number of lines drawn starts going into the millions.
      </p>
      <p>
        The source code can be seen here:{" "}
        <Link href="https://github.com/Jon-Hirsch/dragon-curve">
          https://github.com/Jon-Hirsch/dragon-curve
        </Link>
      </p>
      <div id="dragonCurveContainer" className="game-container"></div>

      <Helmet>
        <script src="/scripts/dragon-curve/dragon-curve.js"></script>
      </Helmet>
    </div>
  );
}
