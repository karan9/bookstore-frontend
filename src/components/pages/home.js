import React, { useState, useEffect } from "react";
import { Divider, Header } from "semantic-ui-react";
import qs from "qs";

import Layout from "../Layout";
import Searchbar from "../Searchbar";
import ProductList from "../ProductList";

export default function Index(params) {
  const [name, setQuery] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [cards, setCards] = useState([]);

  function resetState() {
    setQuery("");
    setAuthor("");
    setCategory("");
    getDataFromSearch();
  }

  async function getDataFromSearch() {
    console.log("Function Called", name, author, category);
    const res = await fetch(
      `http://localhost:5000/books?${qs.stringify({
        name: name,
        author: author,
        category: category
      })}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).catch(e => console.error(e));

    if (!res) {
      alert("Error: Unable to send request!");
      return;
    }

    const data = await res.json().catch(e => console.error(e));
    setCards(data);
  }

  useEffect(() => {
    getDataFromSearch();
  }, []);

  return (
    <div>
      <Layout>
        <Header
          as="h2"
          content="Book Store"
          subheader="Find the book you love!"
        />
        <Divider />
        <div>
          <Searchbar
            name={name}
            category={category}
            author={author}
            onSearch={getDataFromSearch}
            onNameChange={setQuery}
            onAuthorChange={setAuthor}
            onCategoryChange={setCategory}
            onResetSearch={resetState}
          />
        </div>
        <Divider />
        <ProductList data={cards} />
      </Layout>
    </div>
  );
}
