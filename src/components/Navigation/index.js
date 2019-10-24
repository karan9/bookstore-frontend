import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default props => {
  const [activeItem, setActiveItem] = useState("home");
  const history = useHistory();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu size="small">
      <Menu.Item
        as={Link}
        to="/"
        name="Home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Button onClick={() => history.push(`/add`)} primary>
            Add Book
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
