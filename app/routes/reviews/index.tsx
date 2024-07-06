import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { styled } from "styled-components";
import {
  BreadcrumbContainerDiv,
  BreadcrumbSpan,
  CenteredDiv,
  DescriptionP,
  FlexStartDiv,
  ProductContainerDiv,
  ProductImage,
  SubduedP,
} from "~/styles/styles";

export const handle = {
  breadcrumb: () => (
    <BreadcrumbContainerDiv>
      <SubduedP>
        <Link to="/">Home</Link>
        {" > "}
        <BreadcrumbSpan>Reviews</BreadcrumbSpan>
      </SubduedP>
    </BreadcrumbContainerDiv>
  ),
};

type ProductCategory = {
  key: "boxingShoes" | "gloves" | "accessories";
  title: string;
  imageUrl: string;
  description: string;
};
export async function loader() {
  const productCategories = [
    {
      key: "boxingShoes",
      title: "Boxing Shoes",
      imageUrl: "hayabusa-shoes.png",
      description: "A list of all of our boxing shoes",
    },
    {
      key: "gloves",
      title: "Gloves",
      imageUrl: "/hayabusa-boxing-gloves.png",
      description: "A list of all of our gloves, from MMA to boxing.",
    },
    {
      key: "accessories",
      title: "Accessories",
      imageUrl: "/rdx-handwrap.png",
      description: "A list of all of our accessories",
    },
  ];
  return { productCategories };
}

export default function Index() {
  const { productCategories } = useLoaderData();
  return (
    <CenteredDiv gap="20px" padding="var(--padding-large) 0px">
      {productCategories.map((category: ProductCategory) => (
        <Link
          className="link-style-none"
          prefetch="render"
          to={`/reviews/productCategory/${category.key}`}
        >
          <ProductContainerDiv>
            <ProductImage src={category.imageUrl} />
            <h1>{category.title}</h1>
          </ProductContainerDiv>
        </Link>
      ))}
    </CenteredDiv>
  );
}
