export default function FlexAndAlignItems () {
  return (
    <div >
      <p className="text-xl font-bold underline">Flex Box</p>

      <p className="text-lg font-bold underlinem mt-2">Flex and Align items</p>
      <div className="flex mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <div className="flex flex-col md:flex-row mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <div className="flex h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-end (bottom)</p>
      <div className="flex items-end h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-end with flex-col (right)</p>
      <div className="flex flex-col items-end h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center with flex-col (horizontal center)</p>
      <div className="flex flex-col items-center h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center with flex-row (horizontal center)</p>
      <div className="flex items-center h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center justify-center (horizontal center and centered)</p>
      <div className="flex items-center justify-center h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center justify-end (horizontal center and right)</p>
      <div className="flex items-center justify-end h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center justify-around (horizontal center, spread with space on end)</p>
      <div className="flex items-center justify-around h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">items-center justify-around (horizontal center, spread no space on end)</p>
      <div className="flex items-center justify-between h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>


      <p className="text-lg font-bold underlinem mt-2">items-center justify-around flex-wrap (horizontal center, spread no space on end)</p>
      <div className="flex flex-wrap items-center justify-between h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
        <div className="p-10 border border-blue-400 bg-blue-100">05</div>
        <div className="p-10 border border-blue-400 bg-blue-100">06</div>
        <div className="p-10 border border-blue-400 bg-blue-100">07</div>
        <div className="p-10 border border-blue-400 bg-blue-100">08</div>
        <div className="p-10 border border-blue-400 bg-blue-100">09</div>
      </div>



    </div>
  );
}