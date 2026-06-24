"use client";

import Helmet from "react-helmet";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Helmet>
        <script src="/scripts/react-part-5-exercise-1/example.js"></script>
      </Helmet>
      {props.children}
    </div>
  );
}
