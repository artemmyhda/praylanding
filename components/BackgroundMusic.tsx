"use client"

import React, { useRef, useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const BackgroundMusic: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState<boolean>(false);

    useEffect(() => {
        // Attempt to autoplay music on load
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log('Autoplay blocked: ', error);
            });
        }
    }, []);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
        }
    };

    return (
        <div className="fixed bottom-5 right-5">
            <audio ref={audioRef} loop>
                <source src="/background.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={toggleMute}
                className="bg-gray-800 text-white p-2 rounded-full focus:outline-none flex items-center justify-center"
            >
                {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
        </div>
    );
};

export default BackgroundMusic;