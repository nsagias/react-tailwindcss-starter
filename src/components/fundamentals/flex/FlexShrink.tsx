export default function FlexShrink () {
  return (
    <div >
      <p className="text-xl font-bold underline">Flex Box</p>

      <p className="text-lg font-bold underlinem mt-2">Flex Shrink</p>
      
      <div className="flex w-full bg-gray-100 mt-2">
        <div className="flex-initial w-64 p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="flex-none w-64 p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="flex-auto w-64 p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="flex-1 w-64 p-10 border border-blue-400 bg-blue-100">04</div>
        <div className="p-10 border border-blue-400 bg-blue-100">05</div>
        <div className="p-10 border border-blue-400 bg-blue-100">06</div>
        <div className="p-10 border border-blue-400 bg-blue-100">07</div>
      </div>

    </div>
  );
}