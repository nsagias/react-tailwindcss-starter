export default function ProductModal() {
  return (
    <>
      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        
        {/* Card Container: Product Modal */}
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          
          {/* Image Container: if not in div, streches */}
          <div>
            <img 
              src="images/productModalImages/headphone.png" 
              alt="headphones image" 
              className="mx-auto hover:scale-105 w-60 duraction-200"
            />
          </div> 

            {/* Content */}
            <div className="flex flex-col space-y-6">

              {/* Label and Decription Container */}
              <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">

                  {/* Label Container Flex */}
                  <div>

                    {/* Label */}
                    <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full ">
                      Free Shipping
                    </div>

                  </div>

                  {/* Description */}
                  <div className="max-w-sm text-2xl font-medium">
                    Lorem ipsum dolor sit amet consec tetur.
                  </div>
                  
                  {/* Price Container */}
                  <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                    <p className="line-through">$988</p>
                    <p className="text-5xl font-bold">$599</p>
                    <p className="text-sm font-light tex-gray-400">Lorem ipsum dolor sit amet consectetur  elit. Delectus, commodi!</p>
                  </div>


              </div>

            </div>

        
        </div>
      </div>
    </>
  );
}