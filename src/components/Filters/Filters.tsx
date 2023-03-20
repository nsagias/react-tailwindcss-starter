export default function Filters() {
  // <div 
  //       className="h-64 w=[1000px] bg-cover bg-no-repeat bg-center"
  //       style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"})`}}>
  //         <span className="font-bold text-3xl bg-black text-white p-2">Background And Shadows</span> 
  //     </div>
  return (
    <>
      <p className="font-bold text-xl underline">Filters</p>

      {/* Blur */}
      <p className="font-bold text-lg">Blur</p>
      <div className="blur-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi debitis, dignissimos molestias accusantium praesentium repellat ipsam magni iure dolorum voluptates!</div>
      
      <div className="blur-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, illo dolorem beatae numquam alias accusantium nobis voluptate labore harum non.</div>

      <div className="blur-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus iste commodi sapiente ipsum accusamus nulla, maxime iure architecto cum.</div>

      <img src={"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"} alt="cars" className="blur-xl" />
      <img src={"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"} alt="cars" className="blur-lg" />
      <img src={"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"} alt="cars" className="blur-sm" />

      {/* Brightness */}
      <p className="font-bold text-lg">Brightness</p>

      {/* Contrast */}
      <p className="font-bold text-lg">Contrast</p>

      {/* Grayscale */}
      <p className="font-bold text-lg">Grayscale</p>

      {/* Invert */}
      <p className="font-bold text-lg">Ivert</p>

      {/* Sepia */}
      <p className="font-bold text-lg">Sepia</p>

      {/* Hue Rotate */} 
      <p className="font-bold text-lg">Hue Rotate</p>
    </>
  );
}