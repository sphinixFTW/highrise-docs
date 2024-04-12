import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import "../public/styles/global.css";
import "../public/styles/animations.css";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: "Highrise Studio Docs" }}>
      {children}
    </DocsLayout>
  );
}
