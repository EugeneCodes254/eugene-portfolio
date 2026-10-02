import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eugene Kinyangi — Software Developer & Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "72px",
      background: "#07111F",
      color: "#F8FAFC",
      fontFamily: "sans-serif",
    }}>
      <div style={{ fontSize: 26, color: "#60A5FA", letterSpacing: 4 }}>
        SOFTWARE DEVELOPER · PRODUCT BUILDER
      </div>
      <div style={{ marginTop: 28, fontSize: 72, fontWeight: 800 }}>
        Eugene Kinyangi
      </div>
      <div style={{ marginTop: 22, fontSize: 34, color: "#94A3B8" }}>
        Full-Stack · Business Systems · Cybersecurity · AI & Data
      </div>
      <div style={{ marginTop: 48, fontSize: 24, color: "#2F80ED" }}>
        eugenekinyangi.vercel.app
      </div>
    </div>,
    size,
  );
}
