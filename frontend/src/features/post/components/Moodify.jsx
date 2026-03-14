import React, { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { usePost } from "../hooks/post.hook";
import Moodpost from "../pages/Moodpost";

const Moodify = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [localMood, setLocalMood] = useState("Waiting...");
  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const { mood, setmood } = usePost();

  // Initialize mediapipe
  useEffect(() => {
    const createLandmarker = async () => {
      const filesetResolver = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      const landmarker = await FaceLandmarker.createFromOptions(
        filesetResolver,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1,
        }
      );

      setFaceLandmarker(landmarker);
    };

    createLandmarker();
  }, []);

  // Start webcam
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  // Mood logic
  const detectMood = (blendshapes) => {
    let smile = 0;
    let surprise = 0;
    let frown = 0;

    blendshapes.categories.forEach((shape) => {
      if (
        shape.categoryName === "mouthSmileLeft" ||
        shape.categoryName === "mouthSmileRight"
      ) {
        smile += shape.score;
      }
      if (shape.categoryName === "jawOpen") {
        surprise += shape.score;
      }
      if (
        shape.categoryName === "browDownLeft" ||
        shape.categoryName === "browDownRight"
      ) {
        frown += shape.score;
      }
    });

    if (smile > 0.7) return "funny";
    if (surprise > 0.6) return "surprised";
    if (frown > 0.4) return "sad";
    return "neutral";
  };

  // Detection
  const detect = async () => {
    if (!videoRef.current || !faceLandmarker) return;
    setIsDetecting(true);

    try {
      const results = faceLandmarker.detectForVideo(
        videoRef.current,
        performance.now()
      );

      if (results.faceBlendshapes.length > 0) {
        const moodDetected = detectMood(results.faceBlendshapes[0]);
        setLocalMood(moodDetected);
        setmood(moodDetected);
      }
    } catch (err) {
      console.error("Detection error:", err);
    } finally {
      setIsDetecting(false);
    }
  };

  const moodEmoji = {
    funny: "😄",
    sad: "😢",
    surprised: "😲",
    neutral: "😐",
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row w-full min-h-screen bg-black overflow-hidden relative">

      
      {/* LEFT SIDE: Camera Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10 shrink-0 h-[60vh] md:h-screen bg-black z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Moodify Reel
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto">
            Scan your face to detect your emotion, and we'll instantly play reels matching your current mood.
          </p>
        </div>

        {/* Camera Feed */}
        <div className="relative w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 mb-8 mt-2 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
          <video
            ref={videoRef}
            className="w-full h-full object-cover transform -scale-x-100"
            autoPlay
            playsInline
            muted
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none transform -scale-x-100 z-20"
          />
          
          {/* Mood badge overlay */}
          <div className="absolute top-4 right-4 z-30 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-sm font-semibold text-cyan-300 shadow-lg flex items-center gap-2">
            <span className="text-lg">{moodEmoji[localMood] || "👀"}</span>
            <span className="capitalize">{localMood}</span>
          </div>

          {!faceLandmarker && (
             <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm flex-col gap-3">
               <svg className="animate-spin h-8 w-8 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
               </svg>
               <span className="text-cyan-400 font-medium text-sm animate-pulse">Initializing AI...</span>
             </div>
          )}
        </div>

        {/* Detect Button */}
        <button
          onClick={detect}
          disabled={isDetecting || !faceLandmarker}
          className="w-full max-w-sm py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center justify-center gap-3"
        >
          {isDetecting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Detecting Emotion...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Capture & Detect Mood
            </>
          )}
        </button>
      </div>

      {/* RIGHT SIDE: Reel Section */}
      <div className="hidden md:block md:w-1/2  md:h-screen relative bg-black">
        <Moodpost />
      </div>
    </div>  
  );
};

export default Moodify;