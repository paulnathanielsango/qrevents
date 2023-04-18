import { signOut } from "next-auth/react";
import Header from "../Header";
import Section from "../Section";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const Admin = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <>
      <Tab.Group>
        <Tab.List>
          <Header />
        </Tab.List>
        <Tab.Panels>
          <Section />
        </Tab.Panels>
      </Tab.Group>
      <a
        href={`/api/auth/signout`}
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign Out
      </a>
    </>
  );
};

export default Admin;
