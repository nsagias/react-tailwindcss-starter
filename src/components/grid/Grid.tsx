export default function Grid () {
  return (
    <div >
      <p className="text-xl font-bold underline">Grid</p>

      <div className="grid gap-2 bg-gray-100 mt-2">
        <div className="p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-gray-100 mt-2">
        <div className="p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>

      <div className="grid grid-cols-2 gap-2 bg-gray-100 mt-2">
        <div className="p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>

      <div className="grid grid-cols-4 gap-2 bg-gray-100 mt-2">
        <div className="p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>

      <div className="grid grid-cols-3 grid-rows-6 gap-2 bg-gray-300 mt-2">
        <div className="p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>

      <div className="grid grid-cols-3 bg-gray-300 mt-2">
        <div className="col-span-2 row-span-2 p-10 border border-blue-900 bg-blue-100">Item 1</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 2</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 3</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 4</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 5</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 6</div>
        <div className="col-span-2 p-10 border border-blue-900 bg-blue-100">Item 7</div>
        <div className="p-10 border border-blue-900 bg-blue-100">Item 8</div>
        <div className="col-span-3 p-10 border border-blue-900 bg-blue-100">Item 9</div>
      </div>


    </div>
  );
}