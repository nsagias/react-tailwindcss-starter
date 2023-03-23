export default function ProductModal() {
  return (
    <>
      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-300">
        
        {/* Card Container: Product Modal */}
        <div className="flex flex-col bg-white p-6 m-3 space-y-10 rounded-2xl shadow-2xl md:flex-row md:space-x-10 md:p-16 md:m-0">
          
          {/* Image: if not in div, streches */}
          <div>
            <img 
              src="images/productModalImages/headphone.png" 
              alt="headphones" 
              className="mx-auto hover:scale-105 w-60 duraction-200" />
          </div>  
        </div>
      </div>
    </>
  );
}