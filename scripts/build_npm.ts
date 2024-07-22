import { build, emptyDir } from "jsr:@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  importMap: "./deno.jsonc",
  esModule: true,
  outDir: "./npm",
  test: false,
  shims: {
    deno: true,
  },
  compilerOptions: {
    target: "ES2021",
    sourceMap: true,
  },
  package: {
    name: "@sondr3/radiant",
    version: Deno.args[0]?.replace(/^v/, ""),
    author: "Sondre Aasemoen <sondre@eons.io> (https://www.eons.io)",
    description: "A simple, type-safe, and functional way to create HTML documents in TypeScript.",
    license: "MIT",
    homepage: "https://github.com/sondr3/radiant#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/sondr3/radiant.git",
    },
    bugs: {
      url: "https://github.com/sondr3/radiant/issues",
    },
    keywords: ["html", "dsl", "typescript", "type-safe", "template"],
    engines: {
      node: ">=18.0.0",
    },
  },
  postBuild: async () => {
    await Deno.copyFile("./README.md", "./npm/README.md");
    await Deno.copyFile("./LICENSE", "./npm/LICENSE");
    await Deno.copyFile("./CHANGELOG.md", "./npm/CHANGELOG.md");
  },
});
