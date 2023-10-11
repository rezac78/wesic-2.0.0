import React, { Dispatch, SetStateAction } from 'react';
import {
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from "@/Events/Event";

interface Sidebars {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}
const Sidebar = (props: Sidebars) => {
  return (
    <>
      {!props.isMenuOpen ? <div className="p-2 bg-gray-900 mdl:w-60 flex flex-col  md:flex ">
        <nav>
          {SidebarItem.map((e, index) => (
            <a className="flex text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href={e.Link}>
              <e.icon className='mx-2' height={20} width={20} />{e.name}
            </a>
          ))}
        </nav>
        <a className="flex text-white py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto" href="#">
          <ArrowLeftOnRectangleIcon className='mx-2' height={20} width={20} />Logout
        </a>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
        <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Established 2019 - {new Date().getFullYear()}</p>

      </div> : null}

    </>
  );
};

export default Sidebar;
