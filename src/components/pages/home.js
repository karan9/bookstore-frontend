import React, { useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import Layout from "../Layout";
import ProductCard from "../ProductCard";
import Searchbar from "../Searchbar";
export default function Index(params) {
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
          <Searchbar />
        </div>
        <Divider />
        <ProductCard></ProductCard>
      </Layout>
    </div>
  );
}
