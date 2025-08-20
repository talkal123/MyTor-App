import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "/components/ui/alert-dialog";

const NavFooter = ({ scrollToSearch }) => {
  return (
    <div className="max-w-[1100px] w-full p-2 pb-5 border-t border-gray-300 fixed bottom-0 bg-gray-100 shadow-md z-50 rounded-md">
      <div className="bg-white w-full flex justify-between p-2 rounded-l-full rounded-r-full">
        <div onClick={scrollToSearch} className="flex relative cursor-pointer ">
          <div className="bg-red-600 text-white rounded-full p-3 absolute">
            <IoMdSearch className="w-6 h-6 " />
          </div>
          <div className="bg-gray-100 rounded-l-full rounded-r-full p-3 pr-6 pl-14 ">
            <p>Search</p>
          </div>
        </div>
        <Link to="/profile">
          <div className="bg-gray-100 rounded-l-full rounded-r-full p-3 cursor-pointer">
            <IoPersonOutline className="w-6 h-6" />
          </div>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="bg-gray-100 rounded-l-full rounded-r-full p-3 cursor-pointer">
          <CiBookmark className="w-6 h-6" />
        </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        

        <AlertDialog>
          <AlertDialogTrigger>
            <div className="bg-gray-100 rounded-l-full rounded-r-full p-3 cursor-pointer">
              <RxHamburgerMenu className="w-6 h-6" />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default NavFooter;
