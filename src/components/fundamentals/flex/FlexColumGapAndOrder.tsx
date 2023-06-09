export default function FlexColumnGapAndOrder () {
  return (
    <div >
      <p className="text-xl font-bold underline">Flex Box</p>

      <p className="text-lg font-bold underlinem mt-2">Flex Column Gap And Order</p>
      
      <p className="text-lg font-bold underlinem mt-2"></p>
      <div className="flex items-center justify-between h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="p-10 border border-blue-400 bg-blue-100">04</div>
      </div>

      <p className="text-lg font-bold underlinem mt-2">flex-col gap</p>
      <div className="flex flex-col gap-4 items-center justify-between h-72 w-full bg-gray-100 mt-2">
        <div className="p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="p-10 border border-blue-400 bg-blue-100">03</div>

      </div>

      <p className="text-lg font-bold underlinem mt-12">flex-col gap and order</p>
      <div className="flex flex-col gap-4 items-center justify-between h-72 w-full bg-gray-100 mt-2">
        <div className="order-3 p-10 border border-blue-400 bg-blue-100">01</div>
        <div className="order-2 p-10 border border-blue-400 bg-blue-100">02</div>
        <div className="order-4 p-10 border border-blue-400 bg-blue-100">03</div>
        <div className="order-1 p-10 border border-blue-400 bg-blue-100">04</div>
      </div>
    </div>
  );
}