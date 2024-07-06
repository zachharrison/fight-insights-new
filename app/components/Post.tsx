import { Link } from "@remix-run/react";
import {
  DateP,
  DescriptionP,
  FlexColumnDiv,
  FlexStartDiv,
  SpaceBetweenDiv,
  TitleH1,
} from "../styles/styles";
import { styled } from "styled-components";
import moment from "moment";

export type PostProps = {
  fullWidth?: boolean;
  image: string;
  title: string;
  slug: string;
  postType: "review" | "blog";
  date: string | number;
  description: any;
};

//TODO REMOVE INLINE STYLING

const Image = styled.img`
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  // max-width: 450px;
  height: 320px;

  @media (max-width: 499px) {
    max-height: 200px;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  max-height: 320px;
  border-radius: 20px;
  object-fit: cover;
  @media (max-width: 499px) {
    width: 100%;
  }
`;

const TitleH3 = styled.h3`
  color: var(--text-color);
  font-weight: bold;
  font-size: var(--font-size-large);
  text-decoration: none;
`;

const CardContainerDiv = styled(FlexColumnDiv)`
  // padding: 20px;
  // border-radius: 20px;

  // box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);
  // cursor: pointer;
`;

const truncate = (description: string) => {
  return description.length > 80
    ? description.substring(0, 80) + "..."
    : description;
};

const FullWidthView = (post: PostProps) => {
  return (
    <SpaceBetweenDiv
      className="mobile-column"
      gap="var(--page-gap)"
      style={{
        margin: "auto",
      }}
    >
      <FullWidthImage src={post.image} />
      <FlexColumnDiv style={{ maxWidth: "500px" }} gap="15px">
        <Link
          prefetch="render"
          to={`/posts/${post.slug}`}
          className="full-width-post-title"
        >
          <TitleH1>{post.title}</TitleH1>
        </Link>
        <DescriptionP
          fontSize="var(--font-size-small)"
          style={{ maxWidth: "400px" }}
        >
          {truncate(post.description)}
        </DescriptionP>
        <DateP>{moment(post.date).format("MMMM Do YYYY")}</DateP>
      </FlexColumnDiv>
    </SpaceBetweenDiv>
  );
};

export default function Post(post: PostProps) {
  return post.fullWidth ? (
    <FullWidthView {...post} />
  ) : (
    <CardContainerDiv gap="10px">
      <Image src={post.image} style={{ width: "100%" }} />
      <Link prefetch="render" to={`/posts/${post.slug}`}>
        <TitleH3>{post.title}</TitleH3>
      </Link>
      <DescriptionP
        fontSize="var(--font-size-small)"
        style={{ maxWidth: "75%" }}
      >
        {truncate(post.description)}
      </DescriptionP>
    </CardContainerDiv>
  );
}
