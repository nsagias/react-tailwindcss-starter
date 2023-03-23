export default function EmailSubscribeCard() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">

      {/* Email Card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">

          {/* Left: Image */}
          <img 
            src="images/emailSubscribe/image.jpg" 
            alt="" 
            className={`
              object-fit rounded-xl 
              h-80 md:h-64 
              md:rounded-l-xl md:rounded-r-none
              hover:scale-105 hover:rounded-xl duration-200
            `} 
          />
        </div>
      </div>
    </div>
  );
}