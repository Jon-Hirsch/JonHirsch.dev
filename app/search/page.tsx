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

export default function SearchPage() {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    fetchPages().then((pages: Page[]) => setPages(pages || []));
  }, []);

  const [category, setCategory] = useState("all");
  const [name, setName] = useState("");
  const [order, setOrder] = useState("asc");

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleOrderChange(e) {
    setOrder(e.target.value);
  }

  const filteredPages = filterNodes(pages, category, name, order);

  return (
    <div>
      <h2 className="search-options-header">Search Options</h2>
      <div className="search-options">
        <div className="option-div">
          <h4>Category</h4>
          <div>
            <label>
              <input
                type="radio"
                value="all"
                name="category"
                checked={category === "all"}
                onChange={handleCategoryChange}
              />
              All
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="article"
                name="category"
                checked={category === "article"}
                onChange={handleCategoryChange}
              />
              Articles
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="project"
                name="category"
                checked={category === "project"}
                onChange={handleCategoryChange}
              />
              Personal Projects
            </label>
          </div>
        </div>
        <div className="option-div">
          <h4>Article Name</h4>
          <label>
            Name: <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div className="option-div">
          <h4>Result Order</h4>
          <div>
            <label>
              <input
                type="radio"
                value="asc"
                name="order"
                checked={order === "asc"}
                onChange={handleOrderChange}
              />
              Ascending
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="desc"
                name="order"
                checked={order === "desc"}
                onChange={handleOrderChange}
              />
              Descending
            </label>
          </div>
        </div>
      </div>
      <div className="articles-list">
        {filteredPages.map((page) => (
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

function filterNodes(
  pages: Page[],
  category: string,
  name: string,
  order: string,
): Page[] {
  let filteredPages = [...pages];

  if (category !== "all") {
    filteredPages = filteredPages.filter((page) => page.pageType === category);
  }

  if (name !== "") {
    filteredPages = filteredPages.filter((page) =>
      page.title.toLowerCase().includes(name.toLowerCase()),
    );
  }

  if (order === "desc") {
    filteredPages = filteredPages.reverse();
  }

  return filteredPages;
}
