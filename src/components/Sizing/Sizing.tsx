export default function Sizing() {
  const b = "Tailwind";
  return(
    <div>
      <h1 className="flex justify-center text-xl font-bold">Sizing</h1>
      <hr />

      {/* Width Sizing Container */}
      <p className="text-lg font-bold underline mt-2">Width Sizing Container</p>
      <hr />
        <div className="bg-black text-white my-2 w-4">"w-4": {b}</div>
        <div className="bg-black text-white my-2 w-48">"w-48": {b}</div>
        <div className="bg-black text-white my-2 w-96">"w-96": {b}</div>

      {/* Percentages */}
      <p className="text-lg font-bold underline mt-2">Percentages</p>
      <div className="bg-green-400 text-white my-2 w-1/4">"w-1/2": {b}</div>
      <div className="bg-green-400 text-white my-2 w-1/3">"w-1/3": {b}</div>
      <div className="bg-green-400 text-white my-2 w-1/2">"w-1/2": {b}</div>
      <div className="bg-green-400 text-white w-2/3">"w-2/3": {b}</div>

      {/* Width of Viewport */}
      <p className="text-lg font-bold underline mt-2">Width of Viewport</p>
      <div className="bg-blue-500 text-white w-screen">"w-screen": {b}</div>

      {/* 100% of container */}
      <p className="text-lg font-bold underline mt-2">100% viewport</p>
      <div className="bg-blue-500 text-white w-full">"w-full": {b}</div>


      {/* Custom Width */}
      <p className="text-lg font-bold underline mt-2">Custom Width</p>
      <div className="bg-blue-500 text-white w-[300px]">"w-[300]px": {b}</div>

      {/* Max width */}
      <p className="text-lg font-bold underline mt-2">Max Width</p>
      <div className="bg-blue-500 text-white max-w-sm my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint inventore quam quod eveniet repellat rerum! Consectetur ipsa, eum dicta tenetur officiis nemo perferendis neque commodi consequuntur optio maiores. Iusto, deleniti?</div>
      <div className="bg-blue-500 text-white max-w-sm mx-auto my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint inventore quam quod eveniet repellat rerum! Consectetur ipsa, eum dicta tenetur officiis nemo perferendis neque commodi consequuntur optio maiores. Iusto, deleniti?</div>
      <div className="bg-blue-500 text-white max-w-lg my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint inventore quam quod eveniet repellat rerum! Consectetur ipsa, eum dicta tenetur officiis nemo perferendis neque commodi consequuntur optio maiores. Iusto, deleniti?</div>
      <div className="bg-blue-500 text-white max-w-lg mx-auto my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint inventore quam quod eveniet repellat rerum! Consectetur ipsa, eum dicta tenetur officiis nemo perferendis neque commodi consequuntur optio maiores. Iusto, deleniti?</div>
    </div>
  )
}