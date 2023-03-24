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

                  {/* Button Group */}
                  <div className="group">

                    {/* Button */}
                    <button className="w-full transition-all duration-150 bg-blue-800 text-white border-b-8 border-b-blue-800 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-800 group-hover:border-t-blue-800 group-hover:shadow-lg">
                      <div className="px-8 py-4 duration-150 bg-blue-600 rounded-lg group-hover:bg-blue-800">Add to cart</div>
                    </button>

                  </div>

                  {/* Stock Group*/}
                  <div className="flex items-center space-x-3 group">
                    {/* Stock Indicator Green Dot */}
                    <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                    <div className="text-sm">50+ pcs in stock</div>
                  </div>

                  {/* Buttom Buttons Container */}
                  <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">

                    {/* Left Button */}
                    <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                      <img src="images/productModalImages/weight.png" alt="" className="w-8" />
                      <span>Add to cart</span>
                    </button>

                    {/* Right Button */}
                    <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                      <img src="images/productModalImages/heart.png" alt="" className="w-8" />
                      <span>Add to wishlist</span>
                    </button>

                  </div>

              </div>

            </div>

        
        </div>
      </div>
    </>
  );
}