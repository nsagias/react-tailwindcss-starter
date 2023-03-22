import { FiAlertTriangle } from "react-icons/fi";

export default function Animations() {
  return (
    <div className="min-h-screen bg-slate-900">
      <p className="text-xl font-bold underline text-white">Animation and Keyframes</p>
      <div className="flex flex-col items-center justify-center mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-spin" />
      </div>

      <div className="flex flex-col items-center justify-center mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-spin-slow" />
      </div>


      <div className="flex flex-col items-center justify-center bg-slate-900 mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-pulse" />
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-900 mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-ping" />
      </div>

      <div className="flex flex-col items-center justify-center bg-secondary mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-bounce" />
      </div>


      <div className="flex flex-col items-center justify-center bg-primary mt-12">
        <FiAlertTriangle className="h-48 w-48 text-white animate-wiggle" />
      </div>
      
      
    </div>
  );
}