import type { NextApiRequest, NextApiResponse } from 'next'
import chrome from 'chrome-aws-lambda'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.body;
  if (url) {
    const browser = await chrome.puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    const imageBuffer = await page.screenshot();
    
    await browser.close();
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=1440000");
    res.status(200).end(imageBuffer);
  } else {
    res.status(404)
  }
}