if (location.host !== "news.ycombinator.com") {
  throw new Error("not hacker news");
}

function wrapWithDiv(el: Element) {
  const div = document.createElement("div");
  el.parentNode?.insertBefore(div, el);
  div.appendChild(el);
  return div;
}

for (const el of document.getElementsByClassName(
  "comment"
) as HTMLCollectionOf<HTMLSpanElement>) {
  el.style.fontSize = "10pt";
}

const titles = document.getElementsByClassName("title");

for (const title of titles as HTMLCollectionOf<HTMLTableCellElement>) {
  title.style.padding = "0.4em 0";
  title.style.fontSize = "12pt";
}

const subtexts = document.getElementsByClassName("subtext");

for (const subtext of subtexts as HTMLCollectionOf<HTMLTableCellElement>) {
  const links: NodeListOf<HTMLAnchorElement> =
    subtext.querySelectorAll("a:last-child");
  links.forEach((link) => {
    if (link.text.includes("comment")) {
      const div = wrapWithDiv(link);
      div.style.fontSize = "10pt";
      link.style.color = "red";
      link.style.margin = "0.5em 0";
      link.style.display = "block";
    }
  });
}
