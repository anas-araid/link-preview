import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../components/Input'
import { LinkPreview } from '../components/LinkPreview';
import { getScreenshoot, getUrlLabel, isValidApexDomain } from '../utils';

interface ILinks {
  url: string;
  label: string;
  preview?: string;
}
export default function Home() {
  const [value, setValue] = useState('');
  const [links, setLinks] = useState<ILinks[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check if is a valid apex domain

    if (isValidApexDomain(value)) {
      const apexDomain = value;
      const label = getUrlLabel(apexDomain);
      setValue('');
      // save new object
      const object = [...links, {url: apexDomain, label}]
      setLinks(object);
      // get preview
      const preview = await getScreenshoot(`https://${apexDomain}`);
      // update link object
      setLinks(object.map(link => link.url === apexDomain ? {...link, preview} : link))
    }
  }


  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input value={value} onChange={(e) => setValue(e.target.value)}/>
        </form>
        <Ul>
          {links && links.map((link, i) => (
            <List key={i}>
              <LinkPreview label={link.label} url={link.url} preview={link.preview} />
            </List>
          ))}
        </Ul>
      </Container>
    </>
  )
}

const Container = styled.main`
  padding: 120px;
`

const Ul = styled.ul`
  list-style: none;
  margin-left: -16px;
  margin-top: 42px;
`

const List = styled.li`
  margin-bottom: 8px;
  &:before {
    content: "-";
    color: #999;
    position: absolute;
    margin-left: -16px;
  }
`

