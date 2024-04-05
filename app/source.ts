import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
  lastModifiedTime: new Date(),
});

pageTree.children.forEach((child) => {
  if (child.name) {
    child.name = child.name.charAt(0).toUpperCase() + child.name.slice(1);
  }
});

pageTree.children.splice(9, 0, {
  type: "page",
  name: "Highrise Create",
  url: "https://create.highrise.game/",
  external: true,
});

pageTree.children.splice(10, 0, {
  type: "page",
  name: "Highrise Website",
  url: "https://highrise.game/",
  external: true,
});

export const pageTreemWithExternalLinks = pageTree;
