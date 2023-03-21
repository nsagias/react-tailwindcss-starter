export default function FlexColumnGapAndOrder () {
  return (
    <div >
      <p className="text-xl font-bold underline">Flex Box</p>

      <p className="text-lg font-bold underlinem mt-2">Flex Column Gap And Order</p>
      
      <p className="text-lg font-bold underlinem mt-2">items-center justify-around (horizontal center, spread with space on end)</p>
      <div className="flex items-center justify-around h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>
    </div>
  );
}