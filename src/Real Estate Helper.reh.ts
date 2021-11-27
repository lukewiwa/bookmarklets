if (location.host !== "www.realestate.com.au") {
  throw new Error("not slack");
}

// Red out listings asking to contact agent
for (const property of document.getElementsByClassName(
  "residential-card__content-wrapper"
) as HTMLCollectionOf<HTMLDivElement>) {
  if (
    property
      .querySelector(".property-price")
      ?.textContent?.toLowerCase()
      .includes("contact agent")
  ) {
    property.style.background = "#fc9c95";
  }
}
