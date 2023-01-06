import * as Tooltip from '@radix-ui/react-tooltip';
import styled, { keyframes } from "styled-components";

const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const SlideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`

const Shiny = keyframes`
  from {
    mask-position: 100%;

  }
  to {
    mask-position: 0%;
  }
`

export const Content = styled(Tooltip.Content)`
  background-color: white;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0px 9px 15px 3px rgba(0,0,0,0.09);
  animation-duration: 0.2s;
  animation-timing-function: linear;
  &.TooltipContent[data-state="delayed-open"] {
    animation-name: ${SlideUp};
  }
  &.TooltipContent[data-state="closed"] {
    animation-name: ${SlideDown};
  }
`;

export const Image = styled.img`
  border-radius: 12px;
  width: 200px;
  height: 120px;
  mask-image: linear-gradient(
    60deg,
    black 25%,
    rgba(0, 0, 0, 0.5) 50%,
    black 75%
  );
  mask-size: 400%;
  mask-position: 100%;
  animation: ${Shiny} ease 1s;
`;

export const Link = styled.a`
  display: inline-block;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  color: #000;
  line-height: 24px;
  font-size: 16px;
  &:before, &:focus {
    outline: 0;
  }

  &:hover::after {
    width: 100%
  }

  &:after {
    content: "";
    width: 0;
    height: 2px;
    background:#000;
    position: absolute;
    bottom: -2px;
    left: 0;
    -webkit-transition: width .3s ease;
    transition: width .3s ease;
  }
`