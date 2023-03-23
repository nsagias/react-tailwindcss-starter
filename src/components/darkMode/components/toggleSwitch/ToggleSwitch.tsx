import { useEffect, useState } from "react";


type ButtonText = { buttonOnText: string, buttonOffText: string };

export default function ToggleSwitch({ buttonOnText, buttonOffText } : ButtonText ): JSX.Element {

  const [toggle, setToggle ] = useState<boolean>(localStorage.theme === "dark");

 
  if (toggle === false) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  };

  const toggleDarkTheme = (e: any, bool: boolean) => {
    e.preventDefault();
    setToggle(bool);
    
  };

  useEffect(() => {
  
  }, [toggle]);


  return (
    <div>

      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input 
          type="checkbox" 
          name="toggle" 
          id="toggle" 
          onClick={e => toggleDarkTheme(e, !toggle)}
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none ${toggle ? "border-[#68d391] right-0": ""}  cursor-pointer`}
        />
        <label 
          htmlFor="toggle" 
          className={`toggle-label block overflow-hidden h-6 rounded-full ${toggle ? "bg-[#68d391]": "bg-gray-300"} cursor-pointer `}>
         </label>
      </div>

      <label 
        htmlFor="toggle" 
        className="text-xs text-gray-700">{!toggle ? buttonOnText : buttonOffText}
      </label>
   
    </div>
  );
}