"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!isScrolled && window.scrollY > 35) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY <= 35) {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <div
        className={isScrolled ? "page-header scrolled" : "page-header"}
        data-testid="page-header"
      >
        <Link className="home-link" href="/">
          jonhirsch.dev
        </Link>
        <div className="navigation">
          <Link href="/">Home</Link>
          <Link href="/personal-projects">Personal Projects</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/search">Search</Link>
        </div>
        <button
          className="nav-hamburger"
          aria-label="open navigation menu"
          data-testid="nav-button"
          onClick={() => setShowMenu(true)}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
      <CSSTransition
        in={showMenu}
        classNames="menu-transition"
        timeout={400}
        mountOnEnter={true}
        unmountOnExit={true}
        nodeRef={menuRef}
      >
        {/* disable a11y warnings on this line. The close button is included to handle a11y navigation */}
        {/* eslint-disable-next-line */}
        <div
          className="menu-overlay"
          onClick={() => setShowMenu(false)}
          ref={menuRef}
        >
          <div className="close-menu-button-container">
            <button
              className="close-menu-button"
              data-testid="close-menu-button"
              aria-label="close navigation menu"
              onClick={() => setShowMenu(false)}
            >
              <div className="close-button-line"></div>
              <div className="close-button-line"></div>
            </button>
          </div>
          <div className="menu-links" data-testid="menu-links">
            <Link href="/">Home</Link>
            <Link href="/personal-projects">Personal Projects</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/search">Search</Link>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
