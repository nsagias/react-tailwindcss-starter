export default function Filters() {

  const carImageUnsplash1 = "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60";
  return (
    <>
      <p className="font-bold text-3xl underline">Filters</p>

      {/* Blur */}
      <p className="font-bold text-2xl mt-8">Blur</p>
      <div className="blur-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi debitis, dignissimos molestias accusantium praesentium repellat ipsam magni iure dolorum voluptates!</div>
      
      <div className="blur-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, illo dolorem beatae numquam alias accusantium nobis voluptate labore harum non.</div>

      <div className="blur-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus iste commodi sapiente ipsum accusamus nulla, maxime iure architecto cum.</div>

      <img src={carImageUnsplash1} alt="cars" className="blur-xl" />
      <img src={carImageUnsplash1} alt="cars" className="blur-lg" />
      <img src={carImageUnsplash1} alt="cars" className="blur-sm" />

      {/* Brightness */}
      <p className="font-bold text-2xl mt-8">Brightness</p>
      <img src={carImageUnsplash1} alt="" className="brightness-100" />
      <img src={carImageUnsplash1} alt="" className="brightness-50" />
      <img src={carImageUnsplash1} alt="" className="brightness-75" />
      <img src={carImageUnsplash1} alt="" className="brightness-150" />
      <img src={carImageUnsplash1} alt="" className="brightness-200" />

      {/* Contrast */}
      <p className="font-bold text-2xl mt-8">Contrast</p>
      <img src={carImageUnsplash1} alt="" className="contrast-0" />
      <img src={carImageUnsplash1} alt="" className="contrast-50" />
      <img src={carImageUnsplash1} alt="" className="contrast-100" />
      <img src={carImageUnsplash1} alt="" className="contrast-150" />
      <img src={carImageUnsplash1} alt="" className="contrast-200" />

      {/* Grayscale */}
      <p className="font-bold text-2xl mt-8">Grayscale</p>
      <img src={carImageUnsplash1} alt="" className="grayscale" />
      <img src={carImageUnsplash1} alt="" className="grayscale-[70%]" />
      <img src={carImageUnsplash1} alt="" className="grayscale-[50%]" />
      <img src={carImageUnsplash1} alt="" className="grayscale-[30%]" />

      {/* Invert */}
      <p className="font-bold text-2xl mt-8">Invert</p>
      <img src={carImageUnsplash1} alt="" className="invert" />

      {/* Sepia */}
      <p className="font-bold text-2xl mt-8">Sepia</p>
      <img src={carImageUnsplash1} alt="" className="sepia" />
      <img src={carImageUnsplash1} alt="" className="sepia-[50%]" />

      {/* Hue Rotate */} 
      <p className="font-bold text-2xl mt-8">Hue Rotate</p>
      <img src={carImageUnsplash1} alt="" className="hue-rotate-15" />
      <img src={carImageUnsplash1} alt="" className="hue-rotate-30" />
      <img src={carImageUnsplash1} alt="" className="hue-rotate-60" />
      <img src={carImageUnsplash1} alt="" className="hue-rotate-90" />
      <img src={carImageUnsplash1} alt="" className="hue-rotate-180" />
    </>
  );
}