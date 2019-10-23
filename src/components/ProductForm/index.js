import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  TextArea,
  Header
} from "semantic-ui-react";

const options = [
  { key: "f", text: "Fiction", value: "fiction" },
  { key: "n", text: "Novel", value: "novel" },
  { key: "o", text: "Others", value: "other" }
];

function ProductForm(props) {
  /**
   * Base State
   */
  const [name, onNameChange] = useState("");
  const [category, onCategoryChange] = useState("");
  const [author, onAuthorChange] = useState("");
  const [desc, onDescChange] = useState("");

  // useEffect(() => {
  //   onNameChange("Harry Potter");
  //   onCategoryChange("novel");
  //   onAuthorChange("JK Rowling");
  //   onDescChange("Just some random book");
  // }, []);

  return (
    <>
      <Header as="h2">
        Edit Book
        <Header.Subheader>
          Manage your book details and preferences.
        </Header.Subheader>
      </Header>
      <Form onSubmit={() => alert("Submitted Bro")}>
        <Form.Group widths="equal">
          <Form.Field
            value={name}
            onChange={(e, { value }) => onNameChange(value)}
            control={Input}
            label="Book Name"
            placeholder="Enter Book name"
          />
          <Form.Field
            value={author}
            onChange={(e, { value }) => onAuthorChange(value)}
            control={Input}
            label="Author"
            placeholder="Enter Author's Name"
          />
          <Form.Field
            value={category}
            onChange={(e, { value }) => onCategoryChange(value)}
            control={Select}
            label="Category"
            options={options}
            placeholder="Category"
          />
        </Form.Group>
        <Form.Field
          value={desc}
          onChange={(e, { value }) => onDescChange(value)}
          control={TextArea}
          label="Description"
          placeholder="Tell us about your book"
        />
        <Form.Field type={"submit"} control={Button}>
          Submit
        </Form.Field>
      </Form>
    </>
  );
}

export default ProductForm;
