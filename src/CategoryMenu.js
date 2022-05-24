import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { PRIMARY_GREEN } from "./StyledComponents";

export default function CategoryMenu({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <MenuList>
        <MenuItem
          onClick={() => setSelectedCategory("all")}
          key="all"
          disableGutters
          dense
          disableRipple
        >
          <ListItemText sx={selectedCategory === "all" ? {color: PRIMARY_GREEN} : {}}>All Jobs</ListItemText>
        </MenuItem>
      {categories.map((category) => (
        <MenuItem
          onClick={() => setSelectedCategory(category)}
          key={category}
          disableGutters
          dense
          disableRipple
        >
          <ListItemText sx={category === selectedCategory ? {color: PRIMARY_GREEN} : {}}>{category}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
