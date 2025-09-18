import { useContext } from 'react';
import Header from './Header.js';
import { ThemeContext } from '../store/ThemeContextProvider.js';
export default function Page() {
    const themeCtx=useContext(ThemeContext);
  return (
     // <ThemeContextProvider>
    <div id="app" className={themeCtx.theme}>
<Header/>
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
   // </ThemeContextProvider>
  );
}
