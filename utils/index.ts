export const getScreenshoot = async (url: string) => {
  const res = await fetch("/api/screenshot", {
    method: "POST",
    body: url,
  });

  const imageBlob = await res.blob();
  return URL.createObjectURL(imageBlob);
}

export const isValidApexDomain = (value: string) => {
  const regex = /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  return regex.test(value);
}

export const getUrlLabel = (value: string) => {
  const domain = value.match(/^([^.]+)/);
  const name = !!domain ? domain[1] : value;
  // uppercase label
  const label = name.replace(/^[a-z]/, (match) => match.toUpperCase());
  return label;
}