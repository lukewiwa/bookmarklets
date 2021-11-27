if (location.host !== "app.slack.com") {
  throw new Error("not slack");
}

const gifs: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  'img.c-emoji[src$=".gif"]'
);

gifs.forEach(
  (e) =>
    (e.src =
      "https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/23f8-fe0f@2x.png")
);
