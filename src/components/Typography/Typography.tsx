export default function Typography() {
  const boilerplate = "Tailwind typography";
  return (
    <div>
      <h1>Typography</h1>
      <hr />

      {/* Font Family */}
    
      <div className="mt-2">Font Family</div>
      <hr />
      <div className="font-sans">font-sans: {boilerplate}</div>
      <div className="font-serif">font-serif: {boilerplate}</div>
      <div className="font-mono">font-mono: {boilerplate}</div>

      {/* Font Size */}
      <div className="mt-2">Font Size</div>
      <hr />
      <div className="text-xs">text-xs: {boilerplate}</div>
      <div className="text-sm">text-sm: {boilerplate}</div>
      <div className="text-base">text-base: {boilerplate}</div>
      <div className="text-lg">text-lg: {boilerplate}</div>
      <div className="text-xl">text-xl: {boilerplate}</div>
      <div className="text-2xl">text-2xl: {boilerplate}</div>
      <div className="text-3xl">text-3xl: {boilerplate}</div>


      {/* Font Weight */}
      <div className="mt-2">Font Weight</div>
      <hr />

      {/* Letter Spacing */}
      <div className="mt-2">Letter Spacing</div>
      <hr />

      {/* Text Alignment */}
      <div className="mt-2">Text Alignment</div>
      <hr />

      {/* Text Decoration */}
      <div className="mt-2">Text Decoration</div>
      <hr />

      {/* Decoration Style */}
      <div className="mt-2">Decoration Style</div>
      <hr />

      {/* Decoration Offset */}
      <div className="mt-2">Decoration Offset</div>
      <hr />

      {/* Text Transform */}
      <div className="mt-2">Text Transform</div>
      <hr />
   </div>
  );
}