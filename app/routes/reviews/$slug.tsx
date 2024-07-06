import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { styled } from "styled-components";
import { Rating } from "~/components/Rating";
import { Review } from "~/components/ReviewCardView";
import { client } from "~/lib/apollo";
import {
  ArticleContainer,
  ArticleImage,
  BreadcrumbContainerDiv,
  BreadcrumbSpan,
  CenteredDiv,
  DescriptionP,
  FlexColumnDiv,
  FlexStartDiv,
  ProductImage,
  SpaceBetweenDiv,
  SubduedP,
  TitleH1,
} from "~/styles/styles";

import { gql } from "@apollo/client";

export const handle = {
  breadcrumb: ({ params }: any) => (
    <BreadcrumbContainerDiv>
      <SubduedP>
        <Link to="/">Home</Link>
        {" > "}
        <Link to="/reviews">Reviews</Link>
        {" > "}
        <BreadcrumbSpan>{params.slug}</BreadcrumbSpan>
      </SubduedP>
    </BreadcrumbContainerDiv>
  ),
};
export async function loader({ params }: any) {
  const slug = params.slug;

  const ReviewQuery = gql`
    query GetReviewBySlug($id: ID!) {
      review(id: $id, idType: SLUG) {
        title
        content
        score
        date
        productCategory
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: ReviewQuery,
    variables: {
      id: slug,
    },
  });

  const review = response?.data?.review;
  return {
    ...review,
    imageUrl: review.featuredImage.node.sourceUrl,
  };
}

const TopCardContainer = styled.div`
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);
  background: var(--gradient);
  padding: var(--padding-large) var(--padding-medium);
  text-align: center;
  align-items: center;
  gap: var(--small-gap);
  width: 70%;
  margin: auto;

  & a,
  &,
  h1 {
    font-size: var(--font-size-regular);
  }
`;

const ProConsCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background: var(--card-background-color);
  color: var(--text-dark);
  padding: 30px var(--padding-medium);
  text-align: center;
  align-items: center;
  gap: 15px;
  min-width: 100%;
  width: 100%;
  margin: auto;

  & a,
  &,
  h1 {
    font-size: var(--font-size-regular);
  }
`;

const ProConHeader = styled(TitleH1)`
  margin: auto;
  font-size: var(--font-size-regular);
`;

const GridContainer = styled(CenteredDiv)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  width: 70%;
  gap: 10px;
  height: 100%;

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 80%;

  height: 100%;
`;

const Icon = styled.img`
  height: 20px;
`;

export default function Slug() {
  const review = useLoaderData();

  return (
    <ArticleContainer>
      <TopCardContainer>
        <FlexColumnDiv gap="40px">
          <TitleH1 style={{ margin: "auto" }}>{review.title}</TitleH1>
          <SpaceBetweenDiv align="center">
            <FlexColumnDiv align="center" gap="20px" width="50%">
              <Image src={review.imageUrl} />
            </FlexColumnDiv>
            <FlexColumnDiv align="center" gap="20px" width="50%">
              <Rating score={review.score} />
            </FlexColumnDiv>
          </SpaceBetweenDiv>
        </FlexColumnDiv>
      </TopCardContainer>
      <GridContainer>
        <FlexColumnDiv gap="var(--small-gap)">
          <ProConHeader>Pros</ProConHeader>
          <ProConsCard>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/checkmark.svg" />
              <DescriptionP textAlign="left">Very comfortable fit</DescriptionP>
            </FlexStartDiv>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/checkmark.svg" />
              <DescriptionP textAlign="left">Great price</DescriptionP>
            </FlexStartDiv>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/checkmark.svg" />
              <DescriptionP textAlign="left">
                Great for work on the bag, as well as the pads
              </DescriptionP>
            </FlexStartDiv>
          </ProConsCard>
        </FlexColumnDiv>
        <FlexColumnDiv gap="var(--small-gap)">
          <ProConHeader>Cons</ProConHeader>
          <ProConsCard>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/x.svg" />
              <DescriptionP textAlign="left">
                Don't come in ounces for sizing
              </DescriptionP>
            </FlexStartDiv>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/x.svg" />
              <DescriptionP textAlign="left">Great price</DescriptionP>
            </FlexStartDiv>
            <FlexStartDiv gap="var(--small-gap)">
              <Icon src="/x.svg" />
              <DescriptionP textAlign="left">
                Great for work on the bag, as well as the pads
              </DescriptionP>
            </FlexStartDiv>
          </ProConsCard>
        </FlexColumnDiv>
      </GridContainer>
      <div
        className="text-article"
        style={{ margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: review.content }}
      />
    </ArticleContainer>
  );
}
