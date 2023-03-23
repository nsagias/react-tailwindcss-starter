import { useEffect, useState } from "react";


type ButtonText = { buttonOnText: string, buttonOffText: string };

export default function ToggleSwitchDefault({ buttonOnText, buttonOffText } : ButtonText ): JSX.Element {

  
  const [localStorageTheme, setLocalStorageTheme] = useState<boolean>(localStorage.theme);
 
  const toggleUsedefaultTheme = (e: any) => {
    e.preventDefault();
    setLocalStorageTheme(false);
    
  };

  useEffect(() => {
    if (localStorageTheme === false) {
      localStorage.removeItem("theme");
    }
  },[localStorageTheme]);


  return (
    <div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input 
          type="checkbox" 
          name="toggle" 
          id="toggle" 
          onClick={(e) => toggleUsedefaultTheme(e)}
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none ${localStorageTheme ? "border-[#68d391] right-0": ""}  cursor-pointer`}
        />
        <label 
          htmlFor="toggle" 
          className={`toggle-label block overflow-hidden h-6 rounded-full ${localStorageTheme ? "bg-[#68d391]": "bg-gray-300"} cursor-pointer `}>
         </label>

         <label 
          htmlFor="toggle" 
          className="text-xs text-gray-700">{ "remove" }
          {!localStorageTheme ? buttonOnText : buttonOffText}
      </label>
      </div>
   
    </div>
  );
}