import Link from "next/link";
import styles from "./public/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;
library.add(faDiscord);

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highrise Studio Documentation",
  keywords: ["Highrise", "Highrise Studio", "Highrise Documentation"],
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/x-icon",
    },
    {
      url: "/public/icons/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  description:
    "Whether you're a Builder or a Designer, access everything you need to start creating in Highrise for free. Share your creations with millions of people in the Highrise Virtual Universe.",
};

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source
          src="https://cdn.highrisegame.com/web/create/create-portal-hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.header}>Highrise Studio Documentation</h1>
        <p className={styles.paragraph}>
          Whether you're a Builder or a Designer, access everything you need to
          start creating in Highrise for free. Share your creations with
          millions of people in the Highrise Virtual Universe.
        </p>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <Link href="/docs" className={styles.docsLink}>
            Docs
          </Link>

          <Link
            href="https://github.com/sphinixFTW/highrise-docs"
            target="_blank"
            className={styles.githubLink}
          >
            GitHub
            <svg
              style={{ marginLeft: "8px" }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                fill="#1e232c"
              />
            </svg>
          </Link>

          <Link
            href="https://discord.gg/highrise"
            target="_blank"
            className={styles.discordLink}
          >
            Discord
            <FontAwesomeIcon icon={["fab", "discord"]} />
          </Link>
        </div>
      </main>
    </div>
  );
}
