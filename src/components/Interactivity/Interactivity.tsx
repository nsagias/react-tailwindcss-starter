export default function Interactivity() {
  return (
    <>
      <p className="text-xl font-bold underline mt-2">Interactivity</p>

      {/* Scroll to item */}

      <a href="#item">Scroll To Item</a>
      <p className="text-lg font-bold underline mt-2">Scroll to item</p>
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
      <ul>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 1</li>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 2</li>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 3</li>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 4</li>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 5</li>
        <li className="first:bg-red-400 even:bg-green-200 odd:bg-red-400">Item 6</li>
      </ul>

      <p className="text-lg font-bold underline mt-2">Pseudo Classes nth</p>
      <ul className="[&>*:nth-child(odd)]:bg-red-500 [&>*:nth-child(even)]:bg-blue-500">
        <li className="">Item 1</li>
        <li className="">Item 2</li>
        <li className="">Item 3</li>
        <li className="">Item 4</li>
        <li className="">Item 5</li>
        <li className="">Item 6</li>
      </ul>

      <p className="text-lg font-bold underline mt-2">Pseudo Classes nthn2</p>
      <ul className="[&>*:nth-child(odd)]:bg-red-400 [&>*:nth-child(even)]:bg-cyan-200 [&>*:nth-child(4)]:hidden">
        <li className="">Item 1</li>
        <li className="">Item 2</li>
        <li className="">Item 3</li>
        <li className="">Item 4</li>
        <li className="">Item 5</li>
        <li className="">Item 6</li>
      </ul>



      {/* Appearance */}
      <p className="test-lg font-bold underline mt-2">Appearance Removing default element appearance</p>
      <select name="" id="" className="appearance-none">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <br />

      {/* Cursor */}
      <p className="text-lg font-bold underline mt-2">Cursor</p>
      <button className="bg-black py-3 px-5 m-3 rounded-lg text-white">
        Submit
      </button>
      <p className="cursor-pointer">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, accusamus.</p>

      <button className="bg-black py-3 px-5 m-3 rounded-lg text-white cursor-wait">
        Submit
      </button>

      <button className="bg-black py-3 px-5 m-3 rounded-lg text-white cursor-not-allowed">
        Submit
      </button>

      {/* Resize */}
      <p className="text-lg font-bold underline mt-2">Resize</p>
      <textarea className="border border-black rounded resize"></textarea>

      {/* User Select */}
      <p className="text-lg font-bold underline mt-2">User Select</p>
      <div className="select-none">Lorem ipsum dolor sit amet.</div>
      <div className="select-text">Lorem ipsum dolor sit amet.</div>
      <div className="select-all">Lorem ipsum dolor sit amet.</div>
      <div className="select-auto">Lorem ipsum dolor sit amet.</div>


      {/* Scroll */}
      <p className="text-lg font-bold underline mt-2">scroll through text section</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in! Quisquam iste officiis atque dicta quod sequi perferendis consectetur voluptas commodi? Id distinctio ratione eaque deserunt harum, laudantium sapiente nulla ab officiis, aliquid minima pariatur cum. Quaerat inventore, architecto repellendus recusandae impedit similique sint quam id culpa optio numquam eos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas officia qui veniam culpa commodi id hic corrupti recusandae adipisci fugit sapiente vero corporis minus, rem mollitia aut reiciendis nisi repudiandae omnis error perferendis deleniti saepe! Recusandae laboriosam rerum, blanditiis quia sed, aliquam quibusdam quisquam atque exercitationem suscipit obcaecati nihil!</p>
      <div className="text-2xl mb-12"id="item">Item</div>
    </>
  );
}