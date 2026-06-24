"use client";

import Helmet from "react-helmet";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Helmet>
        <script src="/scripts/react-part-4/examples.js"></script>
      </Helmet>
      {props.children}
    </div>
  );
}
