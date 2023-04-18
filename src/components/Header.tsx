import { Tab } from "@headlessui/react";
import { useState } from "react";

const TabStyle = (current: number, index: number) => {
  if (current === index) {
    return "border-gray-700 text-gray-400";
  }
  return;
};

const Header = () => {
  const [currentTab, setCurrentTab] = useState(1);

  console.log(currentTab);

  return (
    <header className="flex w-screen justify-center">
      <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
        <Tab
          className={`outline-none flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${TabStyle(
            currentTab,
            1
          )}`}
          onClick={(e) => setCurrentTab(1)}
        >
          Records
        </Tab>
        <Tab
          className={`outline-none flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${TabStyle(
            currentTab,
            2
          )}`}
          onClick={(e) => setCurrentTab(2)}
        >
          Scanner
        </Tab>
        <Tab
          className={`outline-none flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${TabStyle(
            currentTab,
            3
          )}`}
          onClick={(e) => setCurrentTab(3)}
        >
          QR Generator
        </Tab>
        <Tab
          className={`outline-none flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${TabStyle(
            currentTab,
            4
          )}`}
          onClick={(e) => setCurrentTab(4)}
        >
          Logout
        </Tab>
      </div>
    </header>
  );
};

export default Header;
