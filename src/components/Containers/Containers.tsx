export default function Containers() {

  // Tailwind Breakpoinsts for Containers 
  //   container	None	width: 100%;
  //   sm (640px)	    max-width: 640px;
  //   md (768px)	    max-width: 768px;
  //   lg (1024px)	  max-width: 1024px;
  //   xl (1280px)	  max-width: 1280px;
  //   2xl (1536px)	  max-width: 1536px; 
  return (
    <div className="container mx-auto">
      <article>
        <h3>Article</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam libero molestiae recusandae accusantium
          voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
          sunt, maiores quasi. Modi amet quos dolores!
        </p>
      </article>
      {/* Margin */}
      <div className="my-4">Margin</div>
      <div className="m-2 bg-slate-100 ">{`m-2`}</div>
      <div className="ml-4 bg-slate-100">{`ml-4`}</div>
      <div className="mr-4 bg-slate-100">{`mr-4`}</div>
      <div className="mt-4 bg-slate-100">{`mt-4`}</div>
      <div className="mb-4 bg-slate-100">{`mb-4`}</div>
      <div className="mx-4 bg-slate-100">{`mx-4`}</div>

      {/* Padding */}
      <div className="py-4">Padding</div>
      <div className="p-2 bg-slate-100 ">{`p-2`}</div>
      <div className="pl-4 bg-slate-100">{`pl-4`}</div>
      <div className="pr-4 bg-slate-100">{`pr-4`}</div>
      <div className="pt-4 bg-slate-100">{`pt-4`}</div>
      <div className="pb-4 bg-slate-100">{`pb-4`}</div>
      <div className="px-4 bg-slate-100">{`px-4`}</div>

      {/* Space Between x */}
      <h3 className="my-4">Space Between X</h3>
      <div className="flex space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>

      {/* Space Between y */}
      <h3 className="my-4">Space Between y</h3>
      <div className="flex flex-col space-y-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
   </div>
  );
}