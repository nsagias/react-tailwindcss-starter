export default function LayoutPosition() {
  const b = "Tailwind";
  return (
    <div>
      <h1 className="flex justify-center text-xl font-bold">Layout Position</h1>
      <hr />

      {/* Positioning */}
      <p className="text-lg font-bold underline mt-2">Positioning</p>
      <div className="relative h-12 w-1/2 bg-red-400 text-white font-bold">
        <p>Relative Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-900 text-white font-bold">
          <p>Absolute Child Element</p>
        </div>
      </div>

      {/* Top Left Corner */}
      <p className="text-lg font-bold underline mt-2">Top Left Corner</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Top Right Corner */}
      <p className="text-lg font-bold underline mt-2">Top Right Corner</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom Left Corner */}
      <p className="text-lg font-bold underline mt-2">Bottom Left Corner</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom Right Corner */}
      <p className="text-lg font-bold underline mt-2">Bottom Right Corner</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Span Top Edge */}
      <p className="text-lg font-bold underline mt-2">Span Top Edge</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Span Left Edge */}
      <p className="text-lg font-bold underline mt-2">Span Left Edge</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span Right Edge */}
      <p className="text-lg font-bold underline mt-2">Span Right Edge</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
      </div>
      
      {/* Span Bottom Edge */}
      <p className="text-lg font-bold underline mt-2">Span Bottom Edge</p>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>


    </div>
  );
}
