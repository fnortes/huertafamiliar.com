import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/solid";
import { DropdownUserPropsType } from "./login/login.types";
import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export const DropdownUser: FC<DropdownUserPropsType> = ({
  user,
  onClickExitButton,
}) => {
  if (!user) return null;

  const { image, name } = user;

  const handleOnClickExit = () => {
    onClickExitButton();
    signOut();
  };

  return (
    <div className="fixed">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center text-sm hover:text-orange-600">
            {image && (
              <Image
                className="rounded-full"
                src={image}
                width={36}
                height={36}
                alt={name || ""}
              />
            )}
            <span className="ml-2 w-24 text-ellipsis overflow-hidden whitespace-nowrap">
              {name}
            </span>
            <ChevronDownIcon className="h-5 w-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-44 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-600 text-white" : "text-gray-700"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={handleOnClickExit}
                  >
                    <LogoutIcon
                      className={`${
                        active ? "text-white" : "text-orange-600"
                      } w-5 h-5 mr-2`}
                    />
                    Salir
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
