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
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className={`
              text-xl font-medium  text-white 
              text-center md:text-left
            `}>
                Get diet tips delivered to your email
            </h2>
            <p className={`
              max-w-xs my-4 text-xs leading-5 tracking-wide text-white t
              ext-center md:text-left
              `}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dignissimos error non sapiente?
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}