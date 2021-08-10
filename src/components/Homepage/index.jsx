import React from "react";
import { DirectoryMenu, HomepageWrapper, MenuItem } from "./Homepage.styles";

const Homepage = () => {
  return (
    <HomepageWrapper>
      <DirectoryMenu>
        <MenuItem>
          <div>
            <h1>HATS</h1>
            <span>SHOP NOW</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <h1>JACKETS</h1>
            <span>SHOP NOW</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <h1>SNEAKERS</h1>
            <span>SHOP NOW</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <h1>WOMENS</h1>
            <span>SHOP NOW</span>
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <h1>WOMENS</h1>
            <span>SHOP NOW</span>
          </div>
        </MenuItem>
      </DirectoryMenu>
    </HomepageWrapper>
  );
};

export default Homepage;
