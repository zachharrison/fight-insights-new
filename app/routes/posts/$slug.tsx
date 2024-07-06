import { Link, useLoaderData } from "@remix-run/react";
import { client } from "../../lib/apollo";
import {
  TitleH1,
  ArticleContainer,
  ArticleImage,
  BreadcrumbContainerDiv,
  BreadcrumbSpan,
  SubduedP,
} from "../../styles/styles";
import { styled } from "styled-components";
import { gql } from "@apollo/client";

export const handle = {
  breadcrumb: ({ params }: any) => (
    <BreadcrumbContainerDiv>
      <SubduedP>
        <Link to="/">Home</Link>
        {" > "}
        <Link to="/posts">Blog</Link>
        {" > "}
        <BreadcrumbSpan>{params.slug}</BreadcrumbSpan>
      </SubduedP>
    </BreadcrumbContainerDiv>
  ),
};

export async function loader({ params }: any) {
  const slug = params.slug;
  const PostQuery = gql`
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        categories {
          nodes {
            name
          }
        }
        date
        slug
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
    query: PostQuery,
    variables: {
      id: slug,
    },
  });

  const post = response?.data?.post;
  return {
    ...post,
    image: post.featuredImage.node.sourceUrl,
    postType: post.categories.nodes.name,
  };
}

const ArticleH1 = styled(TitleH1)`
  max-width: 80%;
  margin: auto;

  @media (max-width: 499px) {
    max-width: 100%;
  }
`;

export default function Slug() {
  const post = useLoaderData();
  return (
    <ArticleContainer>
      <ArticleH1>{post.title}</ArticleH1>
      <ArticleImage src={post.image} />

      <div
        className="text-article"
        style={{ margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </ArticleContainer>
  );
}
