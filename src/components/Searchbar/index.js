import React from "react";
import { Grid, Input, Select, Button } from "semantic-ui-react";

const options = [
  { key: "f", text: "Fiction", value: "fiction" },
  { key: "n", text: "Novel", value: "novel" },
  { key: "o", text: "Others", value: "other" }
];

export default function({
  name,
  author,
  category,
  onNameChange,
  onAuthorChange,
  onCategoryChange,
  onSearch,
  onResetSearch,
  ...props
}) {
  return (
    <div>
      <Grid>
        <Grid.Column width="3">
          <Input
            icon="bookmark"
            placeholder="Search by name"
            value={name}
            onChange={(e, { value }) => onNameChange(value)}
          />
        </Grid.Column>
        <Grid.Column width="3">
          <Input
            icon="user"
            placeholder="Search by author"
            value={author}
            onChange={(e, { value }) => onAuthorChange(value)}
          />
        </Grid.Column>
        <Grid.Column width="3">
          <Select
            placeholder="Select Category"
            options={options}
            value={category}
            onChange={(e, { value }) => onCategoryChange(value)}
          />
        </Grid.Column>
        <Grid.Column width="3">
          <Button content="Search" onClick={onSearch} primary icon="search" />
        </Grid.Column>
        <Grid.Column width="3">
          <Button
            content="Clear Search"
            onClick={onResetSearch}
            secondary
            icon="times"
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
