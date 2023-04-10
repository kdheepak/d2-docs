import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { splitNavbarItems } from "@docusaurus/theme-common/internal";

import NavbarSearch from "@theme/Navbar/Search";
import SearchBar from "@theme/SearchBar";
import NavbarItem from "@theme/NavbarItem";

import "./footer.scss";

function Footer() {
  const navbarItems = useThemeConfig().navbar.items;
  const [links, rightItems] = splitNavbarItems(navbarItems);

  const icons = rightItems.filter((i) => i.type === "custom-iconLink");
  const playground = rightItems.find((i) => i.label === "Playground");
  return (
    <footer className="Footer">
      <img className="Footer__Logo" src="/img/d2_logo.png" />
      <div className="Footer__Right">
        <a className="Footer__Link" href="https://terrastruct.com">
        <span>
          Created by <img src="/img/terrastruct_logo.svg" />
        </span>
        </a>
        |<span>© 2023 Terrastruct, Inc.</span>
      </div>
      <div className="Footer__Mobile">
        <div className="Footer__Mobile--Bar">
          <div className="Footer__Mobile--Top">
            <div className="Footer__Mobile--Links">
              {links.map((item, i) => (
                <NavbarItem key={i} {...item} />
              ))}
            </div>
            <div className="Footer__Mobile--Icons">
              {icons.map((item, i) => (
                <NavbarItem key={i} {...item} />
              ))}
            </div>
          </div>
          <div className="Footer__Mobile--Bottom">
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
            <NavbarItem {...playground} className="Footer__Mobile--Playground" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
