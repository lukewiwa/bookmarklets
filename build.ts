import { writeFile, rm, mkdir, readdir } from "fs/promises";
import { build } from "esbuild";
import { html } from "common-tags";
import { join } from "path";

const staticDir = "./public";

const page = (bookmarklets: { name: string; cmd: string; js: string }[]) => {
  const bookmarkletsHtml = bookmarklets
    .map(
      ({ name, cmd, js }) =>
        html`<p>
          <a class="btn btn-primary" href="javascript:${js}">${cmd}</a>
          <span class="ms-2">${name}</span>
        </p>`
    )
    .join("\n");

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Wiwa's Bookmarkets</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <main class="container p-4">
          <h1>Wiwa's Bookmarklets</h1>
          ${bookmarkletsHtml}
        </main>
      </body>
    </html> `;
};

async function main() {
  const files = await readdir("src", { withFileTypes: true });
  const bookmarklets = [];
  for (const file of files) {
    const [name, cmd] = file.name.split(".");
    const result = await build({
      entryPoints: [join("src", file.name)],
      bundle: true,
      minify: true,
      write: false,
    });

    const jsUnescaped = result.outputFiles[0].text;
    const js = escape(jsUnescaped);
    bookmarklets.push({ name, cmd, js });

    if (process.argv.includes(cmd)) {
      console.log(jsUnescaped);
    }
  }

  await rm(staticDir, { recursive: true, force: true });
  await mkdir(staticDir);

  await writeFile(join(staticDir, "index.html"), page(bookmarklets));
}

main();
