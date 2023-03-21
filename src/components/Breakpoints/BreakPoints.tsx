import useWindowDimensions from "../../utils/useWindowDimensions";

export default function BreakPoints() {

  const { width } = useWindowDimensions();

  return (
      <div className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-red-900 xl:bg-purple-800 2xl:bg-yellow-500 w-screen h-screen">
        <div className="h1 text-white text-xl md:texl-2xl lg:text-3xl font-bold">{width}</div>
      </div>
    
  );
}