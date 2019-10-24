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

function ProductForm({ id, ...props }) {
  /**
   * Base State
   */
  const [name, onNameChange] = useState("");
  const [category, onCategoryChange] = useState("");
  const [author, onAuthorChange] = useState("");
  const [desc, onDescChange] = useState("");

  useEffect(() => {
    async function fetchData(params) {
      const res = await fetch(`http://localhost:5000/books/${id}`);
      if (res.ok) {
        const data = await res.json();
        console.log("Edit Data", data);

        onNameChange(data.name);
        onCategoryChange(data.category);
        onAuthorChange(data.author);
        onDescChange(data.description);
      }
    }

    if (id) {
      fetchData();
    }
  }, []);

  async function onEditSubmit() {
    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          category: category,
          author: author,
          description: desc
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      if (res.ok) {
        window.location.pathname = "/";
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onSaveSubmit(params) {
    try {
      const res = await fetch(`http://localhost:5000/books`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          category: category,
          author: author,
          description: desc
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.ok) {
        window.location.pathname = "/";
      }
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmit() {
    if (!name || !author || !category || !desc) {
      alert("Please fill all the fields");
      return;
    }

    if (id) {
      onEditSubmit();
    } else {
      onSaveSubmit();
    }
  }

  return (
    <>
      <Header as="h2">
        {id ? "Edit Book" : "Add Book"}
        <Header.Subheader>
          {id
            ? "Manage your book details and preferences."
            : "Add the book to your store"}
        </Header.Subheader>
      </Header>
      <Form onSubmit={onSubmit}>
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
