export default function Interactivity() {
  return (
    <>
      <p className="text-xl font-bold underline mt-2">Interactivity</p>

      {/*  Hover Styling */}
      <p className="text-lg font-bold underline mt-2">Hover Styling</p>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-blue-500 hover:text-white">
        Submit
      </button>      

      {/* Focus State Styling */}
      <p className="text-lg font-bold underline mt-2">Focus State Styling</p>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-blue-500 focus:text-white">Submit</button>

      {/* Active State Styling */}
      <p className="text-lg font-bold underline mt-2">Active State Styling</p>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-red-800 active:text-white">Submit</button>

      <br />

      {/* Styling Based On Parent State */}
      <p className="text-lg font-bold underline mt-2">Styling Based On Parent state (Group Hover)</p>
      <a href="" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is card text</p>
      </a>

      {/* Pseudo Classes */}
      <p className="text-lg font-bold underline mt-2">Pseudo Classes</p>

      {/* Appearance */}
      <p className="test-lg font-bold underline mt-2">Appearance</p>

      {/* Cursor */}
      <p className="text-lg font-bold underline mt-2">Cursor</p>

      {/* Resize */}
      <p className="text-lg font-bold underline mt-2">Resize</p>

      {/* User Select */}
      <p className="text-lg font-bold underline mt-2">User Select</p>

    </>
  );
}