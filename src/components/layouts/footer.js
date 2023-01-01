/* eslint-disable */

import React from "react";

let getCopyrightText = `© ${new Date().getFullYear()} | all rights reserved`;

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="container-footer">
        <div className="heading">social media presence</div>
        <ul className="unordered list-inline">
          <li>
            <a
              className="link"
              target="_blank"
              href="https://github.com/gautam-balamurali"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/gautam-balamurali"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://twitter.com/codewithash"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
        <div id="copyrt-txt">{getCopyrightText}</div>
      </div>
    </footer>
  );
}

export default Footer;
