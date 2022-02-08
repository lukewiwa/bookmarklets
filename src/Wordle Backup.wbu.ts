if (location.host !== "www.powerlanguage.co.uk") {
  throw new Error("not wordle");
}

const statistics = window.localStorage.getItem("statistics") ?? "";
const statsObj = JSON.parse(statistics);

const board = document.querySelector("body") as HTMLBodyElement;
board.innerHTML = "";

const copyToClipboardButton = document.createElement("button");
copyToClipboardButton.textContent = "copy to clipboard";
copyToClipboardButton.onclick = () => {
  navigator.clipboard.writeText(statistics);
  copyToClipboardButton.innerText = "copied!";
  copyToClipboardButton.disabled = true;
};

const statsJsonElement = document.createElement("code");
statsJsonElement.style.width = "50em";
statsJsonElement.style.display = "inline-block";
statsJsonElement.innerHTML = `<pre>${JSON.stringify(statsObj, null, 2)}</pre>`;
board.append(statsJsonElement);
board.append(document.createElement("br"));
board.append(copyToClipboardButton);
