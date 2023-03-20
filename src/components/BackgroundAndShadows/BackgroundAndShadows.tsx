export default function BackgroundAndShadows() {
  return (
    <>
      <div 
        className="h-64 w=[1000px] bg-cover bg-no-repeat bg-center"
        style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"})`}}>
          <span className="font-bold text-3xl bg-black text-white p-2">Background And Shadows</span> 
      </div>
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 mt-2"></div>
    </>
  );
}