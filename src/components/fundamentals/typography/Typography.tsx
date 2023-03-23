export default function Typography() {
  const boilerplate = "Tailwind typography";
  return (
    <div>
      <h1 className="flex justify-center text-xl font-bold">Typography</h1>
      <hr />

      {/* Font Family */}
    
      <p className="text-lg font-bold underline mt-2">Font Family</p>
      <hr />
      <p className="font-sans">font-sans: {boilerplate}</p>
      <p className="font-serif">font-serif: {boilerplate}</p>
      <p className="font-mono">font-mono: {boilerplate}</p>

      {/* Font Size */}
      <p className="text-lg font-bold underline mt-2">Font Size</p>
      <hr />
      <p className="text-xs">text-xs: {boilerplate}</p>
      <p className="text-sm">text-sm: {boilerplate}</p>
      <p className="text-base">text-base: {boilerplate}</p>
      <p className="text-lg">text-lg: {boilerplate}</p>
      <p className="text-xl">text-xl: {boilerplate}</p>
      <p className="text-2xl">text-2xl: {boilerplate}</p>
      <p className="text-3xl">text-3xl: {boilerplate}</p>


      {/* Font Weight */}
      <p className="text-lg font-bold underline mt-2">Font Weight</p>
      <hr />
      <p className="font-light">font-light: {boilerplate}</p>
      <p className="font-normal">font-normal: {boilerplate}</p>
      <p className="font-medium">font-medium: {boilerplate}</p>
      <p className="font-semibold">font-semibold: {boilerplate}</p>
      <p className="font-bold">font-bold: {boilerplate}</p>

      {/* Letter Spacing */}
      <p className="text-lg font-bold underline mt-2">Letter Spacing</p>
      <hr />
      <p className="tracking-tight">tracking-tight: {boilerplate}</p>
      <p className="tracking-normal">tracking-normal: {boilerplate}</p>
      <p className="tracking-wide">tracking-wide: {boilerplate}</p>
      <p className="tracking-widest">tracking-widest: {boilerplate}</p>

      {/* Text Alignment */}
      <p className="text-lg font-bold underline mt-2">Text Alignment</p>
      <hr />
      <p className="text-left">text-left: {boilerplate}</p>
      <p className="text-center">text-center: {boilerplate}</p>
      <p className="text-right">text-right: {boilerplate}</p>

      {/* Text Decoration */}
      <p className="text-lg font-bold underline mt-2">Text Decoration</p>
      <hr />
      <p className="underline decoration-4">underline decoration-4: {boilerplate}</p>
      <p className="line-through">line-through: {boilerplate}</p>
      <p className="overline">overline: {boilerplate}</p>
      <p className="no-underline">no-underline: {boilerplate}</p>
     
      {/* Decoration Style */}
      <p className="text-lg font-bold underline mt-2">Decoration Style</p>
      <hr />
      <p className="underline decoration-4 decoration-blue-400">underline decoration-4 decoration-blue-400: {boilerplate}</p>
      <p className="underline decoration-double">underline decoration-double: {boilerplate}</p>
      <p className="underline decoration-dotted">underline decoration-dotted: {boilerplate}</p>
      <p className="underline decoration-dashed">underline decoration-dash: {boilerplate}</p>
      <p className="underline decoration-wavy">underline decoration-wavy: {boilerplate}</p>


      {/* Decoration Offset */}
      <p className="text-lg font-bold underline mt-2">Decoration Offset</p>
      <p className="underline decoration-4 decoration-blue-400 underline-offset-8">underline decoration-4 decoration-blue-400 underline-offset-8: {boilerplate}</p>
      <hr />

      {/* Text Transform */}
      <p className="text-lg font-bold underline mt-2">Text Transform</p>
      <hr />
      <p className="normal-case">normal-case: {boilerplate}</p>
      <p className="uppercase">uppercase: {boilerplate}</p>
      <p className="lowercase">lowercase: {boilerplate}</p>
      <p className="capitalize">capitalize: {boilerplate}</p>
   </div>
  );
}