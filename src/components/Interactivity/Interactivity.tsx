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

      <br />

      {/* Styling Based On Parent State */}
      <p className="text-lg font-bold underline mt-2">Styling Based On Parent state</p>

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