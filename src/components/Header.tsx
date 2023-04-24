import { signOut } from "next-auth/react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

const TabStyle = (current: number, index: number) => {
  if (current === index) {
    return "border-gray-700 text-gray-400";
  }
  return;
};

const Header = ({ tabNum }: any) => {
  return (
    <header className="flex w-screen items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
      <Tab.Group vertical>
        <Tab.List>
          <Tab
            className={`outline-none ml-1 px-5 py-2 border-b-4 ${TabStyle(
              tabNum,
              1
            )}`}
          >
            <Link href="/">Records</Link>
          </Tab>
          <Tab
            className={`outline-none ml-1 px-5 py-2 border-b-4 ${TabStyle(
              tabNum,
              2
            )}`}
          >
            <Link href="/qrscanner">Scanner</Link>
          </Tab>
          <Tab
            className={`outline-none ml-1 px-5 py-2 border-b-4 ${TabStyle(
              tabNum,
              3
            )}`}
          >
            <Link href="/qrgenerator">QR generator</Link>
          </Tab>
          <Tab className={"outline-none ml-1 px-5 py-2 border-b-4"}>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </Tab>
        </Tab.List>
      </Tab.Group>
    </header>
  );
};

export default Header;

// import Header from "../Header";
// import { Tab } from "@headlessui/react";

// const Admin = (tab: any) => {
//   return (
//     <Tab.Group>
//       <Tab.List>
//         <Header tab={tab} />
//       </Tab.List>
//     </Tab.Group>
//   );
// };

// export default Admin;
