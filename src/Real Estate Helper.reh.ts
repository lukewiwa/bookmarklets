if (!location.host.includes("realestate.com.au")) {
  throw new Error("not real estate dot com");
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
