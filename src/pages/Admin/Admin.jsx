import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { BiLogoBlogger } from "react-icons/bi";
import { TiTicket } from "react-icons/ti";
import { AiOutlineBank } from "react-icons/ai";
import { RiFileReportLine } from "react-icons/ri";

export function AdminForm() {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex gap-2 mt-32">
        <div className="min-w-72 bg-blue-100 rounded-md p-7">
          <div className="flex flex-col h-full">
            <p className="text-[#013CC6] text-xl font-bold text-center">
              Admin
            </p>
            <div className="flex flex-col pl-8 font-medium text-slate-500 text-lg my-auto gap-4 ">
              <NavLink
                to=""
                className="flex gap-2 items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaUser />
                <p>User</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <AiOutlineBank />
                <p>Department</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <BiMapPin />
                <p>Position</p>
              </NavLink>
              <NavLink
                to=""
                className="flex items-center gap-2 hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <RiFileReportLine />
                <p>Report</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <BiLogoBlogger />
                <p>BlogPost</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TiTicket />
                <p>Voucher</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <button className="bg-blue-500 text-white text-base font-medium px-4 py-2 rounded self-end mr-20 shadow-md">
            Logout
          </button>
          <div className="flex flex-col text-slate-500">
            <p className="text-center text-xl font-medium p-2">User Manager</p>
            <div className="flex justify-between pr-8 gap-4 text-lg font-semibold">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Search by Name</label>
                <input
                  className="bg-slate-200 p-1 focus:outline-none rounded"
                  type="text"
                  placeholder="Enter user name"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Search by Phone</label>
                <input
                  className="bg-slate-200 p-1 focus:outline-none rounded"
                  type="text"
                  placeholder="Enter user phone"
                  id="phone"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Search by Email</label>
                <input
                  type="text"
                  className="bg-slate-200 p-1 focus:outline-none rounded"
                  placeholder="Enter user email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-col mr-8 divide-y p-2">
              <div className="grid grid-cols-6 mt-4 font-semibold gap-2 items-center">
                <p>UserID</p>
                <p>User Name</p>
                <p>Status</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Adress</p>
              </div>
              <div className="grid grid-cols-6 mt-4 break-words items-center gap-2">
                <p className="text-blue-500">000312</p>
                <p className="text-blue-500">Vu Ha Nam</p>
                <p>1</p>
                <p>0905444123</p>
                <p className="">quachtinh@gmail.com</p>
                <p className="">K82 Nguyen Luong Bang, Lien Chieu, Da Nang</p>
              </div>
              <div className="grid grid-cols-6 mt-4 break-words items-center gap-2">
                <p className="text-blue-500">000232</p>
                <p className="text-blue-500">Vu Nam Ha</p>
                <p>1</p>
                <p>0905444123</p>
                <p className="text-wrap">thandieudaihiep@gmail.com</p>
                <p className="text-wrap">
                  K82 Nguyen Luong Bang, Lien Chieu, Da Nang
                </p>
              </div>
              <div className="grid grid-cols-6 mt-4 break-words items-center gap-2">
                <p className="text-blue-500">000213</p>
                <p className="text-blue-500">Nam Vu Ha</p>
                <p>1</p>
                <p>0905444123</p>
                <p className="">tieulongnu@gmail.com</p>
                <p className="text-wrap">
                  K82 Nguyen Luong Bang, Lien Chieu, Da Nang
                </p>
              </div>
              <div className="grid grid-cols-6 mt-4 break-words items-center gap-2">
                <p className="text-blue-500">000455</p>
                <p className="text-blue-500">Nam Ha Vu</p>
                <p>1</p>
                <p>0905444123</p>
                <p className="text-balance">duongqua@gmail.com</p>
                <p className="text-wrap">
                  K82 Nguyen Luong Bang, Lien Chieu, Da Nang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminForm;
