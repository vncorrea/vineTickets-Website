import React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";

export function HeaderMenu() {
    return (
        <Dropdown>
            <MenuButton>My account</MenuButton>
            <Menu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Language settings</MenuItem>
                <MenuItem>Log out</MenuItem>
            </Menu>
        </Dropdown>
    );
}
