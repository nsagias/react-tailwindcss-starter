export default function Columns() {
  const carImageUnsplash1 = "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60";
  return (
    <>
      {/* Columns */}
      <p className="text-lg font-bold underline">Columns</p>
      <div className="columns-4 gap-1">
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
      </div>
      <div className="columns-xs">
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
      </div>

      {/* Aspect Ratio */}
      <p className="text-lg font-bold underline">Aspect Ratio</p>
      <div className="columns-4">
        <img src={carImageUnsplash1} alt="cars" className="w-full aspect-video"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full aspect-square"/>
        <img src={carImageUnsplash1} alt="cars" className="w-full"/>
      </div>
    </>

  );
}