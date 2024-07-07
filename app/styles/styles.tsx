// import React from "react";
// import { styled } from "styled-components";
// /*
//   Central file for re-usable layout components
// **/
// export const ContainerDiv = styled.div<{
//   hasBorder?: boolean;
//   padding?: string;
//   borderRadius?: string;
//   gap?: string;
//   width?: string;
//   background?: string;
//   margin?: string;
//   align?: string;
// }>`
//   display: flex;
//   flex-direction: column;
//   gap: ${(props) => (props.gap ? props.gap : "var(--sq-spacing-large)")};
//   align-items: ${(props) => (props.align ? props.align : "normal")};
//   ${(props) => props.hasBorder && "border: 1px solid var(--sq-border);"}
//   ${(props) =>
//     props.hasBorder &&
//     props.borderRadius &&
//     `border-radius: ${props.borderRadius};`}
//   padding: ${(props) => (props.padding ? props.padding : "0")};
//   ${(props) => props.width && `width: ${props.width};`}
//   ${(props) => props.background && `background: ${props.background};`}
//   ${(props) => props.margin && `margin: ${props.margin};`}
// `;

// export const ButtonContainerDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

// export const FlexContainerDiv = styled.div<{
//   gap?: string;
//   align?: string;
//   alignSelf?: string;
//   justify?: string;
//   maxWidth?: string;
// }>`
//   display: flex;
//   align-items: ${(props) => props.align || "center"};
//   justify-content: ${(props) => props.justify || "center"};
//   align-self: ${(props) => props.alignSelf || "unset"};
//   width: 100%;
//   gap: ${(props) => (props.gap ? props.gap : "var(--sq-spacing-xx-large)")};
//   ${(props) =>
//     props.maxWidth && `width:${props.maxWidth};`}// @media (max-width: 499px) {
//   //   flex-direction: column;
//   // }
// `;

// export const FlexColumnDiv = styled.div<{
//   gap?: string;
//   align?: string;
//   justify?: string;
//   width?: string;
// }>`
//   display: flex;
//   align-items: ${(props) => props.align || "flex-start"};
//   justify-content: ${(props) => props.justify || "center"};
//   flex-direction: column;
//   ${(props) => props.gap && `gap:${props.gap};`}
//   width: ${(props) => (props.width ? props.width : "100%")};
//   height: 100%;
// `;

// export const SpaceBetweenDiv = styled(FlexContainerDiv)`
//   justify-content: space-between;
// `;

// export const TwoColGrid = styled.div`
//   display: grid;
//   gap: 40px;
//   grid-template-columns: repeat(2, 1fr);

//   @media (max-width: 630px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const TitleH1 = styled.h1`
//   margin: 0;
//   color: var(--text-color);
//   font-weight: bold;
//   font-size: var(--font-size-x-large);

//   @media (max-width: 499px) {
//     font-size: var(--font-size-large);
//   }
// `;

// export const DescriptionP = styled.p<{ fontSize?: string; textAlign?: string }>`
//   margin: 0;
//   color: var(--text-color);
//   font-weight: normal;
//   font-size: ${(props) =>
//     props.fontSize ? props.fontSize : "var(--font-size-regular)"};
//   ${(props) => props.textAlign && `text-align:${props.textAlign};`}
// `;

// export const SubduedP = styled(DescriptionP)`
//   margin: 0;
//   color: var(--text-color);
//   font-weight: normal;
//   font-size: ${(props) =>
//     props.fontSize ? props.fontSize : "var(--font-size-small)"};
// `;

// export const CenteredDiv = styled.div<{
//   gap?: string;
//   padding?: string;
// }>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   ${(props) => props.gap && `gap:${props.gap};`}
//   ${(props) => props.padding && `padding:${props.padding};`}
// `;

// export const FlexStartDiv = styled(FlexContainerDiv)`
//   justify-content: flex-start;

//   @media (max-width: 499px) {
//     gap: 10px;
//   }
// `;

// export const TableCellContainerDiv = styled.div<{
//   justify?: string;
//   minWidth?: string;
//   maxWidth?: string;
//   width?: string;
// }>`
//   display: flex;
//   padding: var(--sq-spacing-large) 0px;
//   flex: 1 1 0;
//   justify-content: ${(props) => props.justify || "flex-start"};
//   min-width: ${(props) => props.minWidth || "30px"};
//   ${(props) => props.width && `width: ${props.width};`}
//   ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
//   border: 1px solid slateblue;
// `;

// export const VerticalLineDiv = styled.div`
//   border-right: 1px solid var(--sq-border);
//   width: 0px;
//   min-height: 100%;
//   align-self: stretch;
// `;

// export const BadgeDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: var(--sq-spacing-xx-small) var(--sq-spacing-x-small);
//   border: 1px solid var(--sq-border);
//   border-radius: var(--sq-border-radius-normal);
//   color: var(--sq-text-dark);
//   font-size: var(--sq-font-size-small);
//   background: var(--sq-background);
// `;

// // Article Styles
// export const ArticleContainer = styled.div`
//   padding: 50px 0px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   margin: auto;
//   flex-direction: column;
//   gap: 50px;
//   max-width: 1200px;
//   height: 100%;

//   @media (max-width: 499px) {
//     padding: 0px 20px;
//   }
// `;

// export const ProductImage = styled.img`
//   border-radius: 20px;
//   object-fit: cover;
//   width: 80%;
//   max-height: 200px;
//   margin: auto;

//   @media (max-width: 499px) {
//     width: 100%;
//   }
// `;

// export const ArticleImage = styled.img`
//   border-radius: 20px;
//   object-fit: cover;
//   width: 80%;
//   height: 100%;
//   margin: auto;
//   max-height: 350px;
//   max-width: 750px;
//   @media (max-width: 499px) {
//     width: 100%;
//   }
// `;

// export const ProductContainerDiv = styled(FlexColumnDiv)`
//   border: 2px solid transparent;
//   border-radius: var(--border-radius);
//   box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);
//   background: var(--card-background-color);
//   padding: var(--padding-medium);
//   text-align: center;
//   align-items: center;
//   gap: var(--small-gap);
//   max-width: 250px;
//   height: 250px;

//   &:hover {
//     cursor: pointer;
//     border: 2px solid var(--primary-color);
//   }

//   & a,
//   &,
//   h1 {
//     font-size: var(--font-size-regular);
//   }
// `;

// export const BreadcrumbContainerDiv = styled(FlexStartDiv)`
//   padding: 0px var(--padding-large);

//   @media (max-width: 499px) {
//     padding: 0px 20px;
//   }
// `;

// export const BreadcrumbSpan = styled.span`
//   font-size: var(--font-size-small);
//   color: var(--primary-color);
// `;

// export const DateP = styled.p`
//   color: var(--primary-color);

//   @media (max-width: 499px) {
//     font-size: var(--font-size-x-small);
//   }
// `;
