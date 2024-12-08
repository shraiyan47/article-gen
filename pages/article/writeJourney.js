/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import SidebarArticle from "components/Sidebar/SidebarArticle";
import AdminNavbar from "components/Navbars/AdminNavbar.js"; 
import FooterAdmin from "components/Footers/FooterAdmin";
import Topic from "components/ArticleJourney/Topic";
import Keywords from "components/ArticleJourney/Keywords";
import TitleAndHeading from "components/ArticleJourney/TitleAndHeading"; 
// import HeadingSort from "components/ArticleJourney/HeadingSort";
import Draggable from "components/ArticleJourney/HeadingSort";

function writeJourney() { 
const [steps, setSteps] = useState('0');
const [values, setValues] = useState([]);
  function callbackHandler(val) {
    console.log(val)
    // if(val.step === '1'){
      setSteps(val.step)
      setValues([...values,val.value])
    // }
  }

  useEffect(() => {
    console.log(values)
  }, [values])
  

  return (
    <div>
      <SidebarArticle />
      <div className="relative md:ml-64 bg-blueGray-100 mt-11 top-6 text-black">
        <AdminNavbar />

        <div className="relative bg-blueGray-800 md:pt-20 pb-20 pt-4">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
        </div>

        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4"> 
            <div
              className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
              }
            >
            {
              steps === '0'
              ?
              <Topic nextCallback={callbackHandler} />
              :
              steps === '1'
              ?
              <><Keywords nextCallback={callbackHandler}  /></>
              :steps === '2'
              ?
              <><TitleAndHeading nextCallback={callbackHandler}  /></>
              :steps === '3'
              ?
              <><Draggable nextCallback={callbackHandler}   /></>
              :steps === '4'
              ?
              <>5</>
              :steps === '5' &&
              <>6</>
            }

            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
}

export default writeJourney;
