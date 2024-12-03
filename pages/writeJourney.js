"use client";

import React, { useState } from "react";
import SidebarArticle from "components/Sidebar/SidebarArticle";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CardTable from "components/Cards/CardTable";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

function writeJourney() {

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
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className={"font-semibold text-lg  text-blueGray-700 "}>
                      Topic
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
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Write Topic"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          {"Next >> "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
}

export default writeJourney;
