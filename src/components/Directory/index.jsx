import React from "react";
import { useSelector } from "react-redux";
import { selectDirectory } from "../../redux/directory/selectors";
import MenuItem from "../MenuItem";
import { DirectoryMenu } from "./Directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectory);

  return (
    <DirectoryMenu>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
