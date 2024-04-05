import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(359deg,#0f0f0f 2.36%,rgba(10,16,51,0) 99.37%)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
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

      <main
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Highrise Studio Documentation
        </h1>
        <Link
          href="/docs"
          style={{
            display: "inline",
            fontWeight: "600",
            textDecoration: "none",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          GET CREATIVE
        </Link>
      </main>
    </div>
  );
}
