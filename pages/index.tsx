import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../components/Input'
import { LinkPreview } from '../components/LinkPreview';

interface ILinks {
  url: string;
  label: string;
  preview?: string;
}
export default function Home() {
  const [value, setValue] = useState('');
  const [links, setLinks] = useState<ILinks[]>([]);

  const getScreenshoot = async (url: string) => {
    const res = await fetch("/api/screenshot", {
      method: "POST",
      body: url,
    });

    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL;
    //console.log('imageObjectURL', imageObjectURL)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    const isValidApexDomain = regex.test(value);
    console.log('isValidApexDomain', isValidApexDomain)
    if (isValidApexDomain) {
      const currentValue = value;
      //const name = currentValue.replace(/^([^.]+)/, "");
      const match = currentValue.match(/^([^.]+)/);

      const name = !!match ? match[1] : value;
      console.log('name', name)

      const label = name.replace(/^[a-z]/, (match) => match.toUpperCase());
      console.log('getScreenshot')
      const url = `https://${currentValue}`
      setValue('');
      const object = [...links, {url: currentValue, label}]
      setLinks(object);
      const preview = await getScreenshoot(url);
      setLinks(object.map(link => link.url === currentValue ? {...link, preview} : link))
    }
  }


  return (
    <>
      <Container>
        {/* <div id="asdf"></div>
        <div id="asdf1"></div>
        <div id="asdf2"></div> */}
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
  padding: 80px;
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

