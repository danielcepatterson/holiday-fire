// src/App.tsx

import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isMuted, setIsMuted] = useState(false);

	useEffect(() => {
		// Auto-play video on load
		if (videoRef.current) {
			videoRef.current.play().catch(() => {
				// Autoplay might be blocked, user can click to play
			});
		}
		// Auto-play audio on load
		if (audioRef.current) {
			audioRef.current.play().catch(() => {
				// Autoplay might be blocked, user can click to play
			});
		}
	}, []);

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !audioRef.current.muted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<div className="fireplace-container">
			<video
				ref={videoRef}
				className="fireplace-video"
				loop
				autoPlay
				muted
				playsInline
			>
				<source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<audio
				ref={audioRef}
				className="background-music"
				loop
				autoPlay
				playsInline
			>
				<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>

			<div className="controls">
				<button
					className="mute-button"
					onClick={toggleMute}
					aria-label="toggle mute"
				>
					{isMuted ? "🔇 Unmute" : "🔊 Mute"}
				</button>
			</div>
		</div>
	);
}

export default App;
