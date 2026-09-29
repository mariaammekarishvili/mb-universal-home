/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import menu_data from "../../../data/MenuData";
import { useEffect, useState } from "react";

const NavMenu = () => {

    const [navClick, setNavClick] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navClick]);

    return (
        <ul>
            {menu_data.map((menu) => (
                <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
                    <Link to={menu.link} onClick={() => setNavClick(!navClick)}>
                        {menu.title}
                    </Link>

                    {menu.has_dropdown && (
                        <>
                            {menu.sub_menus && (
                                <ul className="submenu">
                                    {menu.sub_menus.map((sub_m, i) => (
                                        <li key={i}>
                                            <Link to={sub_m.link} onClick={() => setNavClick(!navClick)}>
                                                {sub_m.title}
                                            </Link>
                                            {sub_m.mega_menus && (
                                                <ul className="submenu">
                                                    {sub_m.mega_menus.map((mega_m, i) => (
                                                        <li key={i}>
                                                            <Link to={mega_m.link} onClick={() => setNavClick(!navClick)}>
                                                                {mega_m.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
