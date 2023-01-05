import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { LoadingSkeleton } from '../LoadingSkeleton';
import { Content, Link, Image } from './styled';

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
                  <LoadingSkeleton />
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