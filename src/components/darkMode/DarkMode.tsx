import ToggleSwitch from "./components/toggleSwitch/ToggleSwitch";

export default function DarkMode() {
  return (
    <>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
        <h3 className="flex justify-center text-lg font-bold text-slate-900 dark:text-white">Here</h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem quos aspernatur nulla? Voluptate magni quo perferendis sint esse incidunt.</p>
      </div>
      <div className="flex justify-center mt-10">
        <ToggleSwitch buttonText={"toggle me"} />
      </div>
    </>
  );
}