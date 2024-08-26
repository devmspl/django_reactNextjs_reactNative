"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/dashboard/images/besoin-high-resolution-logo-transparent.png";
import avatar from "@/assets/dashboard/images/avatar_01.jpg";
import profile_icon_1 from "@/assets/dashboard/images/icon/icon_23.svg";
import profile_icon_2 from "@/assets/dashboard/images/icon/icon_24.svg";
import profile_icon_3 from "@/assets/dashboard/images/icon/icon_25.svg";
import logout from "@/assets/dashboard/images/icon/icon_9.svg";
import nav_1 from "@/assets/dashboard/images/icon/icon_1.svg";
import nav_1_active from "@/assets/dashboard/images/icon/icon_1_active.svg";
import nav_2 from "@/assets/dashboard/images/icon/icon_2.svg";
import nav_2_active from "@/assets/dashboard/images/icon/icon_2_active.svg";
import nav_3 from "@/assets/dashboard/images/icon/icon_3.svg";
import nav_3_active from "@/assets/dashboard/images/icon/icon_3_active.svg";
import nav_4 from "@/assets/dashboard/images/icon/icon_4.svg";
import nav_4_active from "@/assets/dashboard/images/icon/icon_4_active.svg";
import nav_5 from "@/assets/dashboard/images/icon/icon_5.svg";
import nav_5_active from "@/assets/dashboard/images/icon/icon_5_active.svg";
import nav_6 from "@/assets/dashboard/images/icon/icon_6.svg";
import nav_6_active from "@/assets/dashboard/images/icon/icon_6_active.svg";
import nav_7 from "@/assets/dashboard/images/icon/icon_7.svg";
import nav_7_active from "@/assets/dashboard/images/icon/icon_7_active.svg";
import nav_8 from "@/assets/dashboard/images/icon/icon_8.svg";
import LogoutModal from "../../common/popup/logout-modal";
import { useDispatch, useSelector } from "react-redux";
import { creategetByIdRoleSlice } from "@/redux/Slices/AuthSlice";
// import { LOCAL_USER } from "@/utils/localstorage";

// nav data
const nav_data: {
  id: number;
  icon: StaticImageData;
  icon_active: StaticImageData;
  link: string;
  title: string;
}[] = [
  {
    id: 1,
    icon: nav_1,
    icon_active: nav_1_active,
    link: "/employee",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: nav_2,
    icon_active: nav_2_active,
    link: "/employee/profile",
    title: "My Profile",
  },
  {
    id: 3,
    icon: nav_3,
    icon_active: nav_3_active,
    link: "/employee/resume",
    title: "Resume",
  },
  {
    id: 4,
    icon: nav_4,
    icon_active: nav_4_active,
    link: "/employee/messages",
    title: "Messages",
  },
  {
    id: 5,
    icon: nav_5,
    icon_active: nav_5_active,
    link: "/employee/job-alert",
    title: "Job Alert",
  },
  {
    id: 6,
    icon: nav_6,
    icon_active: nav_6_active,
    link: "/employee/my-jobs",
    title: "My Job's",
  },
  {
    id: 7,
    icon: nav_7,
    icon_active: nav_7_active,
    link: "/employee/setting",
    title: "Account Settings",
  },
];
// props type 
type IProps = {
  isOpenSidebar: boolean,
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const CandidateAside = ({isOpenSidebar,setIsOpenSidebar}:IProps) => {
  const [storedId, setStoredId] = useState<string | null>(null);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const Users = useSelector((state: any) => state?.user);
  const Userdata = Users || [];
  console.log(Users,"my datadd")
  

//   const id = LOCAL_USER as any
// console.log(LOCAL_USER,"getLocalUser")


// const UserData=LOCAL_USER as any
// console.log(UserData,"datacheck")


const userId =
typeof window !== "undefined" ? localStorage.getItem("IsLoginData") : null;
const id = userId ? JSON.parse(userId) : null;


const UserData=  typeof window !== "undefined" ? localStorage.getItem("IsLoginData") : null;
const data = UserData ? JSON.parse(UserData) : null;


  useEffect(() => {
    dispatch(creategetByIdRoleSlice(id?._id)as any)
  }, [dispatch]);




  return (
    <>
    <aside className={`dash-aside-navbar ${isOpenSidebar?'show':''}`}>
      <div className="position-relative">
        <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
          <Link href="/">
            <Image src={logo} alt="logo" height={40} width={150} priority />
          </Link>
          <button onClick={() => setIsOpenSidebar(false)} className="close-btn d-block d-md-none">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="user-data">
          <div className="user-avatar online position-relative rounded-circle">
            <Image src={avatar} alt="avatar" className="lazy-img" style={{height:'auto'}} />
          </div>
          <div className="user-name-data">
            <button
              className="user-name dropdown-toggle"
              type="button"
              id="profile-dropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              {data?.fullname } 
            </button>
            <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  href="/employee/profile"
                >
                  <Image src={profile_icon_1} alt="icon" className="lazy-img" />
                  <span className="ms-2 ps-1">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  href="/employee/setting" >
                  <Image src={profile_icon_2} alt="icon" className="lazy-img" />
                  <span className="ms-2 ps-1">Account Settings</span>
                </Link>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <Image src={profile_icon_3} alt="icon" className="lazy-img" />
                  <span className="ms-2 ps-1">Notification</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="dasboard-main-nav">
          <ul className="style-none">
            {nav_data.map((m) => {
              const isActive = pathname === m.link;
              return (
                <li key={m.id} onClick={() => setIsOpenSidebar(false)}>
                  <Link
                    href={m.link}
                    className={`d-flex w-100 align-items-center ${isActive ? "active" : ""}`}
                  >
                    <Image
                      src={isActive ? m.icon_active : m.icon}
                      alt="icon"
                      className="lazy-img"
                    />
                    <span>{m.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="#"
                className="d-flex w-100 align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                <Image src={nav_8} alt="icon" className="lazy-img" />
                <span>Delete Account</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="profile-complete-status">
          <div className="progress-value fw-500">87%</div>
          <div className="progress-line position-relative">
            <div className="inner-line" style={{ width: "80%" }}></div>
          </div>
          <p>Profile Complete</p>
        </div>

        <a href="#" className="d-flex w-100 align-items-center logout-btn">
          <Image src={logout} alt="icon" className="lazy-img" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
    {/* LogoutModal star */}
    <LogoutModal/>
    {/* LogoutModal end */}
    </>
  );
};

export default CandidateAside;
