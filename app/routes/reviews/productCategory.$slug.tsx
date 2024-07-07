import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { Review } from "~/components/ReviewCardView";
import { client } from "~/lib/apollo";
// import {
//   ArticleContainer,
//   ArticleImage,
//   BreadcrumbContainerDiv,
//   BreadcrumbSpan,
//   FlexStartDiv,
//   SubduedP,
//   TitleH1,
// } from "~/styles/styles";
import { gql } from "@apollo/client";

// export const handle = {
//   breadcrumb: ({ params }: any) => (
//     <BreadcrumbContainerDiv>
//       <SubduedP>
//         <Link to="/">Home</Link>
//         {" > "}
//         <Link to="/reviews">Reviews</Link>
//         {" > "}
//         <BreadcrumbSpan>{params.slug}</BreadcrumbSpan>
//       </SubduedP>
//     </BreadcrumbContainerDiv>
//   ),
// };

export async function loader({ params }: any) {
  // const slug = params.slug;
  // const ReviewQuery = gql`
  //   query GetReviewBySlug($id: ID!) {
  //     review(id: $id, idType: SLUG) {
  //       title
  //       content
  //       score
  //       date
  //       productCategory
  //       featuredImage {
  //         node {
  //           id
  //           sourceUrl
  //         }
  //       }
  //     }
  //   }
  // `;
  // const response = await client.query({
  //   query: ReviewQuery,
  //   variables: {
  //     id: slug,
  //   },
  // });
  // const review = response?.data?.review;
  // return {
  //   ...review,
  //   imageUrl: review.featuredImage.node.sourceUrl,
  // };
  return { number: 123 };
}

export default function Slug() {
  return <div>test</div>;
}
