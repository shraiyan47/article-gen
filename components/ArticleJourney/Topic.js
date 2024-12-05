import React, { useState } from "react";

export default function Topic({ nextCallback }) {
  const [selectedArticleType, setSelectedArticleType] = useState(null);
  const [topic, setTopic] = useState('');
  const [articleType, setArticleType] = useState([
    "Technical",
    "News Article",
    "Comparison Article",
    "Blog",
  ]);
  const handleOptionClick = (option) => {
    setSelectedArticleType(option);
  };

  return (
    <div>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg  text-blueGray-700 "}>
              Step 1 : Topic and Article Type
            </h3>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Write Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Write Topic"
                  onInput={(x)=> setTopic(x.target.value)}
                />
              </div>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Article Type
                </label>
                <div>
                    
                  {articleType.map((x, i) => 
                    <label className="inline-flex items-center p-3 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-100 ml-3" key={i}>
                      <input
                        type="radio"
                        value={x} 
                        checked={selectedArticleType === x}
                        onChange={() => handleOptionClick(x)}
                        className="peer "
                      />
                      <span className="ml-2 text-sm font-medium text-gray-900 peer-checked:text-white">
                        {x}
                      </span>
                    </label>
                  )}
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => nextCallback({"step":"1","value":[topic,selectedArticleType]})}
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
