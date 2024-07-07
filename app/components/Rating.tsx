import React from "react";
// import { styled } from "styled-components";
// import { DescriptionP } from "~/styles/styles";

type RatingProps = {
  score: number;
};

/*

const ContainerDiv = styled.div<{ score: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white-color);
  border-radius: var(--border-radius);
  gap: var(--small-gap);
  position: relative;

  & circle {
    fill: none;
    stroke: var(--primary-color);
    stroke-width: 20px;
  }

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    stroke-dasharray: 450;
    stroke-dashoffset: calc(450 - 450 * ${(props) => props.score});
  }
`;

const OuterCircle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: var(--padding-medium);
  // border: 1px solid var(--primary-color);
  box-shadow: 6px 6px 10px -1px black,
    -6px -6px 10px -1px var(--primary-dark-color);
`;
const InnerCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 1px 1px 11px -1px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

*/

export const Rating = ({ score }: RatingProps) => {
  return (
    // <ContainerDiv score={score}>
    //   <OuterCircle>
    //     <InnerCircle>
    //       <DescriptionP>{Math.ceil(score * 10)}</DescriptionP>
    //     </InnerCircle>
    //   </OuterCircle>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     version="1.1"
    //     width="160px"
    //     height="160px"
    //   >
    //     <defs>
    //       <linearGradient id="GradientColor">
    //         <stop offset="0%" stopColor="#DA22FF" />
    //         <stop offset="100%" stopColor="#9733EE" />
    //       </linearGradient>
    //     </defs>
    //     <circle cx="80" cy="80" r="70" strokeLinecap="round" />
    //   </svg>
    // </ContainerDiv>

    <div>
      {score}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </div>
  );
};
