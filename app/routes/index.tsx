import Post from "../components/Post";
import Header from "../components/Header";
import { useLoaderData } from "@remix-run/react";

import { client } from "../lib/apollo";
import {
  CenteredDiv,
  FlexColumnDiv,
  TitleH1,
  TwoColGrid,
} from "~/styles/styles";
import { styled } from "styled-components";
import { PostProps } from "../components/Post";
import { Review, ReviewProps } from "~/components/ReviewCardView";

import { gql } from "@apollo/client";

export async function loader() {
  const BlogPostsQuery = gql`
    query GetPosts {
      posts(first: 4, where: { categoryName: "blog" }) {
        nodes {
          title
          content
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

  const ReviewsQuery = gql`
    query Reviews {
      reviews(first: 3) {
        edges {
          node {
            id
            title
            score
            slug
            date
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;
  const blogResponse = await client.query({
    query: BlogPostsQuery,
  });

  const reviewResponse = await client.query({
    query: ReviewsQuery,
  });

  const blogPosts = blogResponse?.data?.posts?.nodes.map((blog: any) => {
    return {
      image: blog.featuredImage.node.sourceUrl,
      title: blog.title,
      slug: blog.slug,
      isSticky: blog.isSticky,
      postType: blog.category,
      date: blog.date,
      description: blog.content.replace(/<[^>]+>/g, ""),
    };
  });
  const reviews = reviewResponse?.data?.reviews?.edges.map((review: any) => {
    return {
      imageUrl: review.node.featuredImage.node.sourceUrl,
      title: review.node.title,
      slug: review.node.slug,
      date: review.node.date,
    };
  });

  return { blogPosts, reviews };
}

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  gap: 100px;
  padding: 30px 50px;
  max-width: 1000px;
  height: 100%;
  @media (max-width: 499px) {
    padding: 0px 20px;
    gap: 50px;
  }
`;

const GridContainerDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ReviewContainerDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1065px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 399px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Index() {
  const { blogPosts, reviews } = useLoaderData();
  const mostRecentBlogPost = blogPosts[0];

  const post: PostProps = {
    fullWidth: false,
    image:
      "https://i5.walmartimages.com/asr/efee937d-d6ee-4b0f-ac30-2fe583ddfdaf.9ef5bf07cc637627007174a9cca682ed.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing",
    slug: "123",
    postType: "blog",
    date: 1692428400000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi porro odit qui officia ratione voluptas cupiditate nobis tempora, vitae quisquam excepturi ducimus accusamus neque.",
  };

  const reviewTwo: PostProps = {
    fullWidth: false,
    // image: 'https://cdn.vox-cdn.com/thumbor/3EIsHSEBPTxO1bpd6h4lzGbWwQw=/0x0:704x436/1200x800/filters:focal(296x162:408x274)/cdn.vox-cdn.com/uploads/chorus_image/image/73127307/Screen_Shot_2024_02_09_at_2.34.09_PM.0.png",
    image:
      "https://cdn.vox-cdn.com/thumbor/3EIsHSEBPTxO1bpd6h4lzGbWwQw=/0x0:704x436/1200x800/filters:focal(296x162:408x274)/cdn.vox-cdn.com/uploads/chorus_image/image/73127307/Screen_Shot_2024_02_09_at_2.34.09_PM.0.png",
    title: "Sean Strickland beats up influencer.",
    slug: "123",
    postType: "blog",
    date: 1692428400000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi porro odit qui officia ratione voluptas cupiditate nobis tempora, vitae quisquam excepturi ducimus accusamus neque.",
  };

  const reviewData: ReviewProps = {
    imageUrl:
      "https://m.media-amazon.com/images/I/510VALV5kHL._SR600%2C315.jpg",
    title: "Hayabusa focus mits",
    slug: "fldjslk",
    date: "today",
  };
  return (
    <PageContainer>
      <Post {...mostRecentBlogPost} fullWidth={true} />
      <FlexColumnDiv gap="20px">
        <TitleH1>Latest Articles</TitleH1>
        <GridContainerDiv>
          <Post
            {...post}
            image="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/09/07/3780400-76897928-2560-1440.jpg"
          />
          <Post
            {...reviewTwo}
            image="https://cdn.vox-cdn.com/thumbor/Y5Dr0LWVNOjb1_nkBDCp3n1WOO8=/0x0:1080x1350/269x239/filters:focal(489x271:661x443):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72738410/386508272_18387548842006604_7783350461656217775_n.0.jpg"
          />
          <Post
            {...post}
            image="https://cdn.vox-cdn.com/thumbor/JshVrHBsDZenDUTmW6uN1lpZAy4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24129274/1435299462.jpg"
          />
        </GridContainerDiv>
      </FlexColumnDiv>

      <FlexColumnDiv
        gap="20px"
        style={{ margin: "auto", width: "fit-content" }}
      >
        <TitleH1>Reviews</TitleH1>
        <ReviewContainerDiv>
          {reviews.map((review: any) => {
            return <Review {...review} />;
          })}
          <Review {...reviewData} />
        </ReviewContainerDiv>
      </FlexColumnDiv>
    </PageContainer>
  );
}
