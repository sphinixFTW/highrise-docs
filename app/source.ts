import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});

const guidesFolder = pageTree.children.find((child) => child.name === "Guides");
if (guidesFolder && (guidesFolder as Folder).children) {
  const guidesChildren = (guidesFolder as Folder).children;

  const pageIndex = guidesChildren.findIndex(
    (page: { name: string }) => page.name === "Getting Started"
  );

  if (pageIndex !== -1) {
    const [page] = guidesChildren.splice(pageIndex, 1);

    guidesChildren.unshift(page);
  }
}

pageTree.children.push(pageTree.children.splice(1, 1)[0]);
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
