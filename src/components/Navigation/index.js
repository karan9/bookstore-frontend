import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="small">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/edit/jndjndjsandkjsa"
          name="edit"
          active={activeItem === "edit"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Add Book</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
