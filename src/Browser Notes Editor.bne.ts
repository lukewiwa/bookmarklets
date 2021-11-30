document.write(
  '<body contenteditable style="font:12px monospace; max-width:100em; margin:0; padding:10px;">'
);
const key = "personalNotes";
const body = document.querySelector("body") as HTMLBodyElement;
if (localStorage.getItem(key) !== null) {
  localStorage.setItem(key, body.innerHTML);
}
body.oninput = () => {
  localStorage.setItem(key, body.innerHTML);
};
