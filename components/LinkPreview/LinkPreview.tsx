import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

interface Props {
  label: string;
  url: string;
  preview?: string;
}

const LinkPreview = ({label, preview, url}: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <span>
            <Link href={`https://${url}`} target="_blank">
              {label}
            </Link>
          </span>
      </Tooltip.Trigger>
          <Tooltip.Portal>
            <Content className="TooltipContent" sideOffset={12} side="top" align='start'>
              {
                preview === undefined ? 
                <Shimmer />
                :
                <Image src={preview} width={200} height={120} />
              }
            </Content>
          </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default LinkPreview;


const ShimmerKeyframe = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const Shimmer = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerKeyframe};
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  border: 0px;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100%;
`;

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

const Content = styled(Tooltip.Content)`
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

const Shiny = keyframes`
  from {
    -webkit-mask-position: 100%;

  }
  to {
    -webkit-mask-position: 0%;
  }
`

const Image = styled.img`
  border-radius: 12px;
  width: 200px;
  height: 120px;
  -webkit-mask-image: linear-gradient(
    60deg,
    black 25%,
    rgba(0, 0, 0, 0.5) 50%,
    black 75%
  );
  -webkit-mask-size: 400%;
  -webkit-mask-position: 100%;
  transition: mask-position 1s ease, -webkit-mask-position 1s ease;
  animation: ${Shiny} ease 1s;
`;

const Link = styled.a`
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