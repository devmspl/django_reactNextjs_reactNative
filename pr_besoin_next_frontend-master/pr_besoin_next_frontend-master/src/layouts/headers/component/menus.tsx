import React, { useEffect, useState } from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";

const Menus = () => {
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const Data = JSON.parse(localStorage.getItem('IsLoginData') || "{}");
  //     setIsLogin(!!Data);
  //   }
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem('IsLoginData');
      console.log("Stored Data:", storedData); // Debugging line
      const isLoggedIn = storedData ? JSON.parse(storedData) : false;
      console.log("Is Logged In:", isLoggedIn); // Debugging line
      setIsLogin(isLoggedIn);
    }
  }, []);
  

  const filteredMenuData = menu_data.filter(menu => {
    if (!isLogin) {
     
      return menu.id !== 6 && menu.title !== 'Dashboard';
    } else {
    
      return true;
    }
  });

  return (
    <>
      {filteredMenuData.map((menu) =>
        menu.link || menu.sub_menus ? (
          <li key={menu.id} className={`nav-item ${menu.title === 'Dashboard' ? 'dashboard-menu' : ''}`}>
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              {menu.link ? (
                <Link href={menu.link} className="dropdown-item">
                  {menu.title}
                </Link>
              ) : (
                menu.title
              )}
            </span>
            {menu.sub_menus && (
              <ul className="dropdown-menu">
                {menu.sub_menus.map((s, i) => (
                  <li key={i}>
                    <Link href={s.link} className="dropdown-item">
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : menu.mega_menus ? (
          <li key={menu.id} className="nav-item dropdown mega-dropdown-sm">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              {menu.title}
            </a>
            <ul className="dropdown-menu">
              <li className="row gx-1">
                {menu.mega_menus.map((m) => (
                  <div key={m.id} className="col-md-4">
                    <div className="menu-column">
                      <h6 className="mega-menu-title">{m.title}</h6>
                      <ul className="style-none mega-dropdown-list">
                        {m.sub_menus.map((ms, i) => (
                          <li key={i}>
                            <Link href={ms.link} className="dropdown-item">
                              <span>{ms.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </li>
        ) : (
          <li key={menu.id} className="nav-item">
            <Link className="nav-link" href={menu.link} role="button">
              {menu.title}
            </Link>
          </li>
        )
      )}
    </>
  );
};

export default Menus;
