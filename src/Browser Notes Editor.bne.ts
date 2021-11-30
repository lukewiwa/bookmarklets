document.write(
  '<body contenteditable style="font:12px monospace; max-width:100em; margin:0; padding:10px;">'
);
const key = "personalNotes";
const body = document.querySelector("body") as HTMLBodyElement;
const notes = localStorage.getItem(key);
if (notes !== null) {
  body.innerHTML = notes;
}
body.oninput = () => {
  localStorage.setItem(key, body.innerHTML);
};
