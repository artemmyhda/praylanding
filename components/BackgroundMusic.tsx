"use client"

import React, { useRef, useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const BackgroundMusic: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [hasInteracted, setHasInteracted] = useState<boolean>(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (!hasInteracted) {
                // User has clicked play, starting audio for the first time
                setHasInteracted(true);
                audioRef.current.play().catch(error => {
                    console.log('Playback failed: ', error);
                });
            } else {
                // Toggle mute state
                setIsMuted((prev) => !prev);
                audioRef.current.muted = !isMuted;
            }
        }
    };

    return (
        <div className="fixed bottom-5 right-5">
            <audio ref={audioRef} loop>
                <source src="/background.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={togglePlay}
                className="bg-gray-800 text-white p-2 rounded-full focus:outline-none flex items-center justify-center hover:bg-[#0600ff]"
            >
                {!hasInteracted ? <FaPlay size={12} /> : (isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />)}
            </button>
        </div>
    );
};

export default BackgroundMusic;