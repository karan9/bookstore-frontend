import React from "react";
import ProductCard from "../ProductCard";
import { Grid } from "semantic-ui-react";

function ProductList({ data, ...props }) {
  return (
    <Grid>
      {data.map(book => {
        return (
          <Grid.Column width="4">
            <ProductCard key={book._id} book={book} />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default ProductList;
