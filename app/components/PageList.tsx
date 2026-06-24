"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { fetchPages } from "../data/fetchPages";

type Page = {
  id: string;
  title: string;
  description: string;
  pageType: string;
  url: string;
};

export default function PageList(props: { pageType: string }) {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    fetchPages(props.pageType).then((pages: Page[]) => setPages(pages || []));
  }, []);

  const urlPrefix =
    props.pageType === "project" ? "/personal-projects" : "/articles";

  return (
    <div>
      <div className="articles-list">
        {pages.map((page) => (
          <div key={page.id} className="article-div" data-testid="article-div">
            <h3 className="article-link">
              <Link href={`${urlPrefix}/${page.url}`}>{page.title}</Link>
            </h3>
            <p className="article-description">{page.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
