import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioData }) => {
  const audioRef = useRef();

  useEffect(() => {
    const playAudio = async () => {
      if (audioData && audioData.length > 0) {
        try {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const audioBuffer = audioContext.createBuffer(1, audioData.length / 2, audioContext.sampleRate);
          const channelData = audioBuffer.getChannelData(0);

          // Assuming 16-bit signed PCM data
          for (let i = 0, j = 0; i < audioData.length; i += 2, j++) {
            const sample = (audioData[i] << 8) | (audioData[i + 1] & 0xff);
            channelData[j] = sample / 32768.0;
          }

          const source = audioContext.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(audioContext.destination);
          source.start();
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      }
    };

    playAudio();
  }, [audioData]);

  return <div ref={audioRef}></div>;
};

export default AudioPlayer;
