export default function Colors() {
  const boilerPlate = "Tailwind boilerplate text";
  return (
    <div className="items-center max-w-sm mx-auto mt-12">
      {/* Text Color Examples */}
      <p className="text-black">{boilerPlate}</p>
      <p className="text-white">{boilerPlate}</p>
      <p className="text-red-500">{boilerPlate}</p>
      <p className="text-green-500">{boilerPlate}</p>
      <p className="text-emerald-500">{boilerPlate}</p>
      <p className="text-zinc-300">{boilerPlate}</p>
      <p className="text-slate-800">{boilerPlate}</p>

      {/* Background Color Examples */}
      <h1 className="mt-12"></h1>
      <p className="bg-slate-800 text-yellow-200">{boilerPlate}</p>
      <p className="bg-emerald-400 text-white">{boilerPlate}</p>
      <p className="bg-yellow-300">{boilerPlate}</p>
      <p className="bg-indigo-800 text-white">{boilerPlate}</p>

      {/* Text underline */}
      <h1 className="mt-12"></h1>
      <p className="underline decoration-red-500">{boilerPlate}</p>
      <p className="underline decoration-emerald-600">{boilerPlate}</p>
      <p className="underline decoration-yellow-800">{boilerPlate}</p>
    </div>
  );
}