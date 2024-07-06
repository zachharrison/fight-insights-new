import { Link } from "@remix-run/react";
import React from "react";
import { styled } from "styled-components";
import {
  FlexColumnDiv,
  ProductContainerDiv,
  ProductImage,
} from "~/styles/styles";

export type ReviewProps = {
  imageUrl: string;
  title: string;
  slug: string;
  date: string;
  isPreview?: boolean;
};

export const Review = ({
  title,
  imageUrl,
  slug,
  date,
  isPreview,
}: ReviewProps) => {
  return (
    <Link className="link-style-none" prefetch="render" to={`/reviews/${slug}`}>
      <ProductContainerDiv>
        <ProductImage src={imageUrl} />
        <h1>{title}</h1>
      </ProductContainerDiv>
    </Link>
  );
};
