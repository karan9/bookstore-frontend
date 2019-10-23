import React, { useState } from "react";
import Layout from "../Layout";
import ProductForm from "../ProductForm";
import { useParams } from "react-router-dom";

export default function Index(params) {
  const { id } = useParams();

  return (
    <div>
      <Layout>
        <ProductForm id={id} />
      </Layout>
    </div>
  );
}
