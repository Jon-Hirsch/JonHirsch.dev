import Link from "next/link";

export function ReactTutorialNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/articles/react-part-1-npm-and-webpack">
            Part 1: NPM and Webpack
          </Link>
        </li>
        <li>
          <Link href="/articles/react-part-2-babel-jsx-and-react">
            Part 2: Babel, JSX, and React
          </Link>
        </li>
        <li>
          <Link href="/articles/react-part-3-components-and-css">
            Part 3: Components and CSS
          </Link>
        </li>
        <li>
          <Link href="/articles/react-part-4-props">Part 4: Props</Link>
        </li>
        <li>
          <ul>
            <li>
              <Link href="/articles/react-part-4-exercise-1">Exercise 1</Link>
            </li>
            <li>
              <Link href="/articles/react-part-4-exercise-2">Exercise 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/articles/react-part-5-state">Part 5: State</Link>
        </li>
        <li>
          <ul>
            <li>
              <Link href="/articles/react-part-5-exercise-1">Exercise 1</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
