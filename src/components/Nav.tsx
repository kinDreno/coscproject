import { BiCodeAlt } from "react-icons/bi";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
export const Nav = () => {
  return (
    <>
      <nav className="z-50 fixed max-sm:h-[13vh] h-[11vh] w-full backdrop-blur-sm flex justify-around items-center rounded-b-lg">
        <div>
          <Link className=" flex space-x-3 items-center" href={"/"}>
            <BiCodeAlt size={50} />
            <h1 style={{ textShadow: "0 0 5px white" }}>
              <b>BSCS 1-1</b>
            </h1>
          </Link>
        </div>
        <ul className="flex space-x-3 items-center">
          {[
            ["Home", "/"],
            ["Profiles", "/#profiles"],
            ["Footer", "/#footer"],
          ].map(([el, hre], i) => {
            return (
              <Link key={i} href={hre}>
                <li
                  style={{ textShadow: "0 0 5px white" }}
                  className="hover:underline text-xl max-sm:text-sm "
                >
                  &#8226; {el}
                </li>
              </Link>
            );
          })}{" "}
        </ul>
        <div className="flex items-center space-x-3">
          <h2 className="text-lg max-sm:hidden">Set Color Theme</h2>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};
