import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { styled } from "styled-components";
import { PostProps } from "~/components/Post";
import { client } from "~/lib/apollo";
import {
  BreadcrumbContainerDiv,
  BreadcrumbSpan,
  CenteredDiv,
  FlexColumnDiv,
  SubduedP,
  DateP,
} from "~/styles/styles";
import moment from "moment";
import { gql } from "@apollo/client";

export const handle = {
  breadcrumb: () => (
    <BreadcrumbContainerDiv>
      <SubduedP>
        <Link to="/">Home</Link>
        {" > "}
        <BreadcrumbSpan>Blog</BreadcrumbSpan>
      </SubduedP>
    </BreadcrumbContainerDiv>
  ),
};

export async function loader() {
  const PostsQuery = gql`
    query GetPosts {
      posts(where: { categoryName: "blog" }) {
        nodes {
          title
          content
          id
          date
          isSticky
          slug
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: PostsQuery,
  });

  const blogPosts = response?.data?.posts?.nodes.map((blog: any) => {
    const date = moment(blog.date);

    return {
      image: blog.featuredImage.node.sourceUrl,
      title: blog.title,
      slug: blog.slug,
      isSticky: blog.isSticky,
      postType: blog.category,
      date: date.format("MMMM Do YYYY"),
      description: blog.content.replace(/<[^>]+>/g, ""),
    };
  });

  return { blogPosts };
}

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 20px;
  gap: 30px;
  margin-top: 50px;
  flex-direction: column;

  @media (max-width: 499px) {
    margin-top: 30px;
    gap: 20px;
  }
`;

const BlogImg = styled.img`
  max-width: 300px;
  border-radius: var(--border-radius);

  @media (max-width: 499px) {
    width: 200px;
  }
`;

const BlogTitle = styled.h1`
  font-size: var(--font-size-large);
  max-width: 400px;

  @media (max-width: 499px) {
    font-size: var(--font-size-medium);
  }
`;

export default function Index() {
  const { blogPosts } = useLoaderData();
  return (
    <ContainerDiv>
      {blogPosts.map((post: PostProps) => (
        <CenteredDiv
          gap="20px"
          style={{
            borderBottom: "1px solid var(--text-color)",
            paddingBottom: "30px",
          }}
        >
          <BlogImg src={post.image} />
          <FlexColumnDiv align="flex-start" gap="20px">
            <DateP>{post.date}</DateP>
            <Link prefetch="render" to={`/posts/${post.slug}`}>
              <BlogTitle>{post.title}</BlogTitle>
            </Link>
          </FlexColumnDiv>
        </CenteredDiv>
      ))}
    </ContainerDiv>
  );
}
