export default function Typography() {
  const boilerplate = "Tailwind typography";
  return (
    <div>
      <h1 className="flex justify-center text-xl font-bold">Typography</h1>
      <hr />

      {/* Font Family */}
    
      <div className="text-lg font-bold underline mt-2">Font Family</div>
      <hr />
      <div className="font-sans">font-sans: {boilerplate}</div>
      <div className="font-serif">font-serif: {boilerplate}</div>
      <div className="font-mono">font-mono: {boilerplate}</div>

      {/* Font Size */}
      <div className="text-lg font-bold underline mt-2">Font Size</div>
      <hr />
      <div className="text-xs">text-xs: {boilerplate}</div>
      <div className="text-sm">text-sm: {boilerplate}</div>
      <div className="text-base">text-base: {boilerplate}</div>
      <div className="text-lg">text-lg: {boilerplate}</div>
      <div className="text-xl">text-xl: {boilerplate}</div>
      <div className="text-2xl">text-2xl: {boilerplate}</div>
      <div className="text-3xl">text-3xl: {boilerplate}</div>


      {/* Font Weight */}
      <div className="text-lg font-bold underline mt-2">Font Weight</div>
      <hr />
      <div className="font-light">font-light: {boilerplate}</div>
      <div className="font-normal">font-normal: {boilerplate}</div>
      <div className="font-medium">font-medium: {boilerplate}</div>
      <div className="font-semibold">font-semibold: {boilerplate}</div>
      <div className="font-bold">font-bold: {boilerplate}</div>

      {/* Letter Spacing */}
      <div className="text-lg font-bold underline mt-2">Letter Spacing</div>
      <hr />

      {/* Text Alignment */}
      <div className="text-lg font-bold underline mt-2">Text Alignment</div>
      <hr />

      {/* Text Decoration */}
      <div className="text-lg font-bold underline mt-2">Text Decoration</div>
      <hr />

      {/* Decoration Style */}
      <div className="text-lg font-bold underline mt-2">Decoration Style</div>
      <hr />

      {/* Decoration Offset */}
      <div className="text-lg font-bold underline mt-2">Decoration Offset</div>
      <hr />

      {/* Text Transform */}
      <div className="text-lg font-bold underline mt-2">Text Transform</div>
      <hr />
   </div>
  );
}