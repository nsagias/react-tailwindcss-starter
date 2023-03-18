import { FiAlertTriangle } from "react-icons/fi";


export default function AlertTailwind() {
  return (
    <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">

        <FiAlertTriangle className="w-12 h-12 text-red-500" />
      <div>
        <div className="text-xl font-medium text-black">Confirm</div>
        <p className="text-slate-500">Are you sure you want to proceed</p>
      </div>
    </div>
  );
}