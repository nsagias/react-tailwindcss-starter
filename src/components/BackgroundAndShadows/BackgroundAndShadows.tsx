export default function BackgroundAndShadows() {
  return (
    <>
    {/* Background */}
      <div 
        className="h-64 w=[1000px] bg-cover bg-no-repeat bg-center"
        style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"})`}}>
          <span className="font-bold text-3xl bg-black text-white p-2">Background And Shadows</span> 
      </div>
      {/* Gradients */}
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 mt-2"></div>
      <div className="h-24 bg-gradient-to-l from-cyan-500 to-blue-500 mt-2"></div>

      {/*  Shadows */}
      <div className="w-96 mt-6 ml-4 p-3 shadow">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-inner shadow-blue-500/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil non laboriosam voluptatem sit nulla repudiandae assumenda labore dicta doloribus?</div>

      {/* Mix Blend */}
      <div className="flex justify-center -space-x-24">
        <div className="mix-blend-multiply bg-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident voluptas distinctio a, molestiae dicta magnam culpa rerum totam obcaecati.
        </div>
        <div className="mix-blend-multiply bg-red-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde placeat nobis expedita maiores necessitatibus repellat illo amet ipsam fugit.
        </div>
      </div>
    </>
  );
}