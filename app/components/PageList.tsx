"use client";

import Link from "next/link";
import { Schema } from "@/amplify/data/resource";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

type Page = {
  id: string;
  title: string;
  description: string;
  pageType: string;
  url: string;
};

export default function PageList(props: { pageType: string }) {
  const [pages, setPages] = useState<Page[]>([]);

  const fetchPages = async () => {
    try {
      const { data: items, errors } = await client.models.Page.list({
        selectionSet: ["id", "title", "description", "pageType", "url"],
        filter: { pageType: { eq: props.pageType } },
      });

      if (errors) {
        console.error("Errors fetching pages:", errors);
        return;
      }

      setPages(items);
    } catch (err) {
      console.error("Exception fetching pages:", err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div>
      <div className="articles-list">
        {pages.map((page) => (
          <div key={page.id} className="article-div" data-testid="article-div">
            <h3 className="article-link">
              <Link href={`${page.url}`}>{page.title}</Link>
            </h3>
            <p className="article-description">{page.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
