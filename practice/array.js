import React from 'react';
import ReactDOM from 'react-dom';

// Single JSX element
const intro = <h1>Hello Website Development!</h1>;

// Array of JSX elements
let content = [<p key="i1">This is a paragraph.</p>,
  <p key="i2">This is another paragraph.</p>,
  <h2 key="i3">I can put anything here.</h2>,
  <footer key="i4"><p>Final paragraph.</p></footer>]

ReactDOM.render(<section>{intro}{content}</section>,
  document.getElementById('root'));