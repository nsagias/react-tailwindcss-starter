export default function Borders() {
  return (
    <>
    {/* Border Width and Colors */}
    <div className="w-96 m-3 p-5 border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus?
    </div>
    <div className="w-96 m-3 p-5 border-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus?
    </div>
    <div className="w-96 m-3 p-5 border-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus?
    </div>
    <div className="w-96 m-3 p-5 border-4 border-red-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus?
    </div>

    <div className="w-96 m-3 p-5 border-x-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, incidunt.</div>

    <div className="w-96 m-3 p-5 border-y-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam.</div>

    <div className="w-96 m-3 p-5 border-t-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, temporibus.</div>

    <div className="w-96 m-3 p-5 border-b-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi!</div>

    <div className="w-96 m-3 p-5 border-r-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, molestias.</div>

    <div className="w-96 m-3 p-5 border-l-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ducimus?</div>

    {/* Border Radius */}
    <div className="w-96 m-3 p-5 border-4 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, temporibus?</div>

    <div className="w-96 m-3 p-5 border-4 rounded-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, unde.</div>

    <div className="w-96 m-3 p-5 border-4 rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deleniti?</div>

    <div className="w-96 m-3 p-5 border-4 rounded-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quas.</div>

    <div className="w-96 m-3 p-5 border-4 rounded-t-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, itaque!</div>

    <div className="w-96 m-3 p-5 border-4 rounded-b-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, magni!</div>

    {/* Outline */}
    <button className="m-3 p-5 outline outline-4 outline-red-500 rounded-full">Click Me!</button>
    </>
  );
}