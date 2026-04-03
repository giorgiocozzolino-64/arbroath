"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.log("Audio non avviato:", error);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <audio ref={audioRef} loop>
        <source src="/ambient.mp3" type="audio/mpeg" />
      </audio>

      <video autoPlay muted loop style={{ width: "100%" }}>
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div style={{ padding: "40px" }}>
        <h1>Arbroath A.D. 1320</h1>
        <button onClick={toggleAudio}>
          {playing ? "Pause" : "Play"} Ambient
        </button>
      </div>
    </main>
  );
}
