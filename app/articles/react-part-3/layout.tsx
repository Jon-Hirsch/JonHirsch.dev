"use client";

import Helmet from "react-helmet";

export default function DragonCurve(props: { children: React.ReactNode }) {
  return (
    <div>
      <Helmet>
        <script src="/scripts/react-part-3/example1.js"></script>
        <script src="/scripts/react-part-3/example2.js"></script>
        <script src="/scripts/react-part-3/example3.js"></script>
        <script src="/scripts/react-part-3/example4.js"></script>
      </Helmet>
      {props.children}
    </div>
  );
}
