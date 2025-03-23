import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./index.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="flexed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="BottomCenter">
              {/* <button
                type="button"
                className="text-3xl p-3 
                hover:drop-shadow-xl
                hover:bg-gray-200 text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button> */}
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed
              sidebar
              dark:bg-secondary-dark-bg 
              bg-white
              "
            >
              Sidebar
            </div>
          ) : (
            <div
              className="w-0 
                dark:bg-secondary-dark-bg
              "
            >
              Sidebar w-0
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "mid:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static
            bg-main-bg dark:bg-main-dark-bg  
              navbar w-full 
            ">
              Navbar
            </div>
          </div>
          <div >
              <Routes>
                {/* Dashboard */}
                <Route path="/" element="Ecmmerce"/>
                <Route path="/ecommerce" element="Ecmmerce"/>
                {/* Pages */}
                 <Route path="/orders"  element="orders"/>
                 <Route path="/employee"  element="employee"/>
                 <Route path="/customers"  element="customers"/>

                 {/* Apps */}
                 <Route path="/kanban"  element="kanban"/>
                 <Route path="/calendar" element="calender"/>  
                   <Route path="/editor"  element="Editor"/>
                   <Route path="color-picker" 
                   element="ColorPicker"/>

                     {/* Charts*/}
                    <Route path="/line" element="line"/>
                    <Route path="/area" element="Area"/>
                    <Route path="/bar" element="Bar"/>
                    <Route path="/pie"  element="Pie"/>
                    <Route path="/financial" element="Finalcial"/>
                    <Route path="color-mapping" element="ColorMapping"/>
                    <Route path="/pyramid" element="Pyramid"/>
                    <Route path="/stacked" element="Stacked"/>
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
