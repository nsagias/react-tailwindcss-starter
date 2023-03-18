export default function Colors() {
  const boilerPlate = "Tailwind boilerplate text";
  const buttonBoilerPlate = "Subscribe";
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

      {/* Text Underline */}
      <h1 className="mt-12"></h1>
      <p className="underline decoration-red-500">{boilerPlate}</p>
      <p className="underline decoration-emerald-600">{boilerPlate}</p>
      <p className="underline decoration-yellow-800">{boilerPlate}</p>

      {/* Color Borders */}
      <h1 className="mt-12"></h1>
      <input type="text" className="border border-blue-400" />
      <input type="text" className="border border-green-400" />
      <input type="text" className="border border-orange-400" />

      {/* Divide Colors */}
      <h1 className="mt-12"></h1>
      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline Colors */}
      <h1 className="mt-12"></h1>
      <button className="outline outline-red-500">{buttonBoilerPlate}</button>
      <button className="outline outline-blue-200">{buttonBoilerPlate}</button>


      {/* Box Shadow Colors (Opacity defaults to 100) */}
      <button className="shadow-lg bg-cyan-500 shadow-cyan-500">{buttonBoilerPlate}</button>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500/50">{buttonBoilerPlate}</button>

      {/* Accent Colors */}
      <h1 className="mt-12"></h1>
      <input
        type="checkbox"
        className="accent-purple-500"
        checked
      />
      <input
        type="checkbox"
        className="accent-cyan-500"
        checked
      />

      {/* Custom Inline Colors */}
      <h1 className="mt-12"></h1>
      <div className="bg-[#427fab] text-white">{boilerPlate}</div>
      <div className="bg-[#427] text-white">{boilerPlate}</div>

      <h1 className="mb-12"></h1>
    </div>
  );
}