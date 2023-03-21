export default function Flex () {
  return (
    <div >
      <p className="text-xl font-bold underline">Flex Box</p>

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

    </div>
  );
}