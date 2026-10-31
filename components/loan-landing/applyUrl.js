export function buildApplyUrl(slug) {
  const content = slug ? encodeURIComponent(slug) : "";
  return `https://web.rapidmoney.in/borrower/login?utm_source=website&utm_medium=web&utm_campaign=emi_calculator${
    content ? `&utm_content=${content}` : ""
  }`;
}

