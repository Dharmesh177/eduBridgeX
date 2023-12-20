import react, {useState,useRef} from 'react';

const SpeechToTextAndTextToSpeech = () => {
    const [transcript, setTranscript] = useState('');
    const [textToSpeechText, setTextToSpeechText] = useState('');
    const recognitionRef = useRef(null);
  
    const startRecognition = () => {
      if ('webkitSpeechRecognition' in window) {
        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.lang = 'en-US';
        recognitionRef.current.continuous = true; // Set continuous to true
        recognitionRef.current.onresult = handleRecognitionResult;
        recognitionRef.current.start();
      } else {
        console.error('Speech recognition not supported in this browser.');
      }
    };
  
    const handleRecognitionResult = (event) => {
      
      let fullTranscript = '';
  
      for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript + ' ';
      }
  
      setTranscript(fullTranscript.trim());
    };
  
    const stopRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  
    const textToSpeech = () => {
      const utterance = new SpeechSynthesisUtterance(textToSpeechText);
      speechSynthesis.speak(utterance);
    };
  
    return (
      <div className="flex items-center justify-center bg-indigo-400 h-screen">
        <div className="container mx-auto p-8 bg-white shadow-md rounded-lg" style={{ margin: 'auto' }}>
          <h1 className="text-3xl font-bold mb-4" >Speech to Text</h1>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={startRecognition}
          >
            Start Speech Recognition
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            onClick={stopRecognition}
          >
            Stop Speech Recognition
          </button>
          <div className="bg-gray-200 p-4 mt-4 rounded">
            <strong>Transcript:</strong> {transcript}
          </div>
  
          <h2 className="text-2xl font-bold mt-4">Text to Speech</h2>
          <input
            className="p-2 border rounded mt-5"
            type="text"
            placeholder="Enter text to convert to speech"
            value={textToSpeechText}
            onChange={(e) => setTextToSpeechText(e.target.value)}
          />
          <br></br>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={textToSpeech}
          >
            Convert to Speech
          </button>
        </div>
      </div>
    );
  };
  
  export default SpeechToTextAndTextToSpeech;