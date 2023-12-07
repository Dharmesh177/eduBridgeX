import React, { useState, useEffect } from 'react';

const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  useEffect(() => {
    if (!SpeechRecognition) {
      return;
    }

    // const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      setIsListening(false);
      setSearchQuery(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      console.error(event.error);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      console.error('Your browser does not support speech recognition.');
      return;
    }
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  return (
    <div>
      <input type="text" value={searchQuery} readOnly />
      {isListening ? (
        <button onClick={stopListening}>Stop</button>
      ) : (
        <button onClick={startListening}>Speak</button>
      )}
    </div>
  );
};

export default VoiceSearch;
