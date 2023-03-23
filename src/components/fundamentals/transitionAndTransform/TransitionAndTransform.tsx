export default function TransitionAndTransform() {

  const carImageUnsplash1 = "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60";

  return (
    <div>
      {/* Transition */}
      <p className="text-xl font-bold underline">Transition</p>
      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900">
        Confirm
      </button>

      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 transition-colors">
        Confirm
      </button>

      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 transition-colors duration-1000">
        Confirm
      </button>

      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 transition duration-1000">
        Confirm
      </button>
      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 hover:opacity-20 transition duration-1000">
        Confirm
      </button>

      {/* Transform */}
      <p className="text-xl font-bold underline">Transform</p>
      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 rotate-12">
        Confirm
      </button>
      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 hover:rotate-12 transition-transform">
        Confirm
      </button>

      <button className="px-8 py-2 m-24 text-white bg-blue-600 rounded hover:bg-blue-900 hover:rotate-12 transition-transform duration-1000">
        Confirm
      </button>

      <img src={carImageUnsplash1} alt="" className="w-48 hover:rotate-180 hover:scale-150 transition-transform duration-2000" />


    </div>
  );
}