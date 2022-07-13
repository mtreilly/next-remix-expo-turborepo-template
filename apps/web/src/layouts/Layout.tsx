import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className={"flex  flex-wrap"}>
      <nav className={"bg-black text-white p-4 w-full"}>
        <ul className="flex flex-col md:flex-row">
          <li className="md:mr-4">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li className="md:mr-4">
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
          </li>
          <li className="md:mr-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main className={"flex m-4 justify-center text-red-900 w-full"}>{children}</main>
    </div>
  );
};
export default Layout;
