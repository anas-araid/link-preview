import styled, { keyframes } from "styled-components";

const LoadingSkeletonKeyframe = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const LoadingSkeleton = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${LoadingSkeletonKeyframe};
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  border: 0px;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100%;
`;

export default LoadingSkeleton;