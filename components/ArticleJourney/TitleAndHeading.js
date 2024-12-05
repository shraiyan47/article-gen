import React, { useState } from "react";

export default function TitleAndHeading({ nextCallback }) { 
  const [selectedTitle, setSelectedTitle] = useState(null); 
  const [Titles, setTitles] = useState([
    "Technical Technical Technical",
    "News Article News Article News Article" ,
    "Comparison Article Comparison Article Comparison Article",
    "Blog Comparison Article Comparison Article",
  ]);

  const [selectedHeadingNo, setSelectedHeadingNo] = useState(null); 
  const [HeadingNos, setHeadingNos] = useState([
    "3 - 4 Headings",
    "6 - 7 Headings", 
  ]);

  const [selectedWordNo, setSelectedWordNo] = useState(null); 
  const [WordNos, setWordNos] = useState([
    "500 - 1000 words",
    "1500 - 2000 words" 
  ]);

  const handleOptionClick = (option) => {
    console.log(option)
    setSelectedTitle(option);
    setSelectedWordNo(option);
    setSelectedHeadingNo(option);
  };

  const handleHeadingClick = (option) => {
    console.log(option)  
    setSelectedHeadingNo(option);
  };

  const handleWordClick = (option) => {
    console.log(option) 
    setSelectedWordNo(option); 
  };
  return (
    <div>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg  text-blueGray-700 "}>
            Step 3 : Title and Number of Heading and Words 
            </h3>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Titles
                </label>
                <div>
                  {Titles.map((x, i) => (
                    <label
                      className="inline-flex items-center p-3 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-100 ml-3"
                      key={i}
                    >
                      <input
                        type="radio"
                        value={x}
                        checked={selectedTitle === x}
                        onChange={() => handleOptionClick(x)}
                        className="peer "
                      />
                      <span className="ml-2 text-sm font-medium text-gray-900 peer-checked:text-white">
                        {x}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Number of Heading
                </label>
                <div>
                  {HeadingNos.map((x, i) => (
                    <label
                      className="inline-flex items-center p-3 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-100 ml-3"
                      key={i}
                    >
                      <input
                        type="radio"
                        value={x}
                        checked={selectedHeadingNo === x}
                        onChange={() => handleHeadingClick(x)}
                        className="peer "
                      />
                      <span className="ml-2 text-sm font-medium text-gray-900 peer-checked:text-white">
                        {x}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Number of Words
                </label>
                <div>
                  {WordNos.map((x, i) => (
                    <label
                      className="inline-flex items-center p-3 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-100 ml-3"
                      key={i}
                    >
                      <input
                        type="radio"
                        value={x}
                        checked={selectedWordNo === x}
                        onChange={() => handleWordClick(x)}
                        className="peer "
                      />
                      <span className="ml-2 text-sm font-medium text-gray-900 peer-checked:text-white">
                        {x}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
               
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    nextCallback({
                      step: "3",
                      value: [selectedTitle, selectedHeadingNo, selectedWordNo],
                    })
                  }
                >
                  {"Next >> "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
