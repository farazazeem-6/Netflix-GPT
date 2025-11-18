import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai from "../utils/openAi";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.language.lang);
  const inputRef=useRef(null)
//   console.log(languageKey);


//   async function handleGptSearch() {
//     console.log(inputRef.current.value);
//     const gptResults=await openai.chat.completions.create({
//         messages:[{}],
//         model:'gpt-3.5-turbo'
//     })
//     console.log(gptResults.choices);
//   }

  return (
    <div className="flex justify-center pt-[10%]">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-2xl" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={inputRef}
          type="text"
          placeholder={lang[languageKey].placerHolderText}
          className="py-2 px-4 m-4 rounded-lg col-span-9 text-black bg-white"
        />
        <button className="bg-red-700 text-white text-sm font-semibold rounded-lg py-2 px-4 col-span-3 m-4 cursor-pointer hover:bg-red-800">
          {lang[languageKey].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
